import React from "react";

function Arrow(props) {
    return (
        <>
            <div className="md:w-10 md:h-10 h-7 w-7 bg-white flex items-center justify-center rounded-full shadow-lg shadow-cyan-500/50">
                <button onClick={props.onClick}>
                    <props.arr className="md:text-2xl text-xl" />
                </button>
            </div>
        </>
    )
}

export default Arrow;