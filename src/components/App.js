import React from "react";
import About from './About.js'
import Home from './Home.js'
import NavBar from './NavBar.js'
import {username, city, image} from '../data/user.js'



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
