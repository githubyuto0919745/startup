import React from 'react';
import './graph.css';
import {useLocation, useNavigate} from "react-router-dom";
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from "recharts";


export default function Graph(){
    const {state} = useLocation();
    const navigate = useNavigate();

    if (!state){
        return (
            <div className="no-profile-container">
            <p>No profile data found. Please go back and save your profile first.</p>
            <button onClick={()=>navigate("/")}>
                Back to Profile
                </button>
            </div>
        );
    }

    const charData = [
        {name:"Protein", value: Number(state.protein) || 0},
        {name:"Carbs", value: Number(state.carbs) || 0},
        {name:"Fats", value: Number (state.fats) || 0},
    ];
    return(

      
        <main>
            <div className="main-graph">
                <div className="graph-set">
                    <h1>Graph</h1>
                    <h2> Macronutrient Distribution</h2>
                    <BarChart width={500} height ={300} data = {charData}>
                        <CartesianGrid strokeDasharray= "3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label ={{ value: 'Grams', angle:-90, position: 'insideLeft'}} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey = "value" fill="#82ca9d" />
                    </BarChart>
                   
                   
                </div>
            </div>
        </main>

    );
}