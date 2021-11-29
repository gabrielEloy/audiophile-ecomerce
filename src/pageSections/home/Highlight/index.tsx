import React, { useEffect, useState } from 'react'
import { Divider } from '../../../components/Divider';
import HighlightStyles from './HighlightStyles';
import {theme} from '../../../foundation/theme/index'
import { OverLine } from '../../../foundation/Typography/OverLine';
import { H1 } from '../../../foundation/Typography/Headers';
import { Text } from '../../../foundation/Typography/Text';
import { PrimaryButton } from '../../../components/Buttons';
import { IImg } from '../../../interfaces/IImg';
import { getCurrentScreenSize } from '../../../services/dimensions';


interface IHighlightProps {
    label: string;
    title: string;
    description: string;
    path: string;
    img: IImg;
}


export const Highlight = (props: IHighlightProps) => {
    const [img, setImage] = useState('')
    
    useEffect(() => {
        const screenSize = getCurrentScreenSize(window.innerWidth)
        const img = props.img[screenSize];

    setImage(img)
    }, [])
    
    return (
        <HighlightStyles>
            <Divider top={0} left={165} right={165}/>
            <div className="content-container">
                <OverLine className={"label"} color={theme.darkGray}>{props.label}</OverLine>
                <H1 className="title" color={theme.absoluteWhite}>{props.title}</H1>
                <Text className="description" color={theme.darkGray}>{props.description}</Text>
                <PrimaryButton className="button">See product</PrimaryButton>
            </div>
            <div className="image-container">
                <img
                src={img} />
            </div>
        </HighlightStyles>
    )
}
