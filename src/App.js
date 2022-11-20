import React from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Nitro from './components/Nitro.js'
import Download from './components/Download.js'
import Discover from './components/Discover.js'
import Safety from './components/Safety.js'
import Support from './components/Support.js'
import Blog from './components/Blog.js'
import Careers from './components/Careers.js'
import Login from './components/Login.js'
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
        <Route path="/download" element={<Download />}>
        </Route>
        <Route path="/nitro" element={<Nitro />}>
        </Route>
        <Route path="/discover" element={<Discover />}>
        </Route>
        <Route path="/safety" element={<Safety />}>
        </Route>
        <Route path="/support" element={<Support />}>
        </Route>
        <Route path="/blog" element={<Blog />}>
        </Route>
        <Route path="/careers" element={<Careers />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App