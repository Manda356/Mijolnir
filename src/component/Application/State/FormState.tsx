import {atom} from "recoil";

export const RappelState = atom({
    key: 'State.RappelState',
    default: ""
})
export const AlarmState = atom({
    key: 'State.AlarmState',
    default: ""
})
export const CategoryFormState = atom({
    key: 'State.CategoryFormState',
    default: "Tasks"
})
export const TaskDone= atom({
    key: 'State.TaskDone',
    default: false
})