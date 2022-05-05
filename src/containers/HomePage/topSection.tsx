import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/button";
import { SCREENS } from "../../components/responsive";
import { ReactComponent as SiteLogo } from './logo.svg';

const TopSectionContainer = styled.div`
    max-height: 575px;
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
    flex-wrap
  `};
`;


const TabletViewTextHeaderSectionWrapper = styled.div`
  background-color: #c6c1b8;
 
  ${tw`
    flex
    justify-center
    items-center
    p-10
  `};
`;

const TabletViewTextHeaderSection = styled.div`
  
  ${tw`
    w-3/6
    h-auto
    flex-col
    items-center
  `}
`;

const LeftContainer = styled.div`
  background-color: #c6c1b8;
  ${tw`
    w-1/2
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
  `}
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightSubLogoContainer = styled.div`
  
  ${tw`
      w-1/3
      p-10
  `}
`

const RightSubHeaderContainer = styled.div`
  
  ${tw`
      w-2/3
      p-10
      justify-center
      items-center
  `}
`
const SmallHeaderText = styled.h2`

`;

const LargeHeaderText = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: xx-large;
    font-weight: lighter;
    ${tw`
      mt-2
      mb-2
    `}
`;

const SmallHeaderSloganText = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    ${tw`
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


const SiteLogoWrapper = styled.div`
    top: 5em;
    transform: scale(0.75);
    ${tw`
      ml-10
      absolute
      text-white
    `}
`;


export function TopSection() {

  const isMobile = useMediaQuery({ maxWidth: SCREENS.lg })

  if (isMobile) {
    return (

      <TabletViewWrapper>
        <ImageWrapper>
          <img src="https://images.ctfassets.net/u1nb1km7t5q7/h0pUjmQ0r1mOshA13mltE/060bc4802f4a9b46a36f930f8764f044/Aesop_Gifting_2022_Mothers_Day_Web_Homepage_Primary_50-50_Tablet_1536x950px.jpg" alt="Header Img" />
          <SiteLogoWrapper>
            <SiteLogo />
          </SiteLogoWrapper>
        </ImageWrapper>
        <TabletViewTextHeaderSectionWrapper>
          <TabletViewTextHeaderSection>
            <SmallHeaderText>
              Mother's Day
            </SmallHeaderText>
            <LargeHeaderText>
              For cherished figures
            </LargeHeaderText>
            <SmallHeaderSloganText>
              A selection of gifts to recognize gracious guidance—including Beacon, a kit created with all kinds of supportive spirits in mind.
            </SmallHeaderSloganText>
            <Button text="Discover Mother's Day gifts" />
          </TabletViewTextHeaderSection>
        </TabletViewTextHeaderSectionWrapper>
      </TabletViewWrapper>

    )
  }
  else {
    return (
      <TopSectionContainer>
        <LeftContainer>
          <HeaderTextContainer>
            <RightSubLogoContainer>
              <SiteLogo />
            </RightSubLogoContainer>
            <RightSubHeaderContainer>
              <SmallHeaderText>
                Mother's Day
              </SmallHeaderText>
              <LargeHeaderText>
                For cherished figures
              </LargeHeaderText>
              <SmallHeaderSloganText>
                A selection of gifts to recognize gracious guidance—including Beacon, a kit created with all kinds of supportive spirits in mind.
              </SmallHeaderSloganText>
              <Button text="Discover Mother's Day gifts" />
            </RightSubHeaderContainer>
          </HeaderTextContainer>
        </LeftContainer>
        <RightContainer>
          <ImageWrapper>
            <img src="https://images.ctfassets.net/u1nb1km7t5q7/4PrAEieVZKVHuerSZYbTWV/3224776b82b38b4fc2022679e98d2b25/Aesop_Gifting_2022_Mothers_Day_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg" alt="Header Img" />
          </ImageWrapper>
        </RightContainer>
      </TopSectionContainer>
    )
  }
}