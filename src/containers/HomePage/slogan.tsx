import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
    max-height: 450px;
    ${tw`
        w-full
        h-auto
        max-w-screen-2xl
        flex
        justify-center
        items-center
        overflow-hidden
    `};
`;

const SloganWrapper = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-center
        p-16
        sm:p-8
        md:p-12
    `}
`;

const SloganText = styled.div`
    font-family: 'Playfair Display', serif;
    ${tw`
        font-light
        flex
        2xl:text-4xl
        xl:text-4xl
        md:text-4xl
        sm:text-3xl
        pb-6
    `}

`;

const SloganAuthor = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    ${tw`
        flex
        text-sm
        2xl:text-sm
        xl:text-sm
        md:text-sm
        sm:text-xs
        font-bold
    `}
`

export function Slogan() {


    return (
        <TopSectionContainer>
            <SloganWrapper>
                <SloganText>
                    ‘Fragrance is the voice of inanimate things.’
                </SloganText>
                <SloganAuthor>
                    Many Webb
                </SloganAuthor>
            </SloganWrapper>
        </TopSectionContainer>
    )

}