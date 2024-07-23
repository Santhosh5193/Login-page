const fname = document.getElementById("name");
const mail = document.getElementById("email");
const error = document.getElementById("checkbox");
const form = document.getElementById("form-id");
const number = document.getElementById("number");
const password = document.getElementById("password");

const users = JSON.parse(localStorage.getItem("users")) || [];

function localstorage(){
   const value = {
       firstName: fname.value,
        email: mail.value,
        number: number.value,
        password: password.value
     };
     users.push(value);

     localStorage.setItem("users", JSON.stringify(users));
}

//submit validation
const namecheck =  document.getElementById("name-error");
const emailcheck = document.getElementById("email-error");
const checkbox = document.getElementById("output");
const numcheck =  document.getElementById("number-error");
const pwd = document.getElementById("password-error");


form.addEventListener("submit" ,(e) => {
    
    if(fname.value === '' || fname.value == null){
        e.preventDefault(); 
        namecheck.innerHTML = "Enter the name";
    }else{
        namecheck.innerHTML = "";
    } 

    //email validation 

    if(mail.value === '' || mail.value == null){
        e.preventDefault(); 
        emailcheck.innerHTML = "Enter the email";
    }else{
        emailcheck.innerHTML = "";
    } 
    
    // check validation

    if(!error.checked){
        e.preventDefault();
        checkbox.innerHTML = "Tick the checkbox";
    }else{
        checkbox.innerHTML = "";
    }      
    
    //number validation 
    const ncheck = /^[A-Za-z]+$/;

    if(number.value === '' || number.value == null){
        e.preventDefault(); 
        numcheck.innerHTML = "Enter the mobile number";
    }else if(ncheck.test(number.value)){
        e.preventDefault();
        numcheck.innerHTML = " numbers only accepted ";      
    }else{
        numcheck.innerHTML = " ";      
    }
      

    //password validation 

    if(password.value === '' || password.value == null){
        e.preventDefault(); 
        pwd.innerHTML = "Enter the password";
        return false;
    }  
    if(password.value.length < 8){
        e.preventDefault();
        pwd.innerHTML = " password length must have 8 letters";
        return false;
     }
    if(password.value.length > 15){
        e.preventDefault();
        pwd.innerHTML = " password length have 15 letters";
        return false;
     }
     if (password.value.search(/[A-Z]/) == -1) {
        e.preventDefault();
        pwd.innerHTML = "Your password needs at least one upper case letter.";
        return false;
      }else{
        pwd.innerHTML = " ";
      }       
      
})

//checking details


function namechecking() {
    const lettersRegex = /^[A-Za-z]+$/;
  
    if(fname.value === "" ){
        namecheck.innerHTML = "Enter the name";
        }else if(!lettersRegex.test(fname.value)) {
            namecheck.innerHTML = "Name accepts only Characters";
        }else{
            namecheck.innerHTML = " ";
    }
}
function emailchecking() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(mail.value === "" ){
        emailcheck.innerHTML = "Enter the email";
    }else if(!emailRegex.test(mail.value)){
        emailcheck.innerHTML = "enter the currect mail ";
    }else{
        emailcheck.innerHTML = " ";
}
}
function numberchecking() {
    const ncheck = /^[A-Za-z]+$/;
    
    if(number.value === "" ){
    numcheck.innerHTML = "Enter the number";
    }else if(ncheck.test(number.value)){
        numcheck.innerHTML = " numbers only accepted ";      
    }else if(number.value.length != 10){
        numcheck.innerHTML = " Number must have 10 digits ";
    }else{
        numcheck.innerHTML = " ";
}
}
function passwordchecking(){
    if(password.value === "" ){
        pwd.innerHTML = "Enter the password";
        }else if(password.value.length < 8){
            pwd.innerHTML = " password must have 8 characters";
        }
        else if(password.value.search(/[A-Z]/) == -1){
            pwd.innerHTML = " password should be given attleast one  uppercase";
        }else{
            pwd.innerHTML = "";
    }
}
