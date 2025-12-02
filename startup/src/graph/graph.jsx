import React, {useState, useEffect} from 'react';
import './graph.css';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from "recharts";
import {useNavigate} from 'react-router-dom';
import {io} from 'socket.io-client';

export default function Graph({userEmail}){

    const [chartData, setChartData] = useState([]);
    const [hasData, setHasData] = useState(false);
    const navigate = useNavigate();
    const [joke, setJoke] = useState('Loading joke...');
 
    useEffect(() => {
     
        const socket = io('http://localhost:4001');
        socket.emit('getGraph', userEmail);
        socket.on('graphData', (data) =>{
            if(!data || !data.profile) {
                setHasData(false);
                return;}

            const chart = [
            { name: "Calories (kcal)", profile: data.profile.calories ||0, intake: data.intake.calories || 0},
            { name: "Protein (g)", profile: data.profile.protein || 0, intake: data.intake.protein   || 0},
            { name: "Carbs (g)", profile: data.profile.carbs || 0, intake: data.intake.carbs || 0},
            { name: "Fats (g)", profile: data.profile.fats || 0, intake: data.intake.fats || 0},
        ];

          
            setChartData(chart);
            setHasData(chart.some(d=> d.profile >0 || d.intake >0));

        });


        const fetchJoke = async() =>{
            try{
                const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
                const data = await response.json();
                setJoke(`${data.setup} ${data.punchline}`);
            }catch{
                setJoke('Could not fetch a joke!');
            }
            };

            
            fetchJoke();
            return () => socket.disconnect();
        },[userEmail]);
    


    return(

      
        <main>
            <div className="main-graph">
                <div className="graph-set">
                    <h1>Graph</h1>
                    <h2> Macronutrient Distribution</h2>
                    {!hasData?(
                        <pre>{JSON.stringify(chartData, null, 2)} </pre>
                    ) : (
                        <p>No data yet.</p>
                    )}
                    <BarChart width={500} height ={300} data = {chartData}>
                        <CartesianGrid strokeDasharray= "3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label ={{ value: 'Grams', angle:-90, position: 'insideLeft'}} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey = "profile" fill="#e094acff" />
                        <Bar dataKey = "intake" fill="#82ca9d" />
                    </BarChart>
                    

                    <p className="joke"><em>{joke}</em></p>

                   
                </div>
            </div>
        </main>

    );
}