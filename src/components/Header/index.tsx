import React, { useState, useEffect } from "react";

import useResizeObserver from "use-resize-observer";

import LogoSVG from "../../../public/assets/svg/audiophile-logo";
import ShoppingCartSVG from "../../../public/assets/svg/shopping-cart";
import { SubTitle } from "../../foundation/Typography/SubTitle";
import { getCurrentScreenSize } from "../../services/dimensions";
import HeaderWrapper from "./HeaderStyles";
import HamburgerMenuSVG from '../../../public/assets/svg/hamburger-menu'

const dummyOptions = [
  {
    title: "TESTE",
  },
  {
    title: "TESTE",
  },
  {
    title: "TESTE",
  },
  {
    title: "TESTE",
  },
];

export const Header = () => {
  const { width, ref } = useResizeObserver();

  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const currentScreenSize = getCurrentScreenSize(window.innerWidth);

    if (screenSize !== currentScreenSize) {
      setScreenSize(currentScreenSize);
    }
  }, [width]);

  return (
    <HeaderWrapper ref={ref}>
      <div className="section">
      {screenSize !== 'desktop' && (<HamburgerMenuSVG className="hamburger"/>)}
        <LogoSVG />
      </div>
      {screenSize === "desktop" && (
        <ul className="section">
          {dummyOptions.map(({ title }, index) => (
            <li key={`${index}`}>
              <SubTitle color="#FFF">{title}</SubTitle>
            </li>
          ))}
        </ul>
      )}
      <div className="section cart">
        <ShoppingCartSVG />
      </div>
    </HeaderWrapper>
  );
};
