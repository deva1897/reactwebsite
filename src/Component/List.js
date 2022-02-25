import React from "react";
import { NavLink } from "react-router-dom";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
import logo3 from '../Images/cm.jpg';
import '../Css/ListStyle.css';
const List=()=> {
  return (
    <React.Fragment>
        <header>
            <div className="container container-flex">
                <div className="logocontainer">
                    <img src={logo3} height="100px" width="100px" alt="logo"/>
                </div>
                <nav>
                    <div className="list">
                        <NavLink  exact to ="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                        <NavLink to ="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                        <NavLink to ="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                    </div>
                </nav>
                <div className="icons">
                    {/* <FacebookIcon/> */}
                    {/* <InstagramIcon/> */}
                    {/* <TwitterIcon/> */}
                </div>
            </div>
        </header>
    </React.Fragment>
  )
}

export default List;