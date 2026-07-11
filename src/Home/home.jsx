import Introdaction from "../pages/Introdaction/introdaction";
import style from "./home.module.css";
import Navbar from "../components/Navbar/navbar";
import Works from "../pages/works/works";
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Footer from "../components/Navbar/footer/footer";


function Home(){
  return (
    <div className={style.background}>
      
      <Navbar />
      <Introdaction />
      <Footer />
    </div>
  );
}

export default Home;
