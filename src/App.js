// src/App.js
import React, {useRef} from 'react';
import Header from './components/Header';
import AboutUs from './components/About/About';
import Events from './components/Event/Events';
import Footer from './components/Footer';
import './App.css';
import ContentContainer from './components/ContentContainer';
import HumansOfEgg from './components/humanOfEgg/HumansOfEgg';
import BackToTop from './components/BackToTop';

const headerSize = 56;
const paddingContent = 32;

const scrollToRef = function(ref){
	if (ref && ref.current){
		return window.scrollTo({
			top: ref.current.offsetTop - headerSize - paddingContent,
			behavior: "smooth",
		});
	}
	
	return window.scrollTo({
		top: 0,
		behavior: "smooth",
		scrollPaddingTop: headerSize + paddingContent
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
			<BackToTop scrollFunction={scrollToRef} />
		</div>
	);
}

export default App;
