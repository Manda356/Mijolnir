/*import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import Copyright from "./Copyright";
import {useEffect, useState} from "react";
import {formStyle} from "./Sign_in";
import {useNavigate} from "react-router-dom";
import useStyle from "../../Style/Style";
import logo from "../../assets/logo/todo list_blue.png";

const theme = createTheme();

export const urlAuth: string = "http://localhost:5000/users/"
export const optionAuth: string = "http://localhost:5000/category/"

const Sign_up: any = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const classes: any = useStyle()

    const [[
        username,
        email,
        password,
        confirmation
    ],setError] = useState([ false,false,false,false ])

    if(token !== null){
        useEffect(()=>{
            navigate("/")
        },[ token ])
    }else {
        const PostUsersAndOption = async (ev: React.FormEvent<HTMLFormElement>) => {
            ev.preventDefault()

            const form = ev.target as HTMLFormElement
            const formData = new FormData( form )
            const newData = Object.fromEntries( formData.entries() )

            const dataArray: any = Object.values(newData)
            const dataError: any = dataArray.map((item: string, i: number) => (
                item === ""
                    ? true : i === 0
                        ? ( item.length > 20 || item.length < 4 || /\W/.test(item) ) : i === 1
                            ? false : i === 2
                                ? ( item.length > 20 || item.length < 6 ) : i === 3
                                    ? ( item !== dataArray[2] ) : true
            ))

            setError( dataError )

            if( dataError.find((err: boolean) => err) ){
                console.error("erreur")
            }else {
                try {
                    const res = await fetch( urlAuth + "create_account",{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            email: newData.email,
                            username: newData.username,
                            password: newData.password,
                        })
                    })

                    const response = await res.json()

                    if(response.insertedId !== undefined){

                        const resOption = await fetch( optionAuth,{
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify(
                                [
                                    {
                                        users_Id: response.insertedId,
                                        image: "https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    },{
                                    users_Id: response.insertedId,
                                    image: "https://images.pexels.com/photos/2888489/pexels-photo-2888489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                },{
                                    users_Id: response.insertedId,
                                    image: "https://images.pexels.com/photos/568785/pexels-photo-568785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                },{
                                    users_Id: response.insertedId,
                                    image: "https://images.pexels.com/photos/239107/pexels-photo-239107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                }
                                ]
                            )
                        })

                        navigate("/sign_in")
                        form.reset()
                    }else {
                        console.log("error")
                    }

                }catch (err) {
                    console.error(err)
                }
            }
        }

        return (
            <ThemeProvider theme={ theme }>
                <Box className={ classes.Center }>
                    <Container component="main" maxWidth="xs" sx={{ width:350 }}>

                        <CssBaseline />
                        <Box sx={formStyle}>

                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}
                                    src={logo}
                                    alt="mijolnir-logo"/>

                            <Typography component="h1" variant="h5">Sign up</Typography>

                            <Box component="form"
                                 onSubmit={ PostUsersAndOption }
                                 noValidate
                                 sx={{ mt: 1 }}>

                                <TextField error={username}
                                           size="small"
                                           margin="normal"
                                           required
                                           fullWidth
                                           id="username"
                                           label="Username"
                                           name="username"
                                           autoComplete="Username"
                                           autoFocus/>

                                <TextField error={email}
                                           size="small"
                                           id="email"
                                           margin="normal"
                                           required
                                           fullWidth
                                           label="Email Address"
                                           name="email"
                                           autoComplete="email"
                                           type="email"
                                           autoFocus/>

                                <TextField error={password}
                                           size="small"
                                           margin="normal"
                                           required
                                           fullWidth
                                           name="password"
                                           label="Password"
                                           type="password"
                                           id="password"
                                           autoComplete="current-password"/>

                                <TextField error={confirmation}
                                           size="small"
                                           margin="normal"
                                           required
                                           fullWidth
                                           name="confirmation"
                                           label="Confirmation"
                                           type="password"
                                           id="confirmation"
                                           autoComplete="current-password"/>

                                <Button size="small"
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 2, mb: 2 }}>Create</Button>

                                <Grid container>
                                    <Grid item xs>
                                        <Link href="/sign_in" variant="body2">
                                            Back to sign in
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 2 }}/>
                    </Container>
                </Box>
            </ThemeProvider>
        );
    }

};

export default Sign_up;*/
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import Copyright from "./Copyright";
import {useEffect, useState} from "react";
import {formStyle} from "./Sign_in";
import {useNavigate} from "react-router-dom";
import useStyle from "../../Style/Style";
import logo from "../../assets/logo/todo list_blue.png";

