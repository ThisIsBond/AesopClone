import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Section } from "../../components/section";
import { StoreLocator } from "../../components/storeLocator";
import { VideoSection } from "../../components/videoSection";
import BestSellingProducts from "./bestSellingProducts";
import { Footer } from "./footer";
import { Slogan } from "./slogan";
import TopProducts from "./topProducts";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
background-color: #fffef2;

    ${tw`
        flex
        flex-col
        items-center
    `};
`;

export function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction="vertical" margin="2em" />
            <TopProducts />
            <Marginer direction="vertical" margin="8em" />
            <Section />
            <Marginer direction="vertical" margin="10em" />
            <BestSellingProducts />
            <Marginer direction="vertical" margin="10em" />
            <VideoSection />
            <Marginer direction="vertical" margin="10em" />
            <StoreLocator />
            <Marginer direction="vertical" margin="5em" />
            <Slogan />
            <Marginer direction="vertical" margin="5em" />
            <Footer />
        </PageContainer>
    )
}
