import React from "react";
import styled from "styled-components";
import { Text } from "../header/Header";
import { Btn } from "./Button";

const InfoContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoText = styled(Text)`
    color: black;
    cursor: auto;
`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 7.2rem;
    margin-top: -20rem;
    /* text-align: center; */
    background-color: white;
    width: 91.2rem;
    box-shadow: 0.1rem 0.1rem 1rem grey;
`;

const HeadingContainer = styled.div`
    margin-left: 9rem;
    h1:nth-child(4) {
        margin: 2.4rem 0;
    }
`;

const Button = styled(Btn)`
    :hover {
        background-color: #292f45;
    }
`;

const TextContainer = styled.div`
    text-align: center;
    margin: 10rem 0 0 0;
    h1:nth-child(2) {
        padding-top: 2.5rem;
    }
`;

const Info = () => {
    return (
        <>
            <InfoContainer>
                <Card>
                    <img
                        src="https://source.unsplash.com/306x360/?person"
                        alt=","
                    />
                    <HeadingContainer>
                        <InfoText size={3.5} weight={500}>
                            Hi, I'm Maggie,
                        </InfoText>
                        <InfoText size={3.5} weight={500}>
                            a Skilled Administrative
                        </InfoText>
                        <InfoText size={3.5} weight={500}>
                            Support Professional
                        </InfoText>
                        <InfoText size={1.9} weight={200}>
                            I'm a paragraph. Click here to add your own text and
                            <br />
                            edit me. It’s easy. Just click “Edit Text” or double
                            <br />
                            click me to add your own content and make changes to
                            the <br />
                            font.
                        </InfoText>
                        <Button>Read More</Button>
                    </HeadingContainer>
                </Card>
                <TextContainer>
                    <InfoText size={3.5} weight={500}>
                        What Can I Do For You?
                    </InfoText>
                    <InfoText size={2.1} weight={100}>
                        I'm a paragraph. Click here to add your own text and
                    </InfoText>
                    <InfoText size={2.1} weight={100}>
                        edit me. Let your users get to know you.
                    </InfoText>
                </TextContainer>
            </InfoContainer>
        </>
    );
};

export default Info;
