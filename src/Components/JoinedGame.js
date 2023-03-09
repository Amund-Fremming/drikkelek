import React from "react";

const JoinedGame = (props) => {

    return(
        <>
            <h1 className="justify-center items-center flex font-bold text-white">Room ID: {10}</h1>
            <input id="hostName" name="id" className=" h-10 w-64 rounded shadow-md m-1" />
                            
            <button id="addBtn" className="m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                <p>Add question</p>
            </button>   
        </>
    );
}

export default JoinedGame;