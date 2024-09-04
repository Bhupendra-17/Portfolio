import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar/temp";
import Header from "./components/Header/temp";
import Gamecard from "./components/Gamecard/temp";

function App() {
  return (
      <div className='bg-sky-700 min-h-screen pb-6'>
        <Navbar />
        <Header />
        <div className='flex justify-center'>
          <div className='mx-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center'>
            <Gamecard title="Speed-Sum" text="Boost your calculation..." />
            <Gamecard title="Guess the song" text="Listen carefully..." />
            <Gamecard title="ABC" text="Fun with ..." />
            <Gamecard title="Tic Tac Toe" text="..." />
          </div>
        </div>
      </div>
  );
}

export default App;