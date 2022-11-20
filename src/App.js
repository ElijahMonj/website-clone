import React from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App