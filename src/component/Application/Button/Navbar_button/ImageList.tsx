import React from 'react';
import {ImageList, ImageListItem, Skeleton} from "@mui/material";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {ChangeBgImage, PexelsImage} from "../../State/BackgroundImage";
import useEditData from "../../../Hooks/UseEditData";
import {Project} from "../../State/OptionState";

const ImageStyle = {
    cursor: 'pointer',
    width: 60, height: 60, overflow: 'hidden',
    borderRadius: 1
}

const ImageListMenu = ({ setAnchorEl }: any) => {
    const project = useRecoilValue(Project)
    const imagePexels = useRecoilValue(PexelsImage)
    const setImageBg = useSetRecoilState(ChangeBgImage)

    const ChangeImageBg = (item: any) => () => {
        const url: string = 'http://localhost:5000/category/'
        const data = { image: item.src.large2x }

        setImageBg( item.src.large2x )

        const response = useEditData( url, project._id, data )
        setAnchorEl( null )
    }

    return (
        <React.Fragment>
            <ImageList cols={4} rowHeight={60}>
                { imagePexels?.map( (item: any, index) => (
                    <ImageListItem key={ index } onClick={ ChangeImageBg( item ) } sx={ ImageStyle }>
                        { item.src.small !== "" ?
                            <img alt={ item.alt } style={{ objectFit: 'cover' }} src={ item.src.small }/> :
                            <Skeleton variant="rectangular" height={60}/>}
                    </ImageListItem>
                )) }
            </ImageList>
        </React.Fragment>
    );
};

export default ImageListMenu;