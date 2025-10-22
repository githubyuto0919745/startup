import React from 'react';
import './graph.css';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from "recharts";


export default function Graph(){

        
const profileData = JSON.parse(localStorage.getItem("profileData") || "{}");
const intakeData = JSON.parse(localStorage.getItem("intakeData") || "{}");

 const charData = [
    {
        name: "Calories",
        profile: Number(profileData.tdee) || 0,
        intake: Number(intakeData.calories) || 0,

    },
    {
      name: "Protein",
      profile: Number(profileData.protein) || 0,
      intake: Number(intakeData.protein) || 0,
    },
    {
      name: "Carbs",
      profile: Number(profileData.carbs) || 0,
      intake: Number(intakeData.carbs) || 0,
    },
    {
      name: "Fats",
      profile: Number(profileData.fats) || 0,
      intake: Number(intakeData.fat) || 0,
    },
];

const hasData = charData.some(d => d.profile > 0 || d.intake > 0);

    return(

      
        <main>
            <div className="main-graph">
                <div className="graph-set">
                    <h1>Graph</h1>
                    <h2> Macronutrient Distribution</h2>
                    {!hasData?(
                        <p>No data yet.</p>
                    ) :( 
                    <BarChart width={500} height ={300} data = {charData}>
                        <CartesianGrid strokeDasharray= "3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label ={{ value: 'Grams', angle:-90, position: 'insideLeft'}} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey = "profile" fill="#e094acff" />
                        <Bar dataKey = "intake" fill="#82ca9d" />
                    </BarChart>
                    )}
                   
                </div>
            </div>
        </main>

    );
}