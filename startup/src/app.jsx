import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Login} from "./home/login" ;
import {Profile} from "./profile/profile";
import {Input} from "./input/input";
import {Graph} from "./graph/graph";

export default function App(){
    return(
    <BrowserRouter>
    <div>
        <header>
            <h1 className = "logo">
                Dietbuilder
                <img src="image/dietbuilderlogo.png"  alt="dietbuilder logo" />     
            </h1>
            <nav className="navigator">
                <NavLink className = "loginlink" to="/">Login </NavLink>
                <NavLink className ="profilelink" to="/profile">Profile </NavLink>
                <NavLink className = "inputlink" to="/input">Input </NavLink>
                <NavLink className ="graphlink" to="/graph">Graph </NavLink>
            </nav>
        </header>





        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/input" element={<Input />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="*" element ={<NotFound />} />
        </Routes>
       


    <footer>
        <div className="footerleft">
            <div className="footer-logo">
                <img src="image/dietbuilderlogo.png"  alt="dietbuilder logo" />
            </div>
            <div className="social-icons">
                <img id = "instaicons" src="image/instalogo.jpg" alt= "Instagram"  />
                <img id ="faceicons" src="image/facebologo.jpg" alt= "Facebook"  />
          
            </div>
        </div>

        <div className="footermiddle">
            <div className ="footerinfo">
                <p>Phone:  (634)214 5453</p>
                <p>Address:  1457 South Main Street, Provo Utah</p>
            </div>
        </div>

        <div className="footerright">
            <a to="https://github.com/githubyuto0919745/startup">GitHub</a>
        </div>
    </footer>
    </div>
    </BrowserRouter>

    );
}
function NotFound(){
    return <main className= 'container-fluid bg-secondary text-center'> 404: Return to sender, Address unknow. </main>;
}
