import React from "react";

import LogoSVG from "../../../public/assets/svg/audiophile-logo";
import ShoppingCartSVG from "../../../public/assets/svg/shopping-cart";
import { SubTitle } from "../../foundation/Typography/subTitle";
import HeaderWrapper from "./HeaderStyles";

interface Props {}

export const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <div className="section">
        <LogoSVG />
      </div>
      <ul className="section">
        <li>
          <SubTitle color="#FFF">TESTE</SubTitle>
        </li>
        <li>
          <SubTitle color="#FFF">TESTE</SubTitle>
        </li>
        <li>
          <SubTitle color="#FFF">TESTE</SubTitle>
        </li>
        <li>
          <SubTitle color="#FFF">TESTE</SubTitle>
        </li>
      </ul>
      <div className="section cart">
        <ShoppingCartSVG />
      </div>
    </HeaderWrapper>
  );
};
