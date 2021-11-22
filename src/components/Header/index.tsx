import React from 'react';
import HeaderWrapper from './HeaderStyles';
import LogoSVG from '../../../public/assets/svg/audiophile-logo';
import { SubTitle } from '../../foundation/Typography/subTitle';
import ShoppingCartSVG from '../../../public/assets/svg/shopping-cart';

interface Props {
    
}

export const Header = (props: Props) => {
    return (
        <HeaderWrapper>
            <div className="section">
                <LogoSVG />
            </div>
            <ul className="section">
                <li><SubTitle color="#FFF">TESTE</SubTitle></li>
                <li><SubTitle color="#FFF">TESTE</SubTitle></li>
                <li><SubTitle color="#FFF">TESTE</SubTitle></li>
                <li><SubTitle color="#FFF">TESTE</SubTitle></li>
            </ul>
            <div className="section cart">
                <ShoppingCartSVG />
            </div>
        </HeaderWrapper>
    )
}
