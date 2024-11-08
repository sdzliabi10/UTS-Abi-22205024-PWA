import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Resume from "./Components/Resume/Resume"
import Certificates from "./Components/Certificate/Certificates"
import Projects from "./Components/Projects/Projects";
import ContactForm from "./Components/Contact/ContactForm";
import Footer from "./Components/Footer";
import "./App.css"
import React, { useEffect } from 'react';
import { requestPermission, onMessageListener } from './firebase';

function App() {
  useEffect(() => {
    requestPermission();

    onMessageListener().then((payload) => {
      console.log("Pesan notifikasi diterima di foreground:", payload);
      alert(`Pesan: ${payload.notification.title}`);
    });
  }, []);


  return ( 
  <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Resume/>
    <Certificates/>
    <Projects />
    <ContactForm/>
    <Footer></Footer>
  </div>
  );
}

export default App
