import React from "react";
import styled from "styled-components";

export const Btn = styled.button`
    border: none;
    outline: none;
    font-size: 1.8rem;
    background-color: #ea6f66;
    font-weight: 200;
    padding: 0.8rem 3rem;
    cursor: pointer;
    :hover {
        background-color: white;
    }
`;

const Button = ({ children }) => {
    return (
        <>
            <Btn>{children}</Btn>
        </>
    );
};

export default Button;
