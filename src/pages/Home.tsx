import BasicThreadList from "../components/BasicThreadList";
import ButtonStack from "../components/ButtonStack";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <ButtonStack/>
            <br/>
            
            <h1> {"Gossip with Golang"} </h1>
            <br />
            <BasicThreadList />
        </>
    );
};

export default Home;
