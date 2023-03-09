import React from "react";
import Navbar from "../Base/Navbar";
import Header from "../Base/Header";
import { useState } from "react";
import ChoosePremade from "../Components/ChoosePremade";
import PlayPremade from "../Components/PlayPremade";

const Premade = () => {

    const [chosen, setChosen] = useState(false);
    const [game, setGame] = useState(0);

    const handleClick = () => {
        console.log("State id: " + game);
    }

    return(
        <>
            <Header />

            <div className="mt-24 justify-center items-center flex">
                <img alt="beer guy" src={require('../img/beerguy.png')} className='w-72'/>    
            </div>

            <div className="mt-8 justify-center items-center flex">
                <div className="flex-col">
                    {
                        chosen
                        ? <PlayPremade
                            handleClick={handleClick}
                        />
                        : <ChoosePremade 
                            handleClick={handleClick}
                            setChosen={setChosen}
                            setGame={setGame}
                        />
                    }
                </div>
            </div>    

            <Navbar />
        </>
    );
}

export default Premade;