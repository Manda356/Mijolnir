import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    TextField,
    Typography
} from "@mui/material";
import Copyright from "./Copyright";
import AuthLink from './AuthLink';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/logo/todo list_blue.png";
import useStyle from "../../Style/Style";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";  // 🔹 importe ton auth Firebase

const theme = createTheme();

export const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const Sign_in: React.FC = () => {
    const [[ email, password ], setError ] = useState([ false,false ])
    const navigate = useNavigate()
    const [ disabled, setDisabled ] = useState(false)
    const classes: any = useStyle()

    // Vérifier si user est déjà connecté
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/"); // 🔹 redirection si déjà connecté
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Fonction de connexion avec Firebase
    const SignInUsers = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData(form)
        const newData = Object.fromEntries(formData.entries())

        const dataArray: any = Object.values(newData)

        setError(dataArray.map((item: string) => item === ""))
        setDisabled( true )

        if (email || password){
            console.log("error")
            setDisabled( false )
        } else {
            try {
                await signInWithEmailAndPassword(
                    auth,
                    newData.email as string,
                    newData.password as string
                )

                location.reload() // 🔹 redirection

                form.reset()
            } catch (err: any) {
                console.error(err)
                setError([true, true])
                setDisabled( false )
            }
        }
    }

    return (
        <ThemeProvider theme={ theme }>
            <Box className={ classes.Center }>
                <Container component="main"
                           maxWidth="xs"
                           sx={{ width:350 }}>

                    <CssBaseline />

                    <Box sx={formStyle}>

                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}
                                src={logo}
                                alt="mijolnir-logo"/>

                        <Typography component="h1" variant="h5">Sign in</Typography>

                        <Box component="form"
                             onSubmit={SignInUsers}
                             noValidate sx={{ mt: 1 }}>
                            <TextField error={email}
                                       size="small"
                                       margin="normal"
                                       required
                                       fullWidth
                                       disabled={disabled}
                                       id="email"
                                       label="Email Address"
                                       name="email"
                                       autoComplete="email"
                                       autoFocus/>

                            <TextField error={password}
                                       size="small"
                                       margin="normal"
                                       required
                                       fullWidth
                                       disabled={disabled}
                                       name="password"
                                       label="Password"
                                       type="password"
                                       id="password"
                                       autoComplete="current-password"/>

                            <FormControlLabel
                                control={<Checkbox value="remember"
                                                   disabled={disabled}
                                                   size="small"
                                                   color="primary" />}
                                label={<Typography variant="body2">Remember me</Typography>}
                            />

                            <Button type="submit"
                                    fullWidth
                                    size="small"
                                    disabled={disabled}
                                    variant="contained"
                                    sx={{ mt: 1, mb: 2 }}>Sign In{ disabled ? "..." : "" }</Button>

                            <AuthLink />
                        </Box>
                    </Box>

                    <Copyright sx={{ mt: 3, mb: 4 }} />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Sign_in;
