import React,{useState} from 'react';
import './login.css';



export default function Login(){



    return (

    <main>
        <div className="main-login">
            
            <img className="person-icons" src = "./image/personicon.webp" alt= "personicon"/>
             
            <div className= "loginspace">
                <div className="login">Login  </div> 
                <label htmlFor = "username"> Username </label>
                <input id="username" placeholder="username" />
                <label htmlFor ="password"> Password </label>
                <input id= "password" placeholder="password" />
                
                <button className="login-btn">Log in</button> 
            </div>
            
            
            <div className="signupspace"> 
                <div className="signup">Signup</div>   
                <label htmlFor= "email"> Email </label>
                <input id= "email"  placeholder = "abcde@gmail.com" />
                <label htmlFor="newpassword"> New Password </label>
                <input id="newpassword" placeholder="New Password" />
                
                <button className="signup-btn">Sign Up</button>   
            </div>
        </div>
        
    </main>


        

    );
}