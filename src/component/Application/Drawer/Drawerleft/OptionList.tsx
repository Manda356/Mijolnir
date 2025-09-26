import React from 'react';
import {Box, Grid, List, Skeleton, Typography} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {OptionState, OptionType, Project} from "../../State/OptionState";
import {Link} from "react-router-dom";
import {ChangeBgImage, loaderImage, PexelsImage} from "../../State/BackgroundImage";
import useStyle from "../../../../Style/Style";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {PathNameType, RouteState} from "../../../../RecoilState/RouteState";
import NewProject from "../../NewProject/NewProject";

const LinkStyle: object = {
    color: 'inherit',
    textDecoration: 'none',
}

const OptionList = () => {
    const classes = useStyle()
    const option: Array<OptionType> = useRecoilValue<Array<OptionType>>(OptionState)
    const imageBg = useRecoilValue<Array<any>>(PexelsImage)
    const setChangeBgImage = useSetRecoilState(ChangeBgImage)
    const setOption = useSetRecoilState<OptionType>(Project)
    const [loader,setLoader] = useRecoilState(loaderImage)
    const [routeList, setRouteList]: [Array<PathNameType>,any] = useRecoilState(RouteState)

    const ChangeOption = (item: OptionType, index: number) => () => {

        setLoader(true)
        setOption( item )

        if( item.option === "Category" ){
            setRouteList([ ...routeList, {
                path: `/${item.project}`,
                component: <NewProject/>
            }])
        }

        if( item.image === undefined && item._id === undefined ){
            setChangeBgImage(imageBg[ index ].src.large2x)
            setLoader(false)
        }else{
            fetch( `http://localhost:5000/category/${item._id}` )
                .then(res=> res.json())
                .then(res => {
                    setLoader(false)
                    setChangeBgImage(res.image)
                })
                .catch(err => {
                    setLoader(true)
                    console.log(err)
                })
        }
    }

    return (
        <List>
            {
                option.map((item,index) => (
                    <Link to={ item.path !== undefined && !loader ? item.path : "" }
                          onClick={ ChangeOption( item, index ) }
                          key={ index }
                          style={ LinkStyle }>
                        <ListItemButton sx={{p:1.5}}>
                            <Grid className={classes.AlignCenter} sx={{ color: 'rgb(95,95,95)' }}>
                                { item.option === "Category" ? <AssignmentIcon fontSize="small" sx={{mr:2}}/> : item.icon }
                                { item.users_Id === undefined ?
                                    <Skeleton variant="text" height={20} width={150}/> :
                                    <Typography variant="body2">
                                        { item.option === "Category" ? item.project : item.option }
                                    </Typography> }
                            </Grid>
                        </ListItemButton>
                    </Link>
                ))
            }
        </List>
    );
};

export default OptionList;