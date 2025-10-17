import React, {useState} from 'react';
import './input.css';


export default function Input(){
    

    const [search, setSearch] = useState('');
    const [result, setResult] = useState('');
    const [intakelist, setIntakelist] = useState('');
    const [quantity, setQuantity] = useState(1);


    const handleAdd = (food) =>{
        
        const calories = food.calories * quantity;
        const protein = food.protein * quantity;
        const carbs = food.carbs * quantity;
        const fat = food.fat * quantity;
    }

    
    
    
    return (

    <main>
        <div className="main-input">
            <div className="foodselect">
            <h1>Input Intake</h1>
                

                <form onSubmit= {searchHandle}>
                    <input 
                    type="text" 
                    value={search} 
                    placeholder="Search food..." />

                    <button type="submit"> Search</button>
                </form>
                <label>
                    Quantity:
                    <input>
                    value = {quantity};
                    </input>
                </label>

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
                
            
            </div>

            <div className ="intakelist">
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
        </div>
                
        

    </main>

    
    

    
    
    

    );

}