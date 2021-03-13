import React from "react";
import Header from "./header/Header";
import GlobalStyles from "./GlobalStyles";
import Hero from "./hero/Hero";
import Main from "./main/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <GlobalStyles />
            <Header></Header>
            <Hero></Hero>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}

export default App;
