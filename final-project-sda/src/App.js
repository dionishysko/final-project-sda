import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work.js/Work";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Login />
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
