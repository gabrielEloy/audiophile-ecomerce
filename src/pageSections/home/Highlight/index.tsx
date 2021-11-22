import React from 'react'
import { Divider } from '../../../components/Divider';
import HighlightStyles from './HighlightStyles';
import {theme} from '../../../foundation/theme/index'
import { OverLine } from '../../../foundation/Typography/OverLine';
import { H1 } from '../../../foundation/Typography/Headers';
import { Text } from '../../../foundation/Typography/Text';
import { PrimaryButton } from '../../../components/Buttons';
import Image from 'next/image'


interface IHighlightProps {
    label: string;
    title: string;
    description: string;
    path: string;
    img: string;
}


export const Highlight = (props: IHighlightProps) => {
    return (
        <HighlightStyles>
            <Divider top={0} left={165} right={165}/>
            <div className="content-container">
                <OverLine className={"label"} color={theme.darkGray}>{props.label}</OverLine>
                <H1 color={theme.absoluteWhite}>{props.title}</H1>
                <Text className="description" color={theme.darkGray}>{props.description}</Text>
                <PrimaryButton>See product</PrimaryButton>
            </div>
            <div className="image-container">
                <img
                src={'https://audiophile-assets.s3.amazonaws.com/earphone.png'}/>
            </div>
        </HighlightStyles>
    )
}
