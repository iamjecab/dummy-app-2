import React from "react";
import styled from "styled-components";
import {
    FaBowlingBall,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const HeaderContainer = styled.div`
    width: 100%;
    height: 9.7rem;
    display: flex;
    background-color: #292f45;
    align-items: center;
    padding: 3rem 0 3rem 5rem;
    color: white;
`;

const LogoContainer = styled.div`
    width: 5rem;
    height: 5rem;
    cursor: pointer;
`;

const TextWrapper = styled.div`
    height: 5rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const Text = styled.h1`
    font-size: ${(props) => props.size}rem;
    color: inherit;
    font-weight: 300;
    cursor: inherit;
    font-weight: ${(props) => props.weight};
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5rem;
    flex: 2;
    /* * {
        padding: 0 1.2rem;
    } */
    a,
    svg {
        margin: 0 1.9rem;
        cursor: pointer;
    }
`;

const Links = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 200;
    cursor: pointer;
    border: 2px solid transparent;
    :hover {
        border-top: 2px solid white;
    }
`;

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <FaBowlingBall size={30} color="#ea6f66" />
                </LogoContainer>
                <TextWrapper>
                    <Text size={2}>Maggie Brightstone</Text>
                    <Text size={1.6}>Virtual Assistant</Text>
                </TextWrapper>
                <Nav>
                    <Links>Home</Links>
                    <Links>Services And Pricing</Links>
                    <Links>About</Links>
                    <Links>Contact</Links>
                    <FaFacebookF size={20} color="white" />
                    <FaInstagram size={20} color="white" />
                    <FaLinkedinIn size={20} color="white" />
                </Nav>
            </HeaderContainer>
        </>
    );
};

export default Header;
