import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { SCREENS } from "../responsive";

const TopSectionContainer = styled.div`
    max-height: 450px;
    ${tw`
        w-full
        h-auto
        max-w-screen-2xl
        flex
        justify-between
        overflow-hidden
    `};
`;

const TabletViewWrapper = styled.div`

  ${tw`
    flex-col
    items-center
    justify-center
  `};
`;

const TabletViewTextHeaderSectionWrapper = styled.div`
    ${tw`
    flex
    justify-center
    items-center
    
    `};
`;

const TabletViewTextHeaderSection = styled.div`
  
  ${tw`
    w-3/6
    h-auto
    flex-col
    items-center
    mt-10
  `}
   @media (min-width: 700){
        ${tw`
            mt-5
        `}
    }
    @media (min-width: 500){
        ${tw`
            mt-10
        `}
    }
    @media (min-width: 400){
        ${tw`
            mt-5
        `}
    }
`;

const LeftContainer = styled.div`

  ${tw`
    w-10/12
    flex
    flex-wrap
    justify-center
    items-center
  `};
`;

const HeaderTextContainer = styled.div`
  ${tw`
    flex
    w-full
    h-2/3
    pl-10
    pr-10
  `}
`;

const RightContainer = styled.div`
  ${tw`
    w-7/12
    flex
    flex-col
    justify-start
    items-start
  `};
`;

const RightSubHeaderContainer = styled.div`
    ${tw`
    w-full
    pl-10
    pr-16

    `};
`;

const LargeHeaderText = styled.h1`
    font-family: serif;
    font-size: xx-large;
    ${tw`
    mt-2
    mb-2
    font-extralight
    `};
`;

const SmallHeaderSloganText = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    ${tw`
    mt-10
    leading-7
    `}
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TabletImageWrapper = styled.div`
    width: 95%;
    height: 50%;
    position: relative;
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`;

export function StoreLocator() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.lg });
    const isTablet = useMediaQuery({ minWidth: SCREENS.md });

    if (isMobile) {
        return (

            <TabletViewWrapper>
                <TabletImageWrapper>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/764VPHKBFfW5IUii3UAytw/9d89bdf039db15d96051e0a242848424/Aesop-HK-Festival-Walk-Hero-Desktop-2880x1620px.jpg" alt="StoreLocator Img" />
                </TabletImageWrapper>
                <TabletViewTextHeaderSectionWrapper>
                    <TabletViewTextHeaderSection>
                        <LargeHeaderText>
                            The history of fragrance.
                        </LargeHeaderText>
                        <SmallHeaderSloganText>
                            From our earliest in-house experiments to our newest formulations: essential oils, trial and error, and the science of perfumery.
                        </SmallHeaderSloganText>
                        <Button text="Find a nearby store" />
                    </TabletViewTextHeaderSection>
                </TabletViewTextHeaderSectionWrapper>
            </TabletViewWrapper>

        )
    }
    else {
        return (
            <TopSectionContainer>
                <RightContainer>
                    <HeaderTextContainer>
                        <RightSubHeaderContainer>
                            <LargeHeaderText>
                                Store locator
                            </LargeHeaderText>
                            <SmallHeaderSloganText>
                            Our consultants are available to host you in-store and provide tailored guidance on gift purchases. 
                            </SmallHeaderSloganText>
                            <Button text="Find a nearby store" />
                        </RightSubHeaderContainer>
                    </HeaderTextContainer>
                </RightContainer>
                <LeftContainer>
                    <ImageWrapper>
                        <img src="https://www.aesop.com/u1nb1km7t5q7/764VPHKBFfW5IUii3UAytw/9d89bdf039db15d96051e0a242848424/Aesop-HK-Festival-Walk-Hero-Desktop-2880x1620px.jpg" alt="StoreLocator Img" />
                    </ImageWrapper>
                </LeftContainer>
            </TopSectionContainer>
        )
    }
}