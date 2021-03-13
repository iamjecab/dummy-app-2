import React from "react";
import Grid from "../components/Grid";
import Info from "../components/Info";
import Partner from "../components/Partner";
import ValueCards from "../components/ValueCards";
import Contact from "../components/Contact";

const Main = () => {
    return (
        <>
            <Info></Info>
            <Grid></Grid>
            <Partner></Partner>
            <ValueCards />
            <Contact />
        </>
    );
};

export default Main;
