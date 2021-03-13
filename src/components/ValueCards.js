import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

import { Text } from "../header/Header";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 23rem;
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 2rem 3rem;
    margin: -17rem 8rem 0 8rem;
    background-color: white;
    box-shadow: 0.1rem 0.1rem 1rem black;
    color: #292f45;
    h1:nth-child(2) {
        margin: 2.1rem 0;
    }
    h1:nth-child(3) {
        margin-bottom: 3.2rem;
    }
`;

const ValueCards = () => {
    return (
        <>
            <Wrapper>
                <Card>
                    <FaQuoteLeft size={25} color="#ea6f66" />
                    <Text size={2.3} weight={400}>
                        Organized and Efficient
                    </Text>
                    <Text size={1.8}>
                        “I'm a testimonial. Click to edit me and add text that
                        says something nice about you and your services.״
                    </Text>
                    <Text size={1.6} weight={400}>
                        Jen B.
                    </Text>
                    <Text size={1.6}>Milestone</Text>
                </Card>

                <Card>
                    <FaQuoteLeft size={25} color="#ea6f66" />
                    <Text size={2.3} weight={400}>
                        Flexible and Committed
                    </Text>
                    <Text size={1.8}>
                        “I'm a testimonial. Click to edit me and add text that
                        says something nice about you and your services.״
                    </Text>
                    <Text size={1.6} weight={400}>
                        Louis M.
                    </Text>
                    <Text size={1.6}>Beltok</Text>
                </Card>

                <Card>
                    <FaQuoteLeft size={25} color="#ea6f66" />
                    <Text size={2.3} weight={400}>
                        Creative & Resourceful
                    </Text>
                    <Text size={1.8}>
                        “I'm a testimonial. Click to edit me and add text that
                        says something nice about you and your services.״
                    </Text>
                    <Text size={1.6} weight={400}>
                        Karen L.
                    </Text>
                    <Text size={1.6}>Ted & Brooks</Text>
                </Card>
            </Wrapper>
        </>
    );
};

export default ValueCards;
