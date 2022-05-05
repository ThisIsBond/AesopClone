import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IProduct } from "../../typings/product";


interface IProductProps extends IProduct {

}

const ProductContainer = styled.div`

    width: 16.5em;
    min-height: 15em;
    max-height: 23em;
    ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        rounded-md
        m-1
        justify-evenly
        sm:m-3
        md:m-6
    `};
`;

const ProductThumbnail = styled.div`
    width: 100%;
    height: auto;

    img { 
        width: 100%;
        height: 100%;
    }
`;

const ProductName = styled.h3`
    ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `};
`;

const ProductDescription = styled.h5`
    ${tw`
        text-sm
        font-extralight
        text-black
        mt-1
        mb-1
    `};
`;

export function Product(props: IProductProps) {
    const { name, thumbnailSrc, description } = props;
    return (
        <ProductContainer>
            <ProductThumbnail>
                <img src={thumbnailSrc} alt="Product Thumbnail" />
            </ProductThumbnail>
            <ProductName>
                {name}
            </ProductName>
            <ProductDescription>
                {description}
            </ProductDescription>
        </ProductContainer>
    )

}