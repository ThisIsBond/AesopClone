import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive";
import { NavItems } from "./navitems";


const NavbarContainer = styled.div`
  min-height: 80px;
  background-color: #333333;
  font-family: sans-serif;
  font-size: 14px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex-row
    lg:pl-12
    lg:pr-12
  `};
  /* @media(min-width: ${SCREENS.xl}){
   background: transparent;
  } */
`;


export function Navbar() {

    return (
        <NavbarContainer>
            <NavItems />
        </NavbarContainer>
    )
}
