import './input.css';
import logo from './image/dietbuilderlogo.png'; 
import instaIcon from './image/instalogo.jpg';
import faceIcon from './image/facebologo.jpg';

function Input(){
    return (
    <body>
        <header>
            <h1 className = "logo">
                Dietbuilder
                <img src={logo} alt="dietbuilder logo"/>     
            </h1>
            <nav className="navigator">
                <a className = "loginlink" href="/">Login </a>
                <a className ="profilelink" href="/profile">Profile </a>
                <a className = "inputlink" href="/input">Input </a>
                <a className ="graphlink" href="/graph">Graph </a>
            </nav>
        </header>

        <main>

            <div className="foodselect">
                <div className="category">
                    <label for="category" placeholder="category"><strong>Category </strong></label>
                    <input id="category" name="category" list="category-options" placeholder="category" />
                        <datalist id="category-options">    
                            <option id="meat">meat</option>
                            <option id="vegetable">vegetable</option>
                            <option id="fruits">fruits</option>
                            <option id="snack">snack</option>
                        </datalist>
                </div>
                

                <form id= "search" action ="/search" method="get">
                    <input type="text" name="query" placeholder="Search..." />
                    <button type="submit"> Search</button>
                </form>

                <table id="intaketable">
                    <thead>
                        <tr>
                            <th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                            <th>Carbs</th>
                            <th>Fat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Apple</td>
                            <td>65 kcal</td>
                            <td>0 g</td>
                            <td>22 g</td>
                            <td>0 g</td>
                        </tr>
                        <tr>
                            <td>Orange </td>
                            <td>82 kcal</td>
                            <td>1 g</td>
                            <td>32 g</td>
                            <td>1 g</td>
                        </tr>
                    </tbody>
                </table>
                
                <button id="add">Add</button>
                <h2>Intake List</h2>
                <ul id="intakelist">
                    <li> <strong>Apple</strong> 65 kcal</li>
                    <li> <strong>Orange</strong> 65 kcal</li>
                    <li> <strong>Graps</strong> 65 kcal</li>
                    <li> <strong>Peach</strong> 65 kcal</li>
                    <li> <strong>Peach</strong> 65 kcal</li>
                    <li> <strong>Peach</strong> 65 kcal</li>

                    <li> <em><strong>Total:</strong> 160kcal 50g 40g 3g </em> </li>
                </ul>
            
            </div>
                    
            

            <section id="nutrition-api">
            <h1>Nutrition API Placeholder</h1>
            <p>Food nutrition info will appear here from a nutrition API.</p>
                    <ul>
                    <li>Food: Apple</li>
                    <li>Calories: 65 kcal</li>
                    <li>Protein: 0 g</li>
                    <li>Carbs: 22 g</li>
                    <li>Fat: 0 g</li>
                </ul>
            </section>

            <p>Creating database to store information of input intake record</p>
        

            
        </main>

        <footer>
        <div className="footerleft">
            <div className="footer-logo">
                <img src={logo} alt= "dietbuilder logo"/>
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
        
    
    </body> 


    );

}