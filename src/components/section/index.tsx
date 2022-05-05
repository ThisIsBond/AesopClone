import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { SCREENS } from "../responsive";

const TopSectionContainer = styled.div`
    max-height: 500px;
    ${tw`
        w-full
        h-auto
        max-w-screen-2xl
        flex
        justify-between
    `};
`;

const TabletViewWrapper = styled.div`

  ${tw`
    flex-col
    items-center
    justify-center
  `};
`;

const TabletViewTopSection = styled.div`
  ${tw`
    flex
  `};
`;

const TabletViewTextHeaderSectionWrapper = styled.div`
  ${tw`
    flex
    p-10
    items-center
    justify-center
  `};
`;

const TabletViewTextHeaderSection = styled.div`
  ${tw`
    w-3/6
    h-auto
    flex-col
    items-center
    justify-center
  `}
`;

const RightContainer = styled.div`
  
  ${tw`
    w-7/12
    flex
    flex-wrap
  `};
`;

const HeaderTextContainer = styled.div`
  ${tw`
    w-full
    h-2/3
    pl-10
    pr-10
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-10/12
    flex
    flex-wrap
  `};
`;

const RightSubHeaderContainer = styled.div`
  ${tw`
      w-full
      pl-10
      pr-10
      justify-center
      items-center
  `};
`;

const LargeHeaderText = styled.h1`
    font-family: serif;
    font-size: xx-large;
    ${tw`
      mt-2
      mb-2
      font-extralight
    `}
`;

const SmallHeaderSloganText = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    ${tw`
      mt-10
      pr-10
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

export function Section() {

  const isMobile = useMediaQuery({ maxWidth: SCREENS.lg });
  const isTablet = useMediaQuery({ minWidth: SCREENS.md });

  if (isMobile) {
    return (

      <TabletViewWrapper>
        <TabletImageWrapper>
          <img src="https://www.aesop.com/u1nb1km7t5q7/1hSc58fUTsjdi3gukmkMlH/b751fce4407079009c4157a3d795b66f/Aesop_Nourish_Your_Wellbeing_2020_Mid_Tablet_1400x788px.jpg" alt="Section Img" />
        </TabletImageWrapper>
        <TabletViewTextHeaderSectionWrapper>
          <TabletViewTextHeaderSection>
            <LargeHeaderText>
            Cleansing, nourishing hand care
            </LargeHeaderText>
            <SmallHeaderSloganText>
            Washing hands with vigour and rigour is an essential act. It is best followed by restorative, aromatic hydration: just like the uneasy mind, hard-working hands deserve attentive nurturing.
            </SmallHeaderSloganText>
            <Button text="Explore Hand Care" />
          </TabletViewTextHeaderSection>
        </TabletViewTextHeaderSectionWrapper>
      </TabletViewWrapper>

    )
  }
  else {
    return (
      <TopSectionContainer>
        <LeftContainer>
          <ImageWrapper>
            <img src="https://www.aesop.com/u1nb1km7t5q7/2CRXmSeUddG4F27PWPUqwO/798ad7d133df2db8a59d2d158fb071de/Aesop_Nourish_Your_Wellbeing_2020_Mid_Desktop_2560x1440px.jpg" alt="Section Img" />
          </ImageWrapper>
        </LeftContainer>
        <RightContainer>
          <HeaderTextContainer>
            <RightSubHeaderContainer>
              <LargeHeaderText>
              Cleansing, nourishing hand care
              </LargeHeaderText>
              <SmallHeaderSloganText>
              Washing hands with vigour and rigour is an essential act. It is best followed by restorative, aromatic hydration: just like the uneasy mind, hard-working hands deserve attentive nurturing.
              </SmallHeaderSloganText>
              <Button text="Explore Hand Care" />
            </RightSubHeaderContainer>
          </HeaderTextContainer>
        </RightContainer>
      </TopSectionContainer>
    )
  }
}