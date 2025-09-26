import React from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {TaskState, TaskType} from "../Application/State/TaskState";
import {loaderImage} from "../Application/State/BackgroundImage";

const usePostData = (url: string, update: any) => {

    const [dataTask, setDataTask]:[Array<TaskType>,any] = useRecoilState(TaskState)
    const setProgress = useSetRecoilState(loaderImage)
    const fetchData = async ( data: any ) => {
        const response: any = await fetch( url , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ ...data })
        })

        return await response.json()
    }

    return async (ev: SubmitEvent) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData = Object.fromEntries( formData.entries() )

        try {
            const res = await fetchData({ ...newData, ...update })
            setDataTask([ ...dataTask, res.newData ])
            setProgress( res.newData === undefined )

            form.reset()
        } catch (e) {
            console.log(e)
        }
    };
};

export default usePostData;