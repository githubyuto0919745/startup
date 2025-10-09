import React from 'react';
import './profile.css';


export default function Profile(){
    return(
        <main>
            <div className="main-profile">
            <div className="profile">

                <img id = "icon" src="./image/personicon.webp" alt = "personicon" width="100" />
                <div className = "name">Name:
                    <input id="firstname" placeholder="First" />
                    <input id="lastname" placeholder="Last" />
                </div>
                
                <div className = "gender">Gender:
                    <select id = "gender">
                        <option value = "select gender">Select gender</option>
                        <option value = "male">male</option>
                        <option value = "female">female</option>
                    </select>
                </div>

                
                <div className ="age">Age: 
                    <input type= "number" id="age" placeholder=" Insert age" min="1" max="120" />
                </div>

                {/* If the user select male, show off male icon so femal on */}
                <div className ="height">Height:  
                    <select id="heightvalue"></select>

                    <select id="heightunits">
                        <option>cm</option>
                        <option>feet</option>
                    </select>
                </div>

                
                <label className = "weight">Weight: 
                    <select id="weightvalue"></select>

                    <select id="weightunits">
                        <option>kg</option>
                        <option>lbs</option>
                    </select>
                </label>

                <div className ="activity-level">Activity Level: 
                    <input id="activity" placeholder=" Activity Level" />
                </div>

                <div className ="goal">
                    <label htmlFor="goal">Goal: </label>
                    <select id="goal" name="goal">
                        <option value="loss">loss</option>
                        <option value ="gain">gain</option>
                        <option value ="keep">keep</option>
                    </select>
                
                </div>

                <label>BMI
                    <div id = "bmi">BMI </div>
                </label>

                <label >RDA
                    <div id = "RDA">RDA</div>
                </label>

            </div>
            </div>

            
        </main>


    );
}