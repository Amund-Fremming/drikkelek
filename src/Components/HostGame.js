import React from "react";
import { Link } from "react-router-dom";

const HostGame = ({ roomID, setRoomID, game}) => {

    const handleAdd = () => {
        console.log("Adding question ...");
        const question = document.getElementById("hostName");
        console.log(question.value);
        question.value = "";
    }

    const handleStart = () => {
        console.log("Starting game ...");
    }

    return(
        <>
            <h1 className="justify-center items-center flex font-bold text-white">Room ID: {roomID}</h1>
            <input id="hostName" name="id" className=" h-10 w-64 rounded shadow-md m-1" />
                            
            <button onClick={handleAdd} id="addBtn" className="m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                <p>Add question</p>
            </button>

            <Link to="/playgame"

            >
                <button onClick={handleStart} id="startBtn" className="m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                    <p>Start</p>
                </button>
            </Link>            

        </>
    );
}

export default HostGame;