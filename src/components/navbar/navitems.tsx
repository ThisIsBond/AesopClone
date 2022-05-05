/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useMediaQuery } from "react-responsive";
import tw from "twin.macro";
import { SCREENS } from "../responsive";
import { slide as Menu } from "react-burger-menu";
import menuStyle from "./menuStyles";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainListContainer = styled.div`
    justify-content: space-between;
    
    min-height: 80px;
    ${tw`
        flex
        items-center
    `}
`;

const ListContainer = styled.div`
    ${tw`
        flex
        `};
    `;

const LeftListContainerWrapper = styled.div`
    ${tw`
        flex
        `};
    `;

const LeftListContainer = styled.ul`
    ${tw`
        flex
    `};
    @media(min-width: ${SCREENS.sm}){
        ${tw`
            ml-8
            pl-1
        `}
    }
    @media(min-width: ${SCREENS.lg}){
        ${tw`
            ml-0
            pl-1
        `}
    }
    @media(min-width: ${SCREENS.xl}){
        ${tw`
            ml-0
            pl-0
        `}
    }
`;

const RightListContainerWrapper = styled.div`
    ${tw`
        flex
        `};
        @media(min-width: ${SCREENS.sm}){
        ${tw`
            mr-8
            pl-0
        `}
    }
    @media(min-width: ${SCREENS.lg}){
        ${tw`
            mr-0
            pl-0
        `}
    }
    @media(min-width: ${SCREENS.xl}){
        ${tw`
            mr-0
            pl-0
        `}
    }
    `;

const RightListContainer = styled.ul`
    ${tw`
        flex
    `};
`;

const NavItem = styled.li<{ menu?: any }>`
    max-height: fit-content;
    ${tw`
        text-base
        text-white
        font-medium
        cursor-pointer
        `};
    @media(min-width: ${SCREENS.sm}){
        ${tw`
            ml-7
            pl-1
        `}
    }
    @media(min-width: ${SCREENS.lg}){
        ${tw`
            ml-5
            pl-1
        `}
    }
    @media(min-width: ${SCREENS.xl}){
        ${tw`
            ml-5
            pl-1
        `}
    }

        ${({ menu }: any) =>
        menu &&
        css`
            ${tw`
                text-white
                text-xl
                mb-3
                focus:text-white
            `}
    `};
`;

export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
    const isTablet = useMediaQuery({ maxWidth: SCREENS.lg })

    if (isMobile) {
        return (
            <Menu right styles={menuStyle}>
                <ListContainer>
                    <NavItem menu>
                        <a href="/">Skin Care</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Body &amp; Hand</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Hair</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Fragrance</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Home</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Kits &amp; Travel</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Gifts</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Read</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/">Stores</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        )
    }

    else if (isTablet) {
        return (
            <MainListContainer>
                <LeftListContainerWrapper>
                    <LeftListContainer>
                        <NavItem >
                            <a href="/" title="Shop">Shop</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Read">Read</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Stores">Stores</a>
                        </NavItem>
                        <NavItem>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </NavItem>
                    </LeftListContainer>
                </LeftListContainerWrapper>

                <RightListContainerWrapper>
                    <RightListContainer>
                        <NavItem >
                            <a href="/" title="Login">Login</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Cart">Cart</a>
                        </NavItem>
                    </RightListContainer>
                </RightListContainerWrapper>

            </MainListContainer>
        )
    }

    else {
        return (
            <MainListContainer>
                <LeftListContainerWrapper>
                    <LeftListContainer>
                        <NavItem >
                            <a href="/" title="Skin Care">Skin Care</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Hand">Body &amp; Hand</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Hair">Hair</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Fragrance">Fragrance</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Home">Home</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Travel">Kits &amp; Travel</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Gifts">Gifts</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Read">Read</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Stores">Stores</a>
                        </NavItem>
                        <NavItem>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </NavItem>
                    </LeftListContainer>
                </LeftListContainerWrapper>
                <RightListContainerWrapper>
                    <RightListContainer>
                        <NavItem >
                            <a href="/" title="Login">Login</a>
                        </NavItem>
                        <NavItem >
                            <a href="/" title="Cart">Cart</a>
                        </NavItem>
                    </RightListContainer>
                </RightListContainerWrapper>
            </MainListContainer>
        )
    }
}