import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import useStyle from '../../../../Style/Style';
import AddIcon from "@mui/icons-material/Add";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {OptionState, OptionType, Project} from "../../State/OptionState";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {PathNameType, RouteState} from "../../../../RecoilState/RouteState";
import Planned from "../../Planned/Planned";
import NewProject from '../../NewProject/NewProject';
import {PexelsImage} from "../../State/BackgroundImage";
import {doc, updateDoc, arrayUnion} from "firebase/firestore";
import {db} from "../../../../firebase";

const CategoryForm = () => {
    const classes = useStyle()
    const [option, setOption]:[Array<OptionType>,any] = useRecoilState<Array<OptionType>>(OptionState)
    const project = useRecoilValue(Project)
    const [routeList,setRouteList]: [Array<PathNameType>,any] = useRecoilState(RouteState)
    const [imageBg, setImage] = useRecoilState<Array<any>>(PexelsImage)

    const PostProject = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData = Object.fromEntries( formData.entries() )

        setOption([ ...option, {
            option: "Category",
            path: `/${newData.project}`,
            project: newData.project,
            users_Id: project.users_Id,
        }])

        setRouteList([ ...routeList, {
            path: `/${newData.project}`,
            component: <NewProject/>
        }])

        try {
            if(project._id){
                const docRef = doc(db, "options", project._id); // ton ID document

                await updateDoc(docRef, {
                    categories: arrayUnion({
                        _id: Date.now(), // ou un autre id unique
                        image: imageBg[option.length].src.large2x,
                        option: "Category",
                        project: newData.project,
                        path: `/${newData.project}`,
                    }),
                });
            }
        }catch (err){
            console.log(err)
        }

        form.reset()
    }

    return (
        <Box component="form" onSubmit={PostProject} className={classes.CategoryForm}>
            <TextField fullWidth
                       variant="standard"
                       id="project"
                       label={
                           <Box className={classes.AlignCenter}>
                               <AddIcon />
                               <Typography variant="body2" sx={{ ml: 2 }}>
                                   New category
                               </Typography>
                           </Box>
                       }
                       name="project"
                       size="small"
                       autoComplete="project"/>
        </Box>
    );
};

export default CategoryForm;