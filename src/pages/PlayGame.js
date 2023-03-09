import React from "react";
import Header from "../Base/Header";
import Navbar from "../Base/Navbar";
import PlayPremade from "../Components/PlayPremade";

const PlayGame = () => {

    return(
        <>
            <Header />

            <div className="mt-24 justify-center items-center flex">
                <img alt="beer guy" src={require('../img/beerguy.png')} className='w-72'/>    
            </div>

            <div className="justify-center items-center flex mt-8">
                <PlayPremade />
            </div>

            <Navbar />
        </>
    );
}

export default PlayGame;