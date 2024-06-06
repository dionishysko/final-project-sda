import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import "./App.css";
import Navbar  from "./components/Navbar/Navbar";
import Home from "../src/components/Home/Home";
import About from './components/About/About';
import Testimonial from './components/Testimonial/Testimonial';
import Work from "../src/components/Work/Work"
import Footer from "../src/components/Footer/footer"
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
