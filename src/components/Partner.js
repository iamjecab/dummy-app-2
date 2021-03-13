import React from "react";
import styled from "styled-components";
import { FaApple, FaAndroid, FaChrome, FaEthereum } from "react-icons/fa";

import { Text } from "../header/Header";

const PartnerContainer = styled.div`
    min-height: 63rem;
    width: 100%;
    background-color: #292f45;
    color: white;
    text-align: center;
    h1:first-child {
        padding-top: 10rem;
    }
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10rem 20rem;
`;

const Partner = () => {
    return (
        <>
            <PartnerContainer>
                <Text size={3.5} weight={500}>
                    Trusted by Companies and Entrepreneurs
                </Text>

                <Text size={3.5} weight={500}>
                    Throughout the Country
                </Text>
                <IconContainer>
                    <FaApple size={47} />
                    <FaAndroid size={47} />
                    <FaChrome size={47} />
                    <FaEthereum size={47} />
                </IconContainer>
            </PartnerContainer>
        </>
    );
};

export default Partner;
