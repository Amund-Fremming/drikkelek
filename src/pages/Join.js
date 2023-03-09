import React, { useState } from "react";
import Navbar from "../Base/Navbar";
import Header from "../Base/Header";
import { useLocation } from "react-router-dom";
import JoinUI from "../Components/JoinUI";
import JoinedGame from "../Components/JoinedGame";

/*
    Mellomsted for å joine ett rom
    her kan man skrive inn rom id og sitt navn og så joine
    krav må være oppfylt
*/

const Join = (props) => {

    const [joinedGame, setJoinedGame] = useState(false);

    return(
        <>
            <Header />

                <div className="mt-64 justify-center items-center flex">

                    <div className="h-64 w-80 bg-violet-500 rounded shadow-xl justify-center items-center flex">
                        <div className="flex-col">
                            {
                                joinedGame 
                                ? <JoinedGame />
                                : <JoinUI setJoinedGame={setJoinedGame} />
                            }
                        </div>
                    </div>
                </div>

            <Navbar />
        </>
    );
}

export default Join;