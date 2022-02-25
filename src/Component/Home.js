import React from "react";
import { NavLink } from "react-router-dom";
import camera from '../Images/Photography.png'
import '../Css/Home.css';



const Home=()=> {
  return (
    <div className="main">
      <div className="contentBox">
        <h1>Photograpy</h1>
        <p>"The camera is an instrument that teaches people how to see without a camera.”</p>
        <p>"There are no rules for good photographs, there are only good photographs."</p>
        <div className="btnBox">
          <div className="btn">
            <NavLink to ="/about" className="readmore">Read more</NavLink>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src={camera}  height="300px" width="400px"alt="home/"></img>
      </div>
    </div>
  )
}

export default Home;