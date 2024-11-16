// src/App.js
import React, {useRef} from 'react';
import Header from './components/Header';
import AboutUs from './components/About/About';
import Events from './components/Event/Events';
import Footer from './components/Footer';
import './App.css';
import ContentContainer from './components/ContentContainer';
import HumansOfEgg from './components/humanOfEgg/HumansOfEgg';

const scrollToRef = function(ref){
	console.log(ref);
	if (ref && ref.current){
		return ref.current.scrollIntoView({
			behavior: "smooth",
		});
	}
	
	return window.scrollTo(0, 0, {
		behavior: "smooth",
	});
}

function App() {
	const eventRef=useRef(null);
	const humansOfEggRef=useRef(null);
	const aboutRef=useRef(null);

	const headerNavList = [
		{
			title:'Thông tin, sự kiện',
			scrollFunction: () => scrollToRef(eventRef)
		},
		{
			title:'Humans of EGG',
			scrollFunction: () => scrollToRef(humansOfEggRef)
		},
		{
			title:'About EGG',
			scrollFunction: () => scrollToRef(aboutRef)
		}
	]

	return (
		<div className="App font-sans min-h-screen flex flex-col">
			<Header navList={headerNavList} />
			<main className="flex-grow">
				<ContentContainer>
					<Events eventRef={eventRef}/>
					<HumansOfEgg humansOfEggRef={humansOfEggRef}/>
					<AboutUs aboutRef={aboutRef}/>
				</ContentContainer>
			</main>
			<Footer />
		</div>
	);
}

export default App;
