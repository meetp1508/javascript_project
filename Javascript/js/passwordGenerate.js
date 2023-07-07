const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericSet = "1234567890";
const specialSet = "!@#$%^&*()?+/";

//selectors
const display = document.getElementById("display");
const totalChar = document.getElementById("length");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const numeric = document.getElementById("numeric");
const special = document.getElementById("special");

const getRandom = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "")=>{
    if(totalChar.value>1 && totalChar.value <20){
   if(upper.checked){
    password += getRandom(upperSet)
   }
   if(lower.checked){
    password += getRandom(lowerSet)
   }
   if(numeric.checked){
    password += getRandom(numericSet)
   }
   if(special.checked){
    password += getRandom(specialSet)
   }
   if(password.length < totalChar.value){
    return generatePassword(password)
   }
   display.innerHTML = password
}else{
    password += "Length should be Between 1-20";
    display.style.fontSize = "14px";
    display.innerHTML = password;
}
}

document.getElementById("btn").addEventListener('click',function(){
    generatePassword();
})