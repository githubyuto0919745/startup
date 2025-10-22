import React, {useState} from 'react';
import './input.css';
// import {getUserGoals} from '../profile/profile';








export default function Input(){
    
    // const [goals, setGoals] = useState({
    //     calories: 0,
    //     protein: 0,
    //     carbs: 0,
    //     fat: 0,
    // })

    // useEffect (() =>{
    //     if (
    //         profile.age > 0 &&
    //         profile.calheight > 0 &&
    //         profile.calweight > 0 &&
    //         profile.activity &&
    //         profile.goal){
    //     setGoals(getUserGoals (profile));
    //     }else{
    //         setGoals({ calories: 0, protein: 0, carbs: 0, fat: 0 });
    //     }            
    // },[profile]);


    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);
    const [intakelist, setIntakelist] = useState([]);
    const [quantity, setQuantity] = useState(1);

       const handleSave = ()=> {
            const totalData = {
                calories: totals.calories,
                protein: totals.protein,
                carbs: totals.carbs,
                fat: totals.fat
            };
            localStorage.setItem("intakeData", JSON.stringify(totalData));
            alert("Intake saved!");
       }

    
        
        const handleSearch = async (e) =>{
        e.preventDefault();
        
            // const response = await fetch();
            // const data = await response.json;
            
            // if(data.foods && data.foods.length >0){
            //     const food = data.foods[0];
            //     setResult({
            //         name: food.label,
            //         calories: food.nutrients.ENERC_KCAK || 0,
            //         protein: food.nutrients.PROCNT || 0,
            //         carbs: food.nutrients.CHOCDF || 0,
            //         fat: food.nutrients.FAT || 0,
            //     });
            // } else{
            //     setResult(null);
            // }

            const Food ={
                name: search || "Apple",
                calories: 95,
                protein: 0.5,
                carbs: 25,
                fat: 0.3,
                name: search || "Orange",
                calories: 95,
                protein: 0.5,
                carbs: 25,
                fat: 0.3,
                name: search || "Grape",
                calories: 95,
                protein: 0.5,
                carbs: 25,
                fat: 0.3,
            };
            setResult(Food);
            



        };
     

    


    const handleAdd = () => {
        if (!result) return;
        
        const item = {
            name: result.name,
            calories: Math.round(result.calories * quantity),
            protein: Math.round(result.protein * quantity),
            carbs: Math.round(result.carbs * quantity),
            fat: Math.round(result.fat * quantity),
        };

        setIntakelist([...intakelist, item]);
        setQuantity(1); 
        setSearch('');
        setResult(null); 
    };

    const totals  = intakelist.reduce(
        (acc, item) => ({
            calories: acc.calories + item.calories,
            protein: acc.protein + item.protein,
            carbs: acc.carbs + item.carbs,
            fat: acc.fat + item.fat
        }),
        {calories: 0, protein: 0, carbs: 0, fat: 0,}
    );

    const handleDelete = (remove) =>{
        setIntakelist(intakelist.filter((_,index) => index !== remove));

    }
    
    
    
    return (

    <main>
        <div className="main-input">
            <div className="foodselect">
            <h1>Search intaken foods</h1>
                
                <form onSubmit= {handleSearch}>
                    <input 
                    type="text" 
                    value={search} 
                    placeholder="Search food..." 
                    onChange={(e) => setSearch(e.target.value)}    
                />
                <button type="submit"> Search</button>
                </form>

                {result &&(
                <div className = "result">
                    <h3>{result.name}</h3>
                    <p>
                        Calories: {result.calories} kcal |
                        Protein: {result.protein} g |
                        Carbs: {result.carbs} g |
                        Fat: {result.fat} g
                    </p>

                    <label>Quantity
                    <input
                    type = "number"
                    value = {quantity}
                    onChange = {(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    />    
                    </label>
                    <button type = "button" onClick ={handleAdd}>Add</button>
                    
                </div>
                )}
                
               
                
            
            </div>

            <div className ="intakelist">
                <h2>Intake List</h2>
                    <ul>
                        {intakelist.map((item, index)=> (
                            <li key = {index}>
                                {item.name} - {item.calories} kcal | {item.protein} g | {item.carbs} g |{' '}
                                {item.fat} g
                                <button type="button" onClick={() =>handleDelete(index)}>Delete</button>
                            </li>

                        ))}
                    </ul>
                     <p>
                        <strong>Total:</strong> {totals.calories} kcal | {totals.protein} g | {totals.carbs} g | {totals.fat} g
                        {/* <string>Goal: </string> {goals.calories} kcal | {goals.protein} g | {goals.carbs} g | {goals.fat} g */}
                    </p>

                    <button type = "button" onClick={handleSave}> Save</button>

            </div>    
        </div>
                
        

    </main>
    );
}