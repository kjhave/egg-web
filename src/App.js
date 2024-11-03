import React from 'react';
import Header from './components/Header';
import HighlightEvent from './components/HighlightEvent';
import HumansOfEgg from './components/HumansOfEgg';
import './App.css';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <main className="flex flex-col items-center gap-5 p-5">
        <HighlightEvent />
        <HumansOfEgg />
      </main>
    </div>
  );
}

export default App;

