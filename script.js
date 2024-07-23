
 function checkLogin(){

    const mail = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    var val = localStorage.getItem("users");
    var users = JSON.parse(val);
    for(let i = 0 ; i<users.length ;i++){
        if(users[i].email ===  mail && users[i].password === password){
             window.location = "./To-do-list-main/index.html";        
        }
    }

    const getloginid = localStorage.getItem("email");
    const getloginpwd = localStorage.getItem("password");

    
    if(mail === getloginid && password ===getloginpwd){
        window.location = "./Admin-page/admin.html";        
    }
 }

   //temporary admin details
    
   localStorage.setItem(
    "email" , "santhosh@gmail.com",
  );
  localStorage.setItem(
    "password" , "santhoshS",
  );   

  //local storage

 const users = JSON.parse(localStorage.getItem("login-users")) || {};
 function localstorage(){
    const value = {
         email: mail.value,
         password: password.value
      }; 
      localStorage.setItem("login-users", JSON.stringify(value));
      
     checkLogin();
     
 }

// Event Functions

const formid = document.getElementById("form-id");
const mail = document.getElementById("login-email");
const password = document.getElementById("login-password");

const pwd = document.getElementById("password-error");
const checkmail = document.getElementById("email-error");



// submit validation

function submitvalidation(e){
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(mail.value === "" ){
        checkmail.innerHTML = "Enter the email";
        }else if(!emailRegex.test(mail.value)){
            checkmail.innerHTML = "enter the currect mail ";
        }else{
            checkmail.innerHTML = " ";
    }

    if(password.value === "" || password.value === null){
        pwd.innerHTML = "Enter the password";
        }else if(password.value.search(/[A-Z]/) == -1){
            pwd.innerHTML = " password should be given attleast one  uppercase";
        }else{
            pwd.innerHTML = "";
       }
        
       mail.value = "";
       password.value = "";
}

formid.addEventListener("submit", submitvalidation );

//checking mail

function emailcheck(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(mail.value === "" ){
        checkmail.innerHTML = "Enter the email";
        }else if(!emailRegex.test(mail.value)){
            checkmail.innerHTML = "enter the currect mail ";
        }else{
            checkmail.innerHTML = " ";
    }
}

function passwordcheck(){
    if(password.value === "" ){
         pwd.innerHTML = "Enter the password";
        }else if(password.value.length < 8 ){
            pwd.innerHTML = " password must have 8 characters";
        }else if(password.value.search(/[A-Z]/) == -1){
            pwd.innerHTML = " password should be given attleast one  uppercase";
        }else{
            pwd.innerHTML = "";
       }
}

