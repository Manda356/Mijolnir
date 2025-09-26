import {atom} from "recoil";

export const UsersState = atom<UsersType>({
    key: 'State.UsersState',
    default: {}
})

export const UsersLoader = atom({
    key: 'State.UsersLoader',
    default: true
})

export type UsersType = {
    username?: string,
    email?: string,
    password?: string,
    _id?: string
}