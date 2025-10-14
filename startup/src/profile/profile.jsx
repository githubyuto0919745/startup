import React, {useState} from 'react';
import './profile.css';


export default function Profile(){
    const [gender, getGender] = useState("select");
    const [icon, getIcon] = useState("./image/personicon.webp");

    const [age, setAge] = useState(0);

    const [heightUnits, setHUnits] = useState("cm");
    const [heightOptions, setHOptions] = useState([150, 155, 160, 165, 170, 175, 180, 185, 190, 195]);
    const [calheight, setCalHeight] = useState(150);

    const [weightUnits, setWUnits] = useState("kg");
    const [weightOptions, setWOptions] = useState([30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105]);
    const [calweight, setCalWeight] = useState(30);

    const [activity, setActivity] = useState(1.375);
    const [goal, setGoal] = useState("Maintain");
    
    

    const calculateTDEE = () =>{
        let BMR;
        if(gender ==="male"){
            BMR = 10 * calweight + 6.25 * calheight -5 * age + 5;
        }else {
            BMR= 10 * calweight + 6.25 * calheight -5 * age -161;
        }

        let TDEE = Math.round (BMR * activity);

        if(goal ==="Lose Weight") return TDEE - 500;
        else if(goal ==="Maintain") return TDEE;
        else if(goal ==="Gain Muscle") return TDEE + 500;

    };
    
    const getBMIMessage = (bmi) =>{
        if(bmi<18.5) return "Underweight";
        else if(bmi >= 18.5 && bmi <25) return "Normal";
        else if(bmi >=25 && bmi<30) return "Overweight";
        else return "Obese";
    };

    const calculateBMI = () =>{
        if(calheight >0 && calweight>0){
        const heightmeters = heightUnits === "cm" ? calheight/100: calheight * 30.48/100;
        const weightkg = weightUnits ==="kg"? calweight : calweight * 0.45359237;
            const bmi = (weightkg) / (heightmeters ** 2);
            return bmi.toFixed(1);
        }
        return 0;
    };

    const getAge = (e) =>{
        const agevalue = parseInt(e.target.value);
        setAge(agevalue);
    };

    const getActivity = (e) =>{
        const activitylevel = e.target.value;
        let multiplier = 1;

        if(activitylevel ==="Very Active (6-7 days/week)") multiplier = 1.375;
        else if (activitylevel === "Moderately Active (3-5 days/week)") multiplier = 1.55;
        else if (activitylevel === "Lightly Active (1-3 days/week)")  multiplier = 1.725;

        setActivity(multiplier);
    };

    const getGoal= (e) =>{
        const goalvalue = e.target.value;
        setGoal(goalvalue);
    }; 


    const handleValueHeight =(e) =>{
        const hvalue = (parseFloat(e.target.value));
        setCalHeight(hvalue);
    };
    const handleValueWeight= (e) =>{
        const wvalue = (parseFloat(e.target.value));
        setCalWeight(wvalue);
    };
   

    const handleUnitsHeight = (e) => {
        const selecthUnit= e.target.value;
        setHUnits(selecthUnit);

        if(selecthUnit === "cm"){
        const cmOptions=[150, 155, 160, 165, 170, 175, 180, 185, 190, 195];
            setHOptions(cmOptions);
            setCalHeight(cmOptions[0]);  
        }
        else if(selecthUnit === "feet"){
            const feetOptions = [5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8];
            setHOptions(feetOptions);
            setCalHeight(feetOptions[0]);
        }
    };

    const handleUnitsWeight = (e) => {
        const selectwUnit = e.target.value;
        setWUnits(selectwUnit);

        if(selectwUnit ==="kg"){
            const kgOptions= [30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105];
            setWOptions(kgOptions);
            setCalWeight(kgOptions[0]);
        }
        else if(selectwUnit ==="lbs"){
            const lbsOptions =[70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230];
            setWOptions(lbsOptions);
            setCalWeight(lbsOptions[0]);
        }
    };
   


    const handleGender = (e) => {
        const selectgender = e.target.value;
        getGender(selectgender);

        if(selectgender === "male"){
            getIcon("./image/maleicons.jpg");
        } else if (selectgender === "female"){
            getIcon("./image/femaleicons.png");
        } else{
            getIcon("./image/personicon.webp");
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

                        
                        <div className ="age">
                            Age: 
                            <input type= "number" value={age} onChange ={getAge} placeholder=" Age" min="1" max="120" />
                        </div>

                        {/* If the user select male, show off male icon so femal on */}
                        <div className ="height">
                            Height:  
                            <select value = {calheight} onChange={handleValueHeight}>
                                {heightOptions.map((h,i) =>(
                                    <option key={i} value ={h}>
                                        {h}
                                    </option>
                                ))}
                            </select>


                            <select value ={heightUnits} onChange={handleUnitsHeight}>
                                <option>cm</option>
                                <option>feet</option>
                            </select>
                        </div>

                        
                        <div className = "weight">
                            Weight: 
                            <select value={calweight} onChange={handleValueWeight}>
                                {weightOptions.map((w,i) =>(
                                    <option key ={i} value={w}>
                                        {w}
                                    </option>
                                ))}
                            </select>

                            <select value={weightUnits} onChange ={handleUnitsWeight}>
                                <option>kg</option>
                                <option>lbs</option>
                            </select>
                        </div>

                        <div className ="bmi">
                            <label>BMI:    </label>
                            <span>{calculateBMI()}  </span>
                            <span> - {getBMIMessage(calculateBMI())}</span>
                        </div>



                        <div className ="activity-level">
                            <label htmlFor="activity">Activity Level: </label>
                            <select value ={activity}  onChange = {getActivity} placeholder=" Activity Level">
                                <option>Very Active (6-7 days/week)</option>
                                <option>Moderately Active (3-5 days/week)</option>
                                <option>Lightly Active (1-3 days/week) </option>
                            </select>    
                        </div>

                        <div className ="goal">
                            <label htmlFor="goal">Goal: </label>
                            <select value={goal} onChange={getGoal} name="goal">
                                <option value="Lose Weight">Lose Weight</option>
                                <option value ="Maintain">Maintain</option>
                                <option value ="Gain Muscle">Gain Muscle</option>
                            </select>
                        
                        </div>

                        <div className = "tdee">
                            <label> TDEE:  </label>
                            <span>   {calculateTDEE() }  kcal  </span>
                        </div>

                        
                      
                    </div>  
                      

                </div>
            </div>

            
        </main>


    );
}