import React,{useState} from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';



export default function Login(){
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [newPassword, setNewPassword] = useState('');
 const navigate = useNavigate();

 const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '{}');

    if(storedUsers [username] && storedUsers[username] === password){
        alert('Login successful!!')
        navigate('/profile');
        }else {
            alert('Invalid username or password');
        }
    }


 const handleSignup = () =>{
    const storedUsers = JSON.parse(localStorage.getItem('users') || '{}');

    if(storedUsers[email]){
        alert('User already exists');
        return;
    }
    storedUsers[email] = newPassword;
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Signup successful!');
 };


    return (

    <main>
        <div className="main-login">
            
            <img className="person-icons" src = "./image/personicon.webp" alt= "personicon"/>
             
            <div className= "loginspace">
                <div className="login">Login  </div> 
                <label htmlFor = "username"> Username </label>
                <input 
                id="username" 
                placeholder="username"
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
