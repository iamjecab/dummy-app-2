import React from "react";
import styled from "styled-components";
import { IoChatbubbles } from "react-icons/io5";

import { Text } from "../header/Header";

const FooterContainer = styled.div`
    width: 100%;
    height: 7rem;
    background-color: #292f45;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ChatContainer = styled.div`
    position: fixed;
    /* top: 0; */
    bottom: 2rem;
    right: 5rem;
    /* left: 2rem; */
    width: 7rem;
    height: 7rem;
    background-color: #ea6f66;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Text size={1.6} weight={100}>
                    © 2023 by Maggie Brightstone. Proudly created with Wix.com
                </Text>
                <ChatContainer>
                    <IoChatbubbles size={40} color="white" />
                </ChatContainer>
            </FooterContainer>
        </>
    );
};

export default Footer;
