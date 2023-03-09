import React from "react";
import Premade from "../storage/premade.json";

const ChoosePremade = ({handleClick, setChosen, setGame}) => {

    const handleGame = (e) => {
        console.log(e.target.id)
        setGame(Number(e.target.id));
        setChosen(true);
        handleClick();
    }

    return(
        <>
            {
                Premade.map(room => {
                    return(
                        <div id={room.id} onClick={handleGame} className="bg-blue-500 m-4 rounded-xl h-20 w-64 justify-center items-center flex shadow-xl hover:bg-blue-600">
                            <h1 className="text-white justify-center items-center flex">Game {room.id}</h1>
                        </div>
                    )
                })
            }

        </>
    );
}

export default ChoosePremade;