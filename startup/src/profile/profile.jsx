import './profile.css';
import logo from './image/dietbuilderlogo.png'; 
import personIcon from './image/personicon.webp';
import instaIcon from './image/instalogo.jpg';
import faceIcon from './image/facebologo.jpg';

function Profile(){
    return(
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
            <div className="profile">

                <img id = "icon" src={personIcon} alt = "personicon" width="100" />
                <div className = "name">Name:
                    <input id="firstname" placeholder="First" />
                    <input id="lastname" placeholder="Last" />
                </div>
                
                <div className = "gender">Gender:
                    <select id = "gender">
                        <option value = "select gender">Select gender</option>
                        <option value = "male">male</option>
                        <option value = "female">female</option>
                    </select>
                </div>

                
                <div className ="age">Age: 
                    <input type= "number" id="age" placeholder=" Insert age" min="1" max="120" />
                </div>

                {/* If the user select male, show off male icon so femal on */}
                <div className ="height">Height:  
                    <select id="heightvalue"></select>

                    <select id="heightunits">
                        <option>cm</option>
                        <option>feet</option>
                    </select>
                </div>

                
                <label className = "weight">Weight: 
                    <select id="weightvalue"></select>

                    <select id="weightunits">
                        <option>kg</option>
                        <option>lbs</option>
                    </select>
                </label>

                <div className ="activity-level">Activity Level: 
                    <input id="activity" placeholder=" Activity Level" />
                </div>

                <div className ="goal">
                    <label for="goal">Goal: </label>
                    <select id="goal" name="goal">
                        <option value="loss">loss</option>
                        <option value ="gain">gain</option>
                        <option value ="keep">keep</option>
                    </select>
                
                </div>

                <label value="bmi">BMI
                    <div id = "bmi">BMI </div>
                </label>

                <label value="RDA">RDA
                    <div id = "RDA">RDA</div>
                </label>

            </div>

            
        </main>
        


        <footer>
        <div className="footerleft">
            <div className="footer-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="social-icons">
                <img id = "instaicons" src={instaIcon} alt="Instagram" />
                <img id ="faceicons" src={faceIcon} alt="Facebook" />
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
        
        <script src="profile.js"></script>  
    </div>

    );
}