import React from "react";

function EventCard( { event } ){
    return (
        <div className="inline-block w-64 h-80 shadow-md rounded-lg shadow-slate-400 bg-stone-400 hover:cursor-pointer">
            <div className="h-56 p-2">
                <div>{event.title}</div>
                {event.img}
            </div>
            <div className="h-24 p-2">
                <div>{event.time}</div>
                <div>{event.date}</div>
            </div>
        </div>
    );
}

export default EventCard;