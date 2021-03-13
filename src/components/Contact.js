import React from "react";
import { FiMonitor } from "react-icons/fi";
import styled from "styled-components";

import { Text } from "../header/Header";
import { Btn } from "./Button";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 9rem 0;
    h1 {
        margin: 2.8rem 0;
    }
`;

const Button = styled(Btn)`
    :hover {
        background-color: #292f45;
    }
`;

const Contact = () => {
    return (
        <>
            <Wrapper>
                <FiMonitor size={200} color="#ea6f66" />
                <Text size={3.5} weight={500}>
                    Let's Take Your Business to the Next Level
                </Text>
                <Button> Contact Me</Button>
            </Wrapper>
        </>
    );
};

export default Contact;
