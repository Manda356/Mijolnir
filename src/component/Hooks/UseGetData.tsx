import React, {useEffect, useState} from 'react';
import {createClient} from "pexels";
import {useRecoilState, useSetRecoilState} from "recoil";
import {ChangeBgImage, loaderImage, PexelsImage} from "../Application/State/BackgroundImage";
import {UsersLoader, UsersState, UsersType} from "../Application/State/UsersState";
import {OptionLoader, OptionState, OptionType, Project} from "../Application/State/OptionState";
import {TaskLoader, TaskState} from "../Application/State/TaskState";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const useGetData = ( url: string ) => {
    const [response, ] = useState('')
    const navigate = useNavigate()

    const [imageBg, setImage] = useRecoilState<Array<any>>(PexelsImage)
    const setChangeBgImage = useSetRecoilState(ChangeBgImage)
    const [users,setUsers] = useRecoilState<UsersType>(UsersState)
    const [option, setOption] = useRecoilState<Array<OptionType>>(OptionState)
    const setLoader = useSetRecoilState(loaderImage)
    const setProject = useSetRecoilState(Project)
    const setOptionLoader = useSetRecoilState(OptionLoader)
    const setUsersLoader = useSetRecoilState(UsersLoader)
    const setTasksData = useSetRecoilState(TaskState)
    const setTasksLoader = useSetRecoilState(TaskLoader)

    const GetPhotos = () => {
        const client = createClient('0ZHed9hkzeVlC5rbPyRJKmi7nZuoVXTyRBzJ0uthxgYRBiSb1ydk3eTx');
        const query = 'Night';

        client.photos.search({ query, per_page: 100 }).then((photos: any) => {
            const photosFilter = photos.photos.filter((item: any) => item.height < item.width )
            const photosI = photosFilter.splice(-20)

            setImage( photosI )
        })
    }

    const GetOption = async (userId: string) => {
        try {
            // 🔹 Chercher le(s) document(s) où userId == users.uid
            const q = query(collection(db, "options"), where("userId", "==", userId));
            const querySnapshot = await getDocs(q);

            let response: Array<OptionType> = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                // ici on suppose que tu as `categories: [...]` dans Firestore
                response = data.categories || [];
            });

            // 🔹 Même logique que ton ancien code
            const newOption = option.map((item, index) => ({ ...item, ...response[index], users_Id: userId }));
            const optionEnd = response.filter((item) => item.option !== undefined);
            const pathNow = newOption.filter((item) => document.location.pathname === item.path);

            setOption([...newOption, ...optionEnd]);
            setProject(pathNow[0]);
            setLoader(false);
            setOptionLoader(false);

            setChangeBgImage(
                pathNow[0]?.image === undefined
                    ? imageBg[0].src.large2x
                    : pathNow[0].image
            );
        } catch (err) {
            setOptionLoader(true);
            console.error("Erreur GetOption Firestore:", err);
        }
    };

    const GetData = async (userId: any) => {
        try {
            // 🔹 Récupérer les tâches où userId == users.uid
            const q = query(collection(db, "tasks"), where("users_Id", "==", userId));
            const querySnapshot = await getDocs(q);

            const response: any = [];
            querySnapshot.forEach((doc) => {
                response.push({ id: doc.id, ...doc.data() });
            });

            setTasksData(response);
            setTasksLoader(false);
        } catch (err) {
            console.error("Erreur GetData Firestore:", err);
            setTasksLoader(true);
        }
    };

    const GetUsers = async (firebaseUserId: string, email: string) => {
        // Ici on pourrait créer ou récupérer un user dans notre API
        const userData = { _id: firebaseUserId, email };
        setUsers(userData);
        await GetOption(firebaseUserId);
        await GetData(firebaseUserId);
        setUsersLoader(false);
    };

    useEffect(() => {
        GetPhotos()
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if ( user ) {
                await GetUsers(user.uid, user.email || "");
            } else {
                navigate("/sign_in");
                setUsersLoader(false);
            }
        });
        return () => unsubscribe();
    },[])

    return response;
};

export default useGetData;