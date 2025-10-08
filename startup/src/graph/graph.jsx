import './graph.css';
import logo from './image/dietbuilderlogo.png'; 
import instaIcon from './image/instalogo.jpg';
import faceIcon from './image/facebologo.jpg';
import graph from './image/graph.png';

function Graph(){
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
            <div className="graph-set">
                <h1>Graph</h1>
                <select className="graph">
                    <option>bar chart</option>
                    <option>line chart</option>
                    <option>pie chart</option>
                </select>
                <img src={graph} alt="graph" width="300px" height="300px" />
            </div>
            
            
            {/* <canvas id="calorieChart" width ="500" height="300"></canvas>
              
            <p> Chat with Yuto from user</p>
            <section id = "chat"> Chat</section> */}
            
            <div className="chat-board">
                <div id="textspace">
                    <p><strong>User:</strong> Hi, I want to talk about diet goals!</p>
                    <p><strong>Yuto:</strong> Sure! How was your breakfast?</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>

                    
                </div> 
                <input id="textbox" type="text" placeholder="Type your message..." />
                <div className="chat-buttons">
                    <button id="send">Send</button>
                    <button id="delete">delete</button>
                </div>
            </div>
            
            
            {/* <p> Websocket data placeholder with real time chat</p> */}
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
        
    </div>


    );
}