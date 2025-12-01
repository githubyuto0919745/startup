import React, {useState, useEffect} from 'react';
import './graph.css';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from "recharts";
import {useNavigate} from 'react-router-dom';

export default function Graph(){

    const [chartData, setChartData] = useState([]);
    const [hasData, setHasData] = useState(false);
    const navigate = useNavigate();
    const [joke, setJoke] = useState('Loading joke...');
 
    useEffect(() => {
     
        const fetchGraph = async() =>{
            try{
                const response = await fetch ('/api/graph', {credentials: 'include'});
                if(!response.ok){
                    navigate('/login');
                    return;
                }
                const data = await response.json();

                 const chart = [
                    { name: "Calories (kcal)", profile: data.profile.calories, intake: data.intake.calories },
                    { name: "Protein (g)", profile: data.profile.protein, intake: data.intake.protein },
                    { name: "Carbs (g)", profile: data.profile.carbs, intake: data.intake.carbs },
                    { name: "Fats (g)", profile: data.profile.fats, intake: data.intake.fats },
                ];
                
                setChartData(chart);
                setHasData(chart.some(d=> d.profile >0 || d.intake >0));
            } catch (err){
                console.error("Error loading graph:" , err.message);
            };
        };



            const fetchJoke = async() =>{
                try{
                    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
                    const data = await response.json();
                    setJoke(`${data.setup} ... ${data.punchline}`);

                }catch{
                    setJoke('Could not fetch a joke!');
                }
                };

                fetchGraph();
                fetchJoke();

            },[navigate]);
        


    return(

      
        <main>
            <div className="main-graph">
                <div className="graph-set">
                    <h1>Graph</h1>
                    <h2> Macronutrient Distribution</h2>
                    {!hasData?(
                        <p>No data yet.</p>
                    ) :( 
                    <BarChart width={500} height ={300} data = {chartData}>
                        <CartesianGrid strokeDasharray= "3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label ={{ value: 'Grams', angle:-90, position: 'insideLeft'}} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey = "profile" fill="#e094acff" />
                        <Bar dataKey = "intake" fill="#82ca9d" />
                    </BarChart>
                    )}

                    <p className="joke"><em>{joke}</em></p>

                   
                </div>
            </div>
        </main>

    );
}