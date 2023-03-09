import React from "react";
import Header from "../Base/Header";
import Navbar from "../Base/Navbar";
import { useLocation } from "react-router-dom";

const Howto = () => {


    const klikk = () => {
       
    }

    return(
        <>
            <Header />

            <p className="justify-center items-center flex mt-32">How to</p>
            <div className="mt-8 flex items-center justify-center">
                <button class="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:bg-blue-700 rounded-xl">
                    Button
                    </button>
            </div>
            <Navbar />
        </>
    );
}

export default Howto;
