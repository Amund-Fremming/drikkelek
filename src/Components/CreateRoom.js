import React from "react";

const CreateRoom = (props) => {

    const { setRoomInit } = props;
    const { roomID,setRoomID } = props;

    const handleCreate = () => {
        console.log("Creating room ...");
        setRoomInit(true);
    }

    return(
        <>
            <h1 className="justify-center items-center flex font-bold text-white">Your name</h1>
            <input id="hostName" name="id" className=" h-10 w-64 rounded shadow-md m-1" />
                            
            <button onClick={handleCreate} id="hostBtn" className="m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                <p>Create room</p>
            </button>
        </>
    );
}

export default CreateRoom;