import React from "react";
import { NavLink } from "react-router-dom";
import camera from '../Images/Photography.png'



const About=()=> {
  return (
    <div className="main">
    <div className="contentBox">
      <h1>Freiends Creation</h1>
      <p>Photoshoot</p>
      <p>wedding</p>
      <p>Haldi</p>
      <p>Baby-shower</p>
      <div className="btnBox">
        <div className="btn">
          <NavLink to ="/contact" className="readmore">Read more</NavLink>
        </div>
      </div>
    </div>
    <div className="imgcontainer">
      <img src={camera}  height="300px" width="400px"alt="home/"></img>
    </div>
  </div>
  )
}

export default About;