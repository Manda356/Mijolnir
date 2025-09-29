import {atom} from "recoil";

export const TaskState = atom({
    key: 'State.TaskState',
    default: []
})
export const TaskOpen = atom({
    key: 'State.TaskOpen',
    default: {}
})
export const TaskOpenLoader = atom({
    key: 'State.TaskOpenLoader',
    default: true
})
export const TaskLoader = atom({
    key: 'State.TaskLoader',
    default: true
})

export type TaskType = {
    _id?: string,
    users_Id?: string,
    option_Id?: string | number,
    project?: string,
    category: string,
    alarm?: string,
    rappel?: string,
    date: string,
    done?: boolean
}