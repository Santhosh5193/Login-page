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

form.addEventListener("submit" ,(e) => {
    
    if(fname.value === '' || fname.value == null){
        e.preventDefault(); 
        document.getElementById("name-error").innerHTML = "Enter the name";
    }else{
        document.getElementById("name-error").innerHTML = "";
    } 

    //email validation 

    if(mail.value === '' || mail.value == null){
        e.preventDefault(); 
        document.getElementById("email-error").innerHTML = "Enter the email";
    }else{
        document.getElementById("email-error").innerHTML = "";
    } 
    
    // check validation

    if(!error.checked){
        e.preventDefault();
        document.getElementById("output").innerHTML = "Tick the checkbox";
    }else{
        document.getElementById("output").innerHTML = "";
    }      
    
    //number validation 
    const ncheck = /^[A-Za-z]+$/;

    if(number.value === '' || number.value == null){
        e.preventDefault(); 
        document.getElementById("number-error").innerHTML = "Enter the mobile number";
    }else if(ncheck.test(number.value)){
        e.preventDefault();
        document.getElementById("number-error").innerHTML = " numbers only accepted ";      
    }else{
        document.getElementById("number-error").innerHTML = " ";      
    }
      

    //password validation 
    var pwd = document.getElementById("password-error");

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


//On blur validation

 function textonblur(){
    const lettersRegex = /^[A-Za-z]+$/;

    if(fname.value === "" ){
    document.getElementById("name-error").innerHTML = "Enter the name";
    }else if(!lettersRegex.test(fname.value)) {
    document.getElementById("name-error").innerHTML = "Name accepts only Characters";
    }else{
    document.getElementById("name-error").innerHTML = " ";
}
}

 function emailonblur(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(mail.value === "" ){
    document.getElementById("email-error").innerHTML = "Enter the email";
    }else if(!emailRegex.test(mail.value)){
    document.getElementById("email-error").innerHTML = "enter the currect mail ";
    }else{
    document.getElementById("email-error").innerHTML = " ";
}
}

 function numberonblur(){
    const ncheck = /^[A-Za-z]+$/;
    
    if(number.value === "" ){
    document.getElementById("number-error").innerHTML = "Enter the number";
    }else if(ncheck.test(number.value)){
        document.getElementById("number-error").innerHTML = " numbers only accepted ";      
    }else if(number.value.length != 10){
        document.getElementById("number-error").innerHTML = " Number must have 10 digits ";
    }else{
    document.getElementById("number-error").innerHTML = " ";
}
}

 function passwordonblur(){
    if(password.value === "" ){
    document.getElementById("password-error").innerHTML = "Enter the password";
    }else if(password.value.length < 8){
        document.getElementById("password-error").innerHTML = " password must have 8 characters";
    }
    else if(password.value.search(/[A-Z]/) == -1){
        document.getElementById("password-error").innerHTML = " password should be given attleast one  uppercase";
    }else{
    document.getElementById("password-error").innerHTML = "";
}
}

// keydown validation

function textonkeydown(){
    const letters = /^[A-Za-z]+$/;

    if(fname.value === "" || fname.value == null ){
         document.getElementById("name-error").innerHTML = "Enter the name";
    }else if(!fname.value.match(letters)) {
         document.getElementById("name-error").innerHTML = "Name accepts only Characters";
    }else{
        document.getElementById("name-error").innerHTML = " ";
}
}

function emailonkeydown(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(mail.value === "" ){
    document.getElementById("email-error").innerHTML = "Enter the email";
    }else if(!emailRegex.test(mail.value)){
    document.getElementById("email-error").innerHTML = "enter the currect mail ";
    }else{
    document.getElementById("email-error").innerHTML = " ";
}
}

 function numberonkeydown(){
    const ncheck = /^[A-Za-z]+$/;
    
    if(number.value === "" ){
    document.getElementById("number-error").innerHTML = "Enter the number";
    }else if(ncheck.test(number.value)){
        document.getElementById("number-error").innerHTML = " numbers only accepted ";      
    }else if(number.value.length != 9){
        document.getElementById("number-error").innerHTML = " Number must have 10 digits ";
    }else{
    document.getElementById("number-error").innerHTML = " ";
}
}

 function passwordonkeydown(){
    if(password.value === "" ){
    document.getElementById("password-error").innerHTML = "Enter the password";
    }else if(password.value.length < 8){
        document.getElementById("password-error").innerHTML = " password must have 8 characters";
    }
    else if(password.value.search(/[A-Z]/) == -1){
        document.getElementById("password-error").innerHTML = " password should be given attleast one  uppercase";
    }else{
    document.getElementById("password-error").innerHTML = "";
}
}

// onfocus validation

function textonfocus(){
    const letters = /^[A-Za-z]+$/;

    if(fname.value === "" || fname.value == null ){
         document.getElementById("name-error").innerHTML = "Enter the name";
    }else if(!fname.value.match(letters)) {
         document.getElementById("name-error").innerHTML = "Name accepts only Characters";
    }else{
        document.getElementById("name-error").innerHTML = " ";
}
}

function emailonfocus(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(mail.value === "" ){
    document.getElementById("email-error").innerHTML = "Enter the email";
    }else if(!emailRegex.test(mail.value)){
    document.getElementById("email-error").innerHTML = "enter the currect mail ";
    }else{
    document.getElementById("email-error").innerHTML = " ";
}
}

 function numberonfocus(){
    const ncheck = /^[A-Za-z]+$/;
    
    if(number.value === "" ){
    document.getElementById("number-error").innerHTML = "Enter the number";
    }else if(ncheck.test(number.value)){
        document.getElementById("number-error").innerHTML = " numbers only accepted ";      
    }else if(number.value.length != 9){
        document.getElementById("number-error").innerHTML = " Number must have 10 digits ";
    }else{
    document.getElementById("number-error").innerHTML = " ";
}
}

 function passwordonfocus(){
    if(password.value === "" ){
    document.getElementById("password-error").innerHTML = "Enter the password";
    }else if(password.value.length < 8){
        document.getElementById("password-error").innerHTML = " password must have 8 characters";
    }
    else if(password.value.search(/[A-Z]/) == -1){
        document.getElementById("password-error").innerHTML = " password should be given attleast one  uppercase";
    }else{
    document.getElementById("password-error").innerHTML = "";
}
}