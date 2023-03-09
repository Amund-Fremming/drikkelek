import React from "react";

const JoinUI = (props) => {

    const { setJoinedGame } = props;

    const handleClick = () => {
        console.log("Joining room ...");
        // Store the game id in the parent component so we only add questions to the correct game
        setJoinedGame(true);
    }

    return(
        <>
            <div className="flex-col">
                <input name="id" className="ml-8 h-10 w-64 rounded shadow-md m-1" />
                <input name="id" className="ml-8 h-10 w-64 rounded shadow-md m-1" />
                <div onClick={handleClick} className="ml-8 m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                    <p>Join</p>
                </div>
            </div>
        </>
    );
}

export default JoinUI;