import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";  // 🔹 importe ton auth Firebase

const theme = createTheme();

const Sign_up: React.FC = () => {
    const navigate = useNavigate()
    const classes: any = useStyle()

    const [[ username, email, password, confirmation ], setError] =
        useState([false, false, false, false])

    // Redirection si déjà connecté
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Création d'utilisateur Firebase
    const PostUsersAndOption = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData(form)
        const newData = Object.fromEntries(formData.entries())

        const dataArray: any = Object.values(newData)

        // Validation côté client
        const dataError: any = dataArray.map((item: string, i: number) => (
            item === ""
                ? true : i === 0
                    ? (item.length > 20 || item.length < 4 || /\W/.test(item)) : i === 1
                        ? false : i === 2
                            ? (item.length > 20 || item.length < 6) : i === 3
                                ? (item !== dataArray[2]) : true
        ))

        setError(dataError)

        if (dataError.find((err: boolean) => err)) {
            console.error("Erreur validation")
        } else {
            try {
                // 🔹 Création de l'utilisateur Firebase
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    newData.email as string,
                    newData.password as string
                );

                const user = userCredential.user;
                console.log("Utilisateur créé :", user);
                // 🔹 Stocker les "options" dans Firestore (ID généré automatiquement)
                if( user ){
                    await addDoc(collection(db, "options"), {
                        userId: user.uid, // 🔑 lien avec l'utilisateur
                        categories: [
                            {
                                image: "https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            },
                            {
                                image: "https://images.pexels.com/photos/2888489/pexels-photo-2888489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            },
                            {
                                image: "https://images.pexels.com/photos/568785/pexels-photo-568785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            },
                            {
                                image: "https://images.pexels.com/photos/239107/pexels-photo-239107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            }
                        ]
                    });
                    // 🔹 Après inscription, redirection vers Sign_in
                    navigate("/sign_in")
                    form.reset()
                }

            } catch (err: any) {
                console.error("Erreur Firebase:", err.message)
                setError([false, true, true, true])
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.Center}>
                <Container component="main" maxWidth="xs" sx={{ width: 350 }}>

                    <CssBaseline />
                    <Box sx={formStyle}>

                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}
                                src={logo}
                                alt="mijolnir-logo"/>

                        <Typography component="h1" variant="h5">Sign up</Typography>

                        <Box component="form"
                             onSubmit={PostUsersAndOption}
                             noValidate
                             sx={{ mt: 1 }}>

                            <TextField error={username}
                                       size="small"
                                       margin="normal"
                                       required
                                       fullWidth
                                       id="username"
                                       label="Username"
                                       name="username"
                                       autoComplete="Username"
                                       autoFocus/>

                            <TextField error={email}
                                       size="small"
                                       id="email"
                                       margin="normal"
                                       required
                                       fullWidth
                                       label="Email Address"
                                       name="email"
                                       autoComplete="email"
                                       type="email"/>

                            <TextField error={password}
                                       size="small"
                                       margin="normal"
                                       required
                                       fullWidth
                                       name="password"
                                       label="Password"
                                       type="password"
                                       id="password"
                                       autoComplete="current-password"/>

                            <TextField error={confirmation}
                                       size="small"
                                       margin="normal"
                                       required
                                       fullWidth
                                       name="confirmation"
                                       label="Confirmation"
                                       type="password"
                                       id="confirmation"
                                       autoComplete="current-password"/>

                            <Button size="small"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2 }}>Create</Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="/sign_in" variant="body2">
                                        Back to sign in
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 2 }} />
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Sign_up;
