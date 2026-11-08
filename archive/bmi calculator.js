let weight = document.getElementById("weight")
let height = document.getElementById("Height")
let btn = document.getElementById("calBtn")
let Result = document.getElementById("Result")
let clearBtn = document.getElementById("clearBtn");

let calculateBmi = ()=>{

    let userHeight = Number(height.value)
    let userWeight = Number(weight.value)

    if(userHeight <= 0 || userWeight <= 0){
       Result.innerHTML="Please enter valid values.";
       Result.style.color="red"
       return

    }
   let heightInMeters = userHeight/100
   let bmi = userWeight/(heightInMeters*heightInMeters)
   bmi=bmi.toFixed(1)
   
   if(bmi<18.5){
    Result.innerHTML="Your Bmi is: "+bmi+"<br>UnderWeight"
    Result.style.color="skyblue"
   }
else if(bmi<25){
    Result.innerHTML="Your Bmi is: " + bmi + "<br> Normal Weight"
    Result.style.color="lime" 
}
else if(bmi<3){
    Result.innerHTML="Your Bmi is: " + bmi + "<br> Over Weight"
    Result.style.color="orange" 
}
else{
    Result.innerHTML="Your Bmi is: "+ bmi + "<br> Obese"
    Result.style.color="red"
}


}
btn.addEventListener("click",calculateBmi)


let clearValue = () => {
    weight.value=""
    height.value=""
    Result.innerHTML=""
    weight.focus=""



}
clearBtn.addEventListener("click",clearValue)
