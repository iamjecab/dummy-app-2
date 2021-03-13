import React from "react";
import styled from "styled-components";

import { Text } from "../header/Header";
import Button from "../components/Button";

//  "https://source.unsplash.com/1900x600"

const HeroWrapper = styled.div`
    height: 60rem;
    width: 100%;
    background-image: url("https://source.unsplash.com/1900x600/?study-desk");
    background-attachment: fixed;
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    padding-top: 5rem;
    justify-content: center;
`;

const TextContainer = styled.div`
    margin-top: 4rem;
    h1:nth-child(3) {
        margin: 3rem 0 3rem 0;
    }
`;

const Hero = () => {
    return (
        <>
            <HeroWrapper>
                <TextContainer>
                    <Text size={6}>Virtual Assistant</Text>
                    <Text size={6}>at Your Service</Text>
                    <Text size={2.3}>I’m a title. ​Click here to edit me.</Text>
                    <Button>See Services</Button>
                </TextContainer>
            </HeroWrapper>
        </>
    );
};

export default Hero;
