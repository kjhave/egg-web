// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Footer from './components/Footer';
import './App.css';
import ContentContainer from './components/ContentContainer';

function App() {
	return (
		<BrowserRouter>
			<div className="App font-sans min-h-screen flex flex-col">
				<Header />
				<main className="flex-grow">
					<ContentContainer>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<AboutUs />} />
						</Routes>
					</ContentContainer>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
