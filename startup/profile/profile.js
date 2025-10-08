
const gender = document.getElementById("gender");
const icon = document.getElementById("icon");

gender.addEventListener("change", function()
{
if (this.value == "male"){
    icon.src="image/maleicon.webp";
}else if(this.value == "female"){
    icon.src= "image/femaleicon.webp";
}else{
    icon.src="image/personicon.webp";
}
});






const heightvalue = document.getElementById("heightvalue");
const heightunits = document.getElementById("heightunits");

    function updateHeightNum(){
        heightvalue.innerHTML = "";

        if (heightunits.value === "cm"){
        heightvalue.innerHTML = `  
        <option>150 </option>
        <option>155 </option>
        <option>160 </option>
        <option>165 </option>
        <option>170 </option>
        <option>175 </option>
        <option>180 </option>
        <option>185 </option>
        <option>190 </option>
        <option>195 </option>

        `;
    
        }else{
        heightvalue.innerHTML =`

        <option> 5.4 </option>
        <option> 5.5 </option>
        <option> 5.6 </option>
        <option> 5.7 </option>
        <option> 5.8 </option>
        <option> 5.9 </option>
        <option> 5.10 </option>
        <option> 5.11</option>
        <option> 6.0</option>
        <option> 6.1 </option>
        <option> 6.2 </option>
        <option> 6.3 </option>
        <option> 6.4 </option>
        <option> 6.5 </option>


        `;
        }}
updateHeightNum();

heightunits.addEventListener("change",updateHeightNum);



//  <!-- <script> 
//             const bmi= document.getElementById("bmi");
//             const height = document.getElementById("height");
//             const weight = document.getElementById("weight");
            
//             bmi = height * weight;
//             return 0;
//         </script> -->