import React, {useState} from 'react';
import './profile.css';


// import Input from '../input/input';

// export const getUserGoals = (profile) =>{
//     return {
//         calories: calculateCalories(profile),
//         protein: calculateProtein(profile),
//         carbs: calculateCarbs(profile),
//         fat: calculateFats(profile)
//     };
// };


export default function Profile(){
    const [gender, getGender] = useState("select gender");
    const [icon, getIcon] = useState("./image/personicon.webp");
    const [age, setAge] = useState(20);
    const [heightUnits, setHUnits] = useState("cm");
    const initialHOptions = [150, 155, 160, 165, 170, 175, 180, 185, 190, 195].map(h => ({
                label: `${h} cm`,
                value: h
        }));
    const [heightOptions, setHOptions] = useState(initialHOptions)
    const [calheight, setCalHeight] = useState(initialHOptions[0].value);

    const [weightUnits, setWUnits] = useState("kg");
    const [weightOptions, setWOptions] = useState([30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105]);
    const [calweight, setCalWeight] = useState(weightOptions[0]);

    const [activity, setActivity] = useState("Moderately Active (3-5 days/week)");
    const [goal, setGoal] = useState("Maintain");
    
    
    
    const handleSave = () =>{
        const data = {
            gender, 
            age, 
            height: calheight,
            weight: calweight,
            tdee: calculateTDEE(),
            protein: calculateProtein(),
            carbs: calculateCarbs(),
            fats: calculateFats(),
            bmi: calculateBMI(),
        };
        
        localStorage.setItem("profileData", JSON.stringify(data));
        alert("Profile is saved!!");
    };

    const calculateFats = () =>{
        if (!activity || !goal || age <= 0 || calheight <= 0 || calweight <= 0) return 0;
        const calories =calculateTDEE();
        if (calories <= 0) return 0;
        const fatCalories = calories * 0.25;
        return Math.round(fatCalories/9);
    }
    const calculateCarbs = () =>{
        if (!activity || !goal || age <= 0 || calheight <= 0 || calweight <= 0) return 0;
        const calories = calculateTDEE();
        const protein = calculateProtein();
        const fats = calculateFats();

        const proteinCalories = protein * 4;
        const fatCalories = fats * 9;
        const carbCalories = calories - proteinCalories - fatCalories;

        return carbCalories > 0 ? Math.round(carbCalories / 4) : 0;
    }
    const calculateProtein = () =>{
        if (!activity || !goal || age <= 0 || calheight <= 0 || calweight <= 0) return 0;
        let weightKg = weightUnits === "kg" ? calweight : calweight * 0.45359237;
         
         let multiplier = 1.55;
         if(goal ==="Lose Weight") multiplier = 1.8;
         else if(goal === "Gain Muscle") multiplier = 2;
         return Math.round(weightKg * multiplier) || 0;
    }

    const calculateTDEE = () =>{
        if (!activity || !goal || age <= 0 || calheight <= 0 || calweight <= 0) return 0;
        let BMR;
        let weightKg = weightUnits === "kg" ? calweight : calweight * 0.45359237;
        let heightCm = heightUnits === "cm" ? calheight : calheight * 30.48;
        if(gender ==="male"){
            BMR = 10 * weightKg + 6.25 * heightCm -5 * age + 5;
        }else {
            BMR= 10 * weightKg + 6.25 * heightCm -5 * age -161;
        }

        
        
        let multiplier = 1;
        if(activity === "Very Active (6-7 days/week)") multiplier = 1.725;
        else if (activity === "Moderately Active (3-5 days/week)") multiplier = 1.55;
        else if (activity === "Lightly Active (1-3 days/week)")  multiplier = 1.375;

        
        
        let TDEE = Math.round (BMR * multiplier);
        if(goal ==="Lose Weight") return TDEE - 500;
        else if(goal ==="Maintain") return TDEE;
        else if(goal ==="Gain Muscle") return TDEE + 500;

        return 0;

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
        setActivity(e.target.value);
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
            const cmOptions=[150, 155, 160, 165, 170, 175, 180, 185, 190, 195].map(h => ({
                label: `${h} cm`,
                value: h
        }));
            
            setHOptions(cmOptions);
            setCalHeight(cmOptions[0].value);  
        }
        else if(selecthUnit === "feet"){
            const feetOptions = [{label: "5'0\"", value: 5 + 0/12},
                                { label: "5'1\"", value: 5 + 1/12 },
                                { label: "5'2\"", value: 5 + 2/12 },
                                { label: "5'3\"", value: 5 + 3/12 },
                                { label: "5'4\"", value: 5 + 4/12 },
                                { label: "5'5\"", value: 5 + 5/12 },
                                { label: "5'6\"", value: 5 + 6/12 },
                                { label: "5'7\"", value: 5 + 7/12 },
                                { label: "5'8\"", value: 5 + 8/12 },
                                { label: "5'9\"", value: 5 + 9/12 },
                                { label: "5'10\"", value: 5 + 10/12 },
                                { label: "5'11\"", value: 5 + 11/12 },
                                { label: "6'0\"", value: 6 },
                            ];
    
            setHOptions(feetOptions);
            setCalHeight(feetOptions[0].value);
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

    //  const profile = {
    //                     gender,
    //                     age,
    //                     heightUnits,
    //                     calheight,
    //                     weightUnits,
    //                     calweight,
    //                     activity,
    //                     goal,
    //                     };
   



    return(
        <main>
            <div className = "main-profile">

            {/* <Input profile={profile} /> */}
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
                                <option value="0" disabled>0</option>
                                {heightOptions.map((h,i) =>(
                                    <option key={i} value ={h.value}>
                                        {h.label}
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
                                <option value="0" disabled>0</option>
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
                            <select value ={activity}  onChange = {getActivity}>
                                <option value="">Select activity level</option>
                                <option>Very Active (6-7 days/week)</option>
                                <option>Moderately Active (3-5 days/week)</option>
                                <option>Lightly Active (1-3 days/week) </option>
                            </select>    
                        </div>

                        <div className ="goal">
                            <label htmlFor="goal">Goal: </label>
                            <select value={goal} onChange={getGoal}>
                                <option value="">Select goal</option>
                                <option value="Lose Weight">Lose Weight</option>
                                <option value ="Maintain">Maintain</option>
                                <option value ="Gain Muscle">Gain Muscle</option>
                            </select>
                        
                        </div>    
                        
                        <div className="RDA">
                            <div className = "tdee">
                            <label> TDEE:  </label>
                            <span>   {calculateTDEE() }  kcal  </span>
                            </div>
                            <div className = "protein">
                                <label> Protein: </label>
                                <span> {Math.round(calculateProtein())} g</span>
                            </div>
                            <div className = "carbs">
                                <label> Carbs: </label>
                                <span> {Math.round(calculateCarbs())} g</span>
                            </div>
                            <div className = "fats">
                                <label> Fats: </label>
                                <span> {Math.round(calculateFats())} g</span>
                            </div>
                        </div>
                        <div className="profile-btn-container">
                        <button className = "profile-btn" onClick = {handleSave}>Save</button>
                        </div>

                       






                      
                    </div>  
                      

                </div>
            </div>

            
        </main>


    );
}