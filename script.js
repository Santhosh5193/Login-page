
 function checkLogin(){

    const mail = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    var val = localStorage.getItem("users");
    var users = JSON.parse(val);
    for(let i = 0 ; i<users.length ;i++){
        if(users[i].email ===  mail && users[i].password === password){
             window.location = "./To-do-list-main/index.html";        
        }else{
           document.getElementById("login-error").innerHTML = "check email id & password";
         }
    }

    const getloginid = localStorage.getItem("email");
    const getloginpwd = localStorage.getItem("password");

    
    if(mail === getloginid && password ===getloginpwd){
        window.location = "./Admin-page/admin.html";        
    }else{
        document.getElementById("login-error").innerHTML = "check email id & password";
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

function emailcheck(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(mail.value === "" ){
        document.getElementById("email-error").innerHTML = "Enter the email";
        }else if(!emailRegex.test(mail.value)){
        document.getElementById("email-error").innerHTML = "enter the currect mail ";
        }else{
        document.getElementById("email-error").innerHTML = " ";
    }
}
function passwordcheck(){
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

// submit validation

function submitvalidation(e){
    e.preventDefault();

    const emailstored = localStorage.getItem("email");
    const  passwordstored = localStorage.getItem("password");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(mail.value === "" ){
        document.getElementById("email-error").innerHTML = "Enter the email";
        }else if(!emailRegex.test(mail.value)){
        document.getElementById("email-error").innerHTML = "enter the currect mail ";
        }else{
        document.getElementById("email-error").innerHTML = " ";
    }

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
        
       mail.value = "";
       password.value = "";
}

formid.addEventListener("submit", submitvalidation );

//onfocus validation

function emailonfocus(){
    emailcheck();
}

function passwordonfocus(){
    passwordcheck();
}

//keydown validation

function emailonkeydown(){
    emailcheck();
}

function passwordonkeydown(){
    passwordcheck();
} 

//onblur validation

function emailonblur(){
    emailcheck();
}

function passwordonblur(){
    passwordcheck();
}
