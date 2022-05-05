import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme?: "filled";
    text: string;
    className?: string; //In order to override this component we need to pass optional(?) className
}

const BaseButton = styled.button`
    border-width: 1px;
    ${tw`
        pl-5
        pr-5
        pt-5
        pb-5
        outline-none
        text-white
        text-sm
        font-light
        border-transparent
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        mt-5
    `};
`;

const BaseButtonSubWrapper = styled.div`
    ${tw`
        flex
        h-full
        justify-between
    `}
`

const ButtonIcon = styled.div`
    ${tw`

    `}
`

const FilledButton = styled(BaseButton)`
    border-color: #9e9e9e;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    :hover{
        background-color: #1e2028;
    }
    ${tw`
        w-2/3
        text-black
        text-base
        bg-transparent
        hover:text-white
        hover:border-transparent
    `};
`;



export function Button(props: IButtonProps) {

    const { text, className } = props;

    return (
        <FilledButton className={className}>
            <BaseButtonSubWrapper>
                {text}
                <ButtonIcon>
                    <FontAwesomeIcon icon={faArrowRight} />
                </ButtonIcon>
            </BaseButtonSubWrapper>
        </FilledButton>
    )

}