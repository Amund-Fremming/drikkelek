import React from "react";

const PlayPremade = () => {


    return(
        <>
            <div className="h-72 w-80 bg-violet-500 rounded shadow-xl justify-center flex">
                <div className="flex-col justify-center">
                    <h1 className="text-white text-2xl text-center mt-4">Question {10}/{20}</h1><br/>
                    <p className="text-black text-xl mt-4 text-center">"heyo"</p>
                    
                    <div>
                        <button className="bg-blue-300 m-4 rounded-xl h-12 w-32 justify-center items-center flex shadow-xl hover:bg-blue-400 mt-20 text-violet-900">Next</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PlayPremade;