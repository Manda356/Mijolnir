import React from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {TaskState, TaskType} from "../Application/State/TaskState";
import {loaderImage} from "../Application/State/BackgroundImage";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../../firebase";

const usePostData = (url: string, update: any) => {

    const [dataTask, setDataTask]:[Array<TaskType>,any] = useRecoilState(TaskState)
    const setProgress = useSetRecoilState(loaderImage)

    const saveData = async (data: any, collectionName: string) => {
        try {
            const docRef = await addDoc(collection(db, collectionName), {
                ...data,
                createdAt: serverTimestamp(), // optionnel
            });

            return { id: docRef.id, ...data }; // tu récupères l'ID + tes données
        } catch (e) {
            console.error("❌ Erreur Firestore:", e);
            throw e;
        }
    };

    return async (ev: SubmitEvent) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData = Object.fromEntries( formData.entries() )
        const pathName: any = url.split("/").at(-2)

        try {
            const res = await saveData({ ...newData, ...update }, pathName );
            // affichier une tache
            setDataTask([...dataTask, res]);
            // Une Progresse
            setProgress( res === undefined )
            form.reset()
        } catch (e) {
            console.log(e)
        }
    };
};

export default usePostData;