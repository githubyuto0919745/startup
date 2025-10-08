import './login.css';
import logo from './image/dietbuilderlogo.png'; 
import personIcon from './image/personicon.webp';
import instaIcon from './image/instalogo.jpg';
import faceIcon from './image/facebologo.jpg';


function Index(){
    return (
    <div>
        <header>
            <h1 className = "logo">
                Dietbuilder
                <img src={logo} alt="dietbuilder logo" />     
            </h1>
            <nav className="navigator">
                <a className = "loginlink" href="/">Login </a>
                <a className ="profilelink" href="/profile">Profile </a>
                <a className = "inputlink" href="/input">Input </a>
                <a className ="graphlink" href="/graph">Graph </a>
            </nav>
        </header>
        
        
        <main>
            
            <img className="person-icons" src = {personIcon} alt= "personicon"/>
                
            <div className= "loginspace">
                <label htmlFor = "username"> Username </label>
                <input id="username" placeholder="username" />
                <label htmlFor ="password"> Password </label>
                <input id= "password" placecholder="password" />
                
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






        <footer>
        <div className="footerleft">
            <div className="footer-logo">
                <img src={logo} alt="dietbuilder logo" />
            </div>
            <div className="social-icons">
                <img id = "instaicons" src={instaIcon} alt= "Instagram"  />
                <img id ="faceicons" src={faceIcon} alt= "Facebook"  />
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
    );
}