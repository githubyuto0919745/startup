import './input.css';


export function Input(){
    return (
    
 

        <main>

            <div className="foodselect">
                <div className="category">
                    <label htmlFor="category" ><strong>Category </strong></label>
                    <input id="category" name="category" list="category-options" placeholder="category" />
                        <datalist id="category-options">    
                            <option id="meat">meat</option>
                            <option id="vegetable">vegetable</option>
                            <option id="fruits">fruits</option>
                            <option id="snack">snack</option>
                        </datalist>
                </div>
                

                <htmlForm id= "search" action ="/search" method="get">
                    <input type="text" name="query" placeholder="Search..." />
                    <button type="submit"> Search</button>
                </htmlForm>

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

            <p>Creating database to store inhtmlFormation of input intake record</p>
        

            
        </main>

        
        
    
        
    
    

    );

}