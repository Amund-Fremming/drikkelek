import React, { useState } from "react";
import Navbar from "../Base/Navbar";
import Header from "../Base/Header";
import HostGame from "../Components/HostGame";
import CreateRoom from "../Components/CreateRoom";

/*
    TODO - later
    fikse regex lengde på input
*/

const Host = (props) => {

    const [roomInit, setRoomInit] = useState(false);
    const [roomID, setRoomID] = useState(0);

    return(
        <>
            <Header />
            <div className="mt-64 justify-center items-center flex">

                <div className="h-64 w-80 bg-violet-500 rounded shadow-xl justify-center items-center flex">
                    <div className="flex-col">
                    {
                        roomInit
                        ? <HostGame
                            setRoomID={setRoomID}
                        />
                        : <CreateRoom
                            setRoomInit={setRoomInit}
                            roomID={roomID}
                        />
                    }
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    );
}

export default Host;