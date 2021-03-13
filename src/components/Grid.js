import React from "react";
import styled from "styled-components";
import {
    FaFolderOpen,
    FaRocketchat,
    FaRegCalendarAlt,
    FaLaptop,
    FaFileAlt,
    FaMale,
} from "react-icons/fa";

import { Text } from "../header/Header";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    div:nth-child(2),
    div:nth-child(5) {
        border-left: 1px solid black;
        border-right: 1px solid black;
    }
`;
const Card = styled.div`
    width: 58.1rem;
    height: 29.8;
    color: black;
    padding: 0 15rem 4rem 15rem;
    margin: 0 0 5rem 0;

    h1:nth-child(2) {
        margin: 2rem 0;
    }
`;

const Grid = () => {
    return (
        <>
            <Wrapper>
                <Card>
                    <FaFolderOpen size={30} color="#EA6F66" />
                    <Text size={2.3}>Administrative Support</Text>
                    <Text size={1.8}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                    </Text>
                </Card>
                <Card>
                    <FaRocketchat size={30} color="#EA6F66" />
                    <Text size={2.3}>Customer Support</Text>
                    <Text size={1.8}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                    </Text>
                </Card>
                <Card>
                    <FaRegCalendarAlt size={30} color="#EA6F66" />
                    <Text size={2.3}>Project Management</Text>
                    <Text size={1.8}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                    </Text>
                </Card>

                <Card>
                    <FaLaptop size={30} color="#EA6F66" />
                    <Text size={2.3}>Social Media Management</Text>
                    <Text size={1.8}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                    </Text>
                </Card>

                <Card>
                    <FaMale size={30} color="#EA6F66" />
                    <Text size={2.3}>Personal Assistant</Text>
                    <Text size={1.8}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                    </Text>
                </Card>

                <Card>
                    <FaFileAlt size={30} color="#EA6F66" />
                    <Text size={2.3}>Data & Research</Text>
                    <Text size={1.8}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                    </Text>
                </Card>
            </Wrapper>
        </>
    );
};

export default Grid;
