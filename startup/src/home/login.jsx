import './login.css';



export function Login(){
    return (

        
        
        <main>
            
            <img className="person-icons" src = "image/personicon.webp" alt= "personicon"/>
                
            <div className= "loginspace">
                <label htmlFor = "username"> Username </label>
                <input id="username" placeholder="username" />
                <label htmlFor ="password"> Password </label>
                <input id= "password" placeholder="password" />
                
                <button>Log in</button> 
            </div>
            
            <div className="signupspace">    
                <label htmlFor= "email"> Email </label>
                <input id= "email"  placeholder = "abcde@gmail.com" />
                <label htmlFor="newpassword"> New Password </label>
                <input id="newpassword" placeholder="New Password" />
                
                <button>Sign Up</button>   
            </div>
            
        </main>


        

    );
}