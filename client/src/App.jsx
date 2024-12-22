import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Project from './Project';
import Certification from './Certification';
import Adobe from './assets/Adobe';
import MusicPlayer from './assets/MusicPlayer';
import Zomato from './assets/Zomato';
import Digitalclock from './assets/Digitalclock'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adobe" element={<Adobe />} />
          <Route path="/musicplayer" element={<MusicPlayer />} />
          <Route path="/zomato" element={<Zomato />} />
          <Route path="/digitalclock" element={<Digitalclock />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certifications" element={<Certification />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App