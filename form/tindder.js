const button = document.querySelector("#btn");


function checkInput(){
    const inputText = document.querySelector('#text');
    const text= inputText.value.trim();

   if(text === ""){
    alert("username is empty")
    return
   };
   const inputNum = document.querySelector("#number");
   const num  =inputNum.value.trim()

   if(num === ""){
    alert("NUmber is empty")
   } else if(num.length != 10|| isNaN(num)){
   alert("invail number number must be 10 digits")
   return
   };
   const inputEmail = document.querySelector("#email") ;
   const email = inputEmail.value.trim();
   if(email === ""){
    alert("your email is empty")
    return
   };
   const inputPass = document.querySelector("#password");
   const password = inputPass.value.trim()

   const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
 
    if (!specialCharRegex.test(password)) {
       alert("Password must include at least one special character.");
   }else if(password > 8){
    alert("password must be greater then 8")
   }
    else {
       alert("Password is valid!");
   }

}

button.addEventListener("click",()=>{
    checkInput()
})