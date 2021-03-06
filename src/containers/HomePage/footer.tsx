import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { SCREENS } from "../../components/responsive";
import { ReactComponent as Arrow } from './arrowupright.svg';

const MainContainer = styled.div`
    position: relative;
    left: 0;
    bottom: 0;
    background-color: #333333;
    ${tw`
        w-full
        flex
    `}
`;
const TopSectionContainer = styled.div`
    
    ${tw`
        max-w-screen-2xl
        flex
        flex-wrap
        justify-center
        items-center
        overflow-hidden
    `};
`;

const LeftContainer = styled.div`
    
    min-height: inherit;
    ${tw`
        w-2/6
        p-10
    `}
`;

const RightContainer = styled.div`
    min-height: inherit;
    flex-wrap: wrap;
    ${tw`
        w-4/6
        p-10
        md:p-5
        sm:p-1
    `}
`;

const RightContainerWrapper = styled.div`
    ${tw`
        flex
        flex-wrap
        flex-row
    `}
`;

const FilledButton = styled.div`
    border-color: #ffffff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 1px solid #ffffff;
    ${tw`  
        flex
        flex-row
        justify-between
        p-1
        w-full
        text-black
        text-base
        bg-transparent
        items-center
    `};
`;

const InputContainer = styled.input`
    outline: none;
    ${tw`
        h-full
        w-full
        text-xl
        text-white
        bg-transparent
        border-0
    `};
`;

const ButtonIcon = styled.div`
    ${tw`
        ml-2
        mr-2
    `};
`;

const CheckboxWithDescriptionContainer = styled.div`
    ${tw`
        flex
        flex-row
        pt-3
        justify-evenly
    `};
`;

const CheckboxWrapper = styled.input`
    border: 1px solid #ffffff;
    outline: none;
    overflow: hidden;
    ${tw`
        mr-2
        h-10
        w-10
        bg-transparent
    `};
`;

const DescriptionWrapper = styled.p`
    ${tw`
        text-white
    `};
`;

const SectionContainer = styled.div`
    
    min-width: 220px;
    ${tw`
        w-auto
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-5
        pl-10
        pr-10
        md:pl-3
        md:pr-3
        mt-7
        md:mt-0
        mb-8
    `};
    @media(max-width: 920px){
        min-width: 45%;
    }
`;

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-lg
        font-bold
        text-white
        
    `};
`;

const ListItem = styled.li`
    ${tw`
        mb-3
        flex
        flex-row
        items-center
    `};
    // style specified for child of li. 
    & > a {         
        ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-500
        `};
    };
`;

const Separator = styled.div`
    min-width: inherit;
    height: 1px;
    ${tw`
        mt-4
        mb-4
        bg-white
    `}
`;

const TabletViewMainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #333333;
    ${tw`
        
        p-10
        flex
        flex-col
    `};
`;

const TabletViewDescriptionContainer = styled.div`
        height: inherit;
        width: inherit;
    ${tw`

    `};
`;

const TabletViewCheckBoxWithDescription = styled.div`
    ${tw`
        flex
        flex-row
        items-start
        mt-5
    `};
`;

const TabletViewDescription = styled.p`
    ${tw`
        ml-2
        text-white
    `};
`;

const TabletViewCheckboxWrapper = styled.input`
    margin-top: 5px;
`;

const TabletViewUnorderedListWrapper = styled.div`
    ${tw`
        flex
        flex-row
        flex-wrap
        justify-between
    `}
`;


export function Footer() {


    const isTablet = useMediaQuery({ maxWidth: SCREENS.md });

    if (isTablet) {
        return (
            <MainContainer>
                <TabletViewMainContainer>
                    <TabletViewDescriptionContainer>
                        <FilledButton>
                            <InputContainer type="text" placeholder="Email address" />
                            <ButtonIcon>
                                <FontAwesomeIcon icon={faArrowRight} color="#ffffff" />
                            </ButtonIcon>
                        </FilledButton>
                    </TabletViewDescriptionContainer>
                    <TabletViewCheckBoxWithDescription>
                        <TabletViewCheckboxWrapper type="checkbox" />
                        <TabletViewDescription>
                            Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy.
                        </TabletViewDescription>
                    </TabletViewCheckBoxWithDescription>
                    <TabletViewUnorderedListWrapper>
                        <SectionContainer>
                            <HeaderTitle>
                                Order and support
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Contact us</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">FAQ</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Shipping</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Returns</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Order history</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Terms &amp; conditions</a>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                Services
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Live assistance</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Corporate gifts</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Facial appointments</a>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                Location preferences
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Shipping: &nbsp; </a>
                                    <p className="underline" style={{ color: '#ffffff' }}>Hong Kong(S.A.R)</p>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Language: &nbsp; </a>
                                    <p className="underline" style={{ color: '#ffffff' }}>English</p>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                About
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Our story</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Foundation</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Careers</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Accessibility</a>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                Social Media
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Instagram</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Tweeter</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">LinkedIn</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">WeChat</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Waibo</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>
                        </SectionContainer>
                    </TabletViewUnorderedListWrapper>
                </TabletViewMainContainer>
            </MainContainer>
        )
    }

    return (
        <MainContainer>
            <TopSectionContainer>
                <LeftContainer>
                    <FilledButton>
                        <InputContainer type="text" placeholder="Email address" />
                        <ButtonIcon>
                            <FontAwesomeIcon icon={faArrowRight} color="#ffffff" />
                        </ButtonIcon>
                    </FilledButton>
                    <CheckboxWithDescriptionContainer>
                        <CheckboxWrapper type="checkbox" />
                        <DescriptionWrapper>
                            Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy.
                        </DescriptionWrapper>
                    </CheckboxWithDescriptionContainer>
                    <Marginer direction="vertical" margin="10em" />
                    <SectionContainer>
                        <HeaderTitle>
                            Services
                        </HeaderTitle>
                        <Separator />
                        <LinksList>
                            <ListItem>
                                <DescriptionWrapper>
                                    <p style={{ color: '#ffffff' }}>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                                </DescriptionWrapper>
                            </ListItem>
                        </LinksList>
                    </SectionContainer>
                </LeftContainer>
                <RightContainer>
                    <RightContainerWrapper>
                        <SectionContainer>
                            <HeaderTitle>
                                Order and support
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Contact us</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">FAQ</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Shipping</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Returns</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Order history</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Terms &amp; conditions</a>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                Services
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Live assistance</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Corporate gifts</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Facial appointments</a>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                Location preferences
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Shipping: &nbsp; </a>
                                    <p className="underline" style={{ color: '#ffffff' }}>Hong Kong(S.A.R)</p>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Language: &nbsp; </a>
                                    <p className="underline" style={{ color: '#ffffff' }}>English</p>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                About
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Our story</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Foundation</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Careers</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Accessibility</a>
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                        <SectionContainer>
                            <HeaderTitle>
                                Social Media
                            </HeaderTitle>
                            <Separator />
                            <LinksList>
                                <ListItem>
                                    <a href="/">Instagram</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Tweeter</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">LinkedIn</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">WeChat</a>
                                </ListItem>
                            </LinksList>

                            <LinksList>
                                <ListItem>
                                    <a href="/">Waibo</a>
                                    <Arrow style={{ marginLeft: 5, fill: "#ffffff" }} />
                                </ListItem>
                            </LinksList>
                        </SectionContainer>

                    </RightContainerWrapper>
                </RightContainer>
            </TopSectionContainer>
        </MainContainer>
    )
}