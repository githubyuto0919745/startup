import React, {useState} from 'react';
import './profile.css';


export default function Profile(){
    const [gender, getGender] = useState("select");
    const [icon, getIcon] = useState("./image/personicon.webp");
    const [heightUnits, setheightUnits] = useState("units");
    const [heightOptions, setheightOptions] = useState([150, 155, 160, 165, 170, 175, 180, 185, 190, 195]);
    const [weightUnits, setweightUnits] = useState("units");
    const [weightOptions, setweightOptions] = useState([30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105]);


    const handleGender = (e) => {
        const selected = e.target.value;
        getGender(selected);

        if(selected === "male"){
            getIcon("./image/maleicons.jpg");
        } else if (selected === "female"){
            getIcon("./image/femaleicons.png");
        } else{
            getIcon("./image/personicon.webp");
        }
    };

    const handleHeight = (e) => {
        const selecthUnit= e.target.value;
        setheightUnits(selecthUnit);

        if(selecthUnit === "cm"){
        setheightOptions([150, 155, 160, 165, 170, 175, 180, 185, 190, 195]);
        }
        else if(selecthUnit === "feet"){
            setheightOptions([5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8]);
        }
    };

    const handleWeight = (e) => {
        const selectwUnit = e.target.value;
        setweightUnits(selectwUnit);

        if(selectwUnit ==="kg"){
            setweightOptions([30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105]);
        }
        else if(selectwUnit ==="lbs"){
            setweightOptions([70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230]);
        }
    };
   

    return(
        <main>
            <div className = "main-profile">
        
            <img id = "icon" src={icon} alt = "personicon" width="100" />
                <div className="profile">  
                    <div className="profile-section">
                        <div className = "name">Name:
                            <input id="firstname" placeholder="First" />
                            <input id="lastname" placeholder="Last" />
                        </div>
                        
                        <div className = "gender">Gender:
                            <select value = {gender} onChange={handleGender}>
                                <option value = "select gender">Select gender</option>
                                <option value = "male">male</option>
                                <option value = "female">female</option>
                            </select>
                        </div>

                        
                        <div className ="age">Age: 
                            <input type= "number" id="age" placeholder=" Insert age" min="1" max="120" />
                        </div>

                        {/* If the user select male, show off male icon so femal on */}
                        <div className ="height">
                            Height:  
                            <select>
                                {heightOptions.map((h,i) =>(
                                    <option key={i} value ={h}>
                                        {h}
                                    </option>
                                ))}
                            </select>


                            <select value ={heightUnits} onChange={handleHeight}>
                                <option>cm</option>
                                <option>feet</option>
                            </select>
                        </div>

                        
                        <label className = "weight">
                            Weight: 
                            <select>
                                {weightOptions.map((w,i) =>(
                                    <option key ={i} value={w}>
                                        {w}
                                    </option>
                                ))}
                            </select>

                            <select value={weightUnits} onChange ={handleWeight}>
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

                        
                        <div id = "bmi">
                            <label>BMI    </label>
                        </div>
                        
                        <div id = "RDA"></div>
                            <label >RDA</label>
                        </div>

                </div>
            </div>

            
        </main>


    );
}