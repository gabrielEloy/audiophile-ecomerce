import React from "react";

import LogoSVG from "../../../public/assets/svg/audiophile-logo";
import HamburgerMenuSVG from "../../../public/assets/svg/hamburger-menu";
import ShoppingCartSVG from "../../../public/assets/svg/shopping-cart";
import { SubTitle } from "../../foundation/Typography/Subtitle";
import { useCurrentScreenSize } from "../../hooks/useCurrentScreenSize";
import HeaderWrapper from "./HeaderStyles";

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
  const {ref, screenSize} = useCurrentScreenSize();

  return (
    <HeaderWrapper ref={ref}>
      {screenSize !== "desktop" && (
        <div className="section">
          <HamburgerMenuSVG className="hamburger" />
        </div>
      )}
      <div className="section">
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
