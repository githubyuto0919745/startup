import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";
import Login from "./home/login" ;
import Profile from "./profile/profile";
import Input from "./input/input";
import Graph from "./graph/graph";
import {AuthState} from "./home/authState";


export default function App() {
    
    const [authState, setAuthState] = useState(AuthState.Unauthenticated); 
    
    useEffect(() => {
        fetch('/api/profile', { credentials: 'include' })
      .then(res => {
        if(res.ok) setAuthState(AuthState.Authenticated);
        else setAuthState(AuthState.Unauthenticated);
      })
      .catch(() => setAuthState(AuthState.Unauthenticated));
}, []);

    if (authState === null) return <div>Loading...</div>; 

     
       
       
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
                {authState === AuthState.Authenticated &&(
                    <>
                    <NavLink className ="profilelink" to="/profile">Profile </NavLink>
                    <NavLink className = "inputlink" to="/input">Input </NavLink>
                    <NavLink className ="graphlink" to="/graph">Graph </NavLink>
                    </>
                )}

               
            </nav>
        </header>





        <Routes>
            <Route path="/" element={<Login setAuthState ={setAuthState} />} />
           
            <Route
                path="/profile" 
                element={
                authState === AuthState.Authenticated 
                    ? <Profile />
                    : <Navigate to="/" replace />
            } 
            />
            <Route 
                path="/input" 
                element={
                authState === AuthState.Authenticated
                    ? <Input />
                    : <Navigate to="/" replace/>
            } 
            />
            <Route 
                path="/graph" 
                element={
                authState === AuthState.Authenticated 
                    ? <Graph /> 
                    : <Navigate to="/" replace/>
            } 
            />
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
                <a href="https://github.com/githubyuto0919745/startup">GitHub</a>
            </div>
        </footer>
    </div>
    </BrowserRouter>

    );
}
function NotFound(){
    return <main className= 'container-fluid bg-secondary text-center'> 404: Return to sender, Address unknow. </main>;
}
