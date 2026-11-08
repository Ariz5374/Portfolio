let nameInput = document.querySelector("#name");
let cityInput = document.querySelector("#city");
let introInput = document.querySelector("#intro");
let formatBtn = document.querySelector("#formatBtn");
let result = document.getElementById("Result")
let checkBtn = document.querySelector("#checkBtn");
let searchName = document.querySelector("#searchName");
 
let formatFunction = ()=>{
    // trim kay liye
  let cleanName = nameInput.value.trim()
 
  // Length kay liye
let nameLength = cleanName.length
//slice kay liye
let firstSpace = cleanName.indexOf(" ")
let firstName;
if(firstSpace==-1){
    firstName=cleanName
}else{
    firstName= cleanName.slice(0,firstSpace)
}
//uppercase name 
let upperCase = cleanName.toUpperCase()
//lowercase city
let lowerCity = cityInput.value.toLowerCase(
)
//replace all
let replaceIntro = introInput.value.replaceAll("student","developer")
//substring ka kaam
let first20 = replaceIntro.substring(0,20)

result.innerHTML= "<h3> All Formatted Info </h3>"+
"<b>Clean Full Name:  " + cleanName + "<br><br> </b>" +
"<b> Length of Name: "+ nameLength + "<br><br> </b>" +
"<b> First Name:  "+ firstName + "<br><br> </b>" +
"<b> Name in upperCase:  "+ upperCase + "<br><br> </b>" +
"<b> City in lowecase: "+ lowerCity + "<br><br> </b>" +
"<b> Updated Introduction:  "+ replaceIntro + "<br><br> </b>" +
"<b> First 20 Characters: "+ first20 +  "<br><br> </b>"


}
formatBtn.addEventListener("click",formatFunction)


let checkName = () => {

     cleanName = nameInput.value.trim();
    let findName = searchName.value.trim();

    if (cleanName.indexOf(findName) != -1) {
        result.innerHTML = "<h3>" + findName + " is present in the name.</h3>";
    } else {
        result.innerHTML = "<h3>" + findName + " is not present in the name.</h3>";
    }

}

checkBtn.addEventListener("click", checkName);


