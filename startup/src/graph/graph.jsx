import React, {useState, useEffect} from 'react';
import './graph.css';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from "recharts";
import {useNavigate} from 'react-router-dom';


export default function Graph(){

    const [chartData, setChartData] = useState([]);
    const [hasData, setHasData] = useState(false);
    const [joke, setJoke] = useState('Loading joke...');
    const navigate = useNavigate();

 
    useEffect(() => {
        const port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
            
          
        socket.onopen =()=>{

            const message = {
                from: "GraphPage",
                type: "getGraph",
                value: localStorage.getItem("userName"),
            };

            socket.send(JSON.stringify(message));
        };

        socket.onclose = () =>{
            console.log("Graph WebSocket disconnected");
        };

        
        socket.onmessage = async (msg) =>{
            let data = msg.data;
            if(data instanceof Blob){
                data = await data.text();
            }
            
            let event;
            try{
                event = JSON.parse(data);
            } catch (e){
                console.error("Could not parse message: ", data);
                return;
            }

            const graph = event.value;
            
            

            const chart = [
            { name: "Calories (kcal)", profile: graph.profile.calories ||0, intake: graph.intake.calories || 0},
            { name: "Protein (g)", profile: graph.profile.protein || 0, intake: graph.intake.protein   || 0},
            { name: "Carbs (g)", profile: graph.profile.carbs || 0, intake: graph.intake.carbs || 0},
            { name: "Fats (g)", profile: graph.profile.fats || 0, intake: graph.intake.fats || 0},
        ];

            setChartData(chart);
            setHasData(chart.some(d=> d.profile >0 || d.intake >0));

        };
           


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
            

            return () => socket.close();
        },[localStorage.getItem("userName")]);
    


    return(

      
        <main>
            <div className="main-graph">
                <div className="graph-set">
                    <h1>Graph</h1>
                    <h2> Macronutrient Distribution</h2>
                    {hasData?( 
                        <BarChart width={500} height ={300} data = {chartData}>
                            <CartesianGrid strokeDasharray= "3 3" />
                            <XAxis dataKey="name" />
                            <YAxis label ={{ value: 'Grams', angle:-90, position: 'insideLeft'}} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey = "profile" fill="#e094acff" />
                            <Bar dataKey = "intake" fill="#82ca9d" />
                        </BarChart>
                    ) : (
                        <p>No data yet.</p>
                    )}
                   
                    

                    <p className="joke"><em>{joke}</em></p>

                   
                </div>
            </div>
        </main>

    );
}