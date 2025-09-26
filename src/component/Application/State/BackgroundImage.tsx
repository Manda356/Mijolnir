import {atom} from "recoil";

export const ChangeBgImage = atom({
    key: 'State.ChangeBgImage',
    default: ""
})

export const loaderImage = atom({
    key: 'State.loaderImage',
    default: true
})

export const PexelsImage = atom<Array<any>>({
    key: 'State.PexelsImage',
    default: [
        {
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },{
            src: {
                small: ""
            }
        },
    ]
})
