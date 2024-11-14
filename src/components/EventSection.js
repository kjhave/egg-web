import React, { useState } from "react";
import EventCard from "./EventCard";

function EventSection({ title, eventList }) {
	const [curr, setCurr] = useState(0);

	const prev = () => setCurr(e => curr == 0 ? eventList.length - 1 : curr - 1);
	const next = () => setCurr(e => curr == eventList.length - 1 ? 0 : curr + 1);

	return (
		<div className="flex justify-center content-start flex-wrap flex-grow-0 w-[1200px] px-4 pb-12 shadow-xl bg-[#242527]">
			<div className="w-full py-8">
				<h1 className="text-center h-12 w-3/4 p-2 ml-auto mr-auto text-white uppercase border-b-2 border-blue-50">{title}</h1>
			</div>

			<div className="w-[1072px] overflow-hidden pb-8">
				<div
					className="	flex flex-col flex-wrap flex-grow-0
								h-[336px] gap-4
								transition-transform ease-out duration-500
							"
					style={{	transform: `translateX(-${curr * 272}px)`	}}
				>
					{eventList === null ? <></> : eventList.map(e => <EventCard event={e} key={e.id} />)}
					{eventList === null ? <></> : eventList.filter(e => e.id < 3).map(e => <EventCard event={e} key={e.id} />)}
				</div>
			</div>

			<div className="flex flex-grow-0 justify-center gap-4 w-full">
				<button className="size-12 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" onClick={prev}>
					<span className="text-[40px] leading-10">&lt;</span>
				</button>

				<button className="size-12 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" onClick={next}>
					<span className="text-[40px] leading-10">&gt;</span>
				</button>
			</div>
		</div>
	);
}

export default EventSection;
