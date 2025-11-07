import React,{useState} from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';



export default function Login({setAuthState}){
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [newPassword, setNewPassword] = useState('');
 const navigate = useNavigate();

 const handleLogin = async() => {
    try{
        const res = await fetch('/api/auth/login' ,{
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email: username,password}),
            credentials: 'include',
        });
        if(res.ok){
            const data = await res.json();
            alert(`Login successful! Welcome ${data.email}`);
            setAuthState(AuthState.Authenticated);
            navigate('/profile');
        } else{
            const err = await res.json();
            alert(`Login failed: ${err.msg}`);
        }
    } catch (error){
        console.error(error);
        alert('Server error. Please try again.');
    }
 };

 const handleSignup = async() =>{
    try{
        const res = await fetch ('/api/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify ({email, password:newPassword}),
            credentials: 'include',
        });
        if(res.ok){
            const data = await res.json();
            alert(`Signup successful! Welcome ${data.email}`);
            setAuthState(AuthState.Authenticated);
            setEmail('');
        } else {
            const err = await res.json();
            alert (`Signup failed: ${err.msg}`);
        }
    } catch (error){
        console.error(error);
        alert('Server error. Please try again. ');
    };
 }


    return (

    <main>
        <div className="main-login">
            
            <img className="person-icons" src = "./image/personicon.webp" alt= "personicon"/>
             
            <div className= "loginspace">
                <div className="login">Login  </div> 
                <label htmlFor = "username"> Email </label>
                <input 
                id="username" 
                placeholder="you@example.com"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)} 
                />

                <label htmlFor ="password"> Password </label>
                <input 
                id= "password" 
                type="password"
                placeholder="password" 
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                
                <button className="login-btn" onClick={handleLogin}>Log in</button> 
            </div>
            
            
            <div className="signupspace"> 
                <div className="signup">Signup</div>   
                <label htmlFor= "email"> Email </label>
                <input 
                id= "email"  
                placeholder = "abcde@gmail.com"
                value = {email}
                onChange =  {(e) => setEmail(e.target.value)}
                />
                <label htmlFor="newpassword"> New Password </label>
                <input 
                id="newpassword" 
                type = "password"
                placeholder="New Password" 
                value = {newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />
                
                <button className="signup-btn" onClick={handleSignup}>Sign Up</button>   
            </div>
        </div>
        
    </main>


        

    );
};
