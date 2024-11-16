import React from "react";

function EventCard( { event } ){
    return (
        <div className="inline-block w-64 h-80 shadow-lg rounded-lg shadow-slate-400 bg-stone-400 hover:cursor-pointer hover:brightness-150">
            <div className="h-60 p-2 overflow-hidden relative">
                <div className="flex justify-center py-4 text-xl rounded-lg bg-white opacity-80 relative z-10">{event.title}</div>
                <div className="left-0 top-0 w-full rounded-lg overflow-hidden absolute">{event.img}</div>
            </div>

            <div className="flex flex-col justify-center h-20 px-6 py-2 rounded-bl-lg rounded-br-lg">
                <div>{event.time}</div>
                <div>{event.date}</div>
            </div>
        </div>
    );
}

export default EventCard;