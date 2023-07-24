// creating a scenario for user to register and login in website
// we have to print in this order only 

// scenario :  
// 1 - register
// 2 - send welcome email 
// 3 - login 
// 4 - get user Data 
// 5 - dispplay user data 

// so to use this we will use normal function call in order wise which is 
// synchronous in nature 
 
function register(){
    console.log("register end");
}

const sendWelcomeEmail = function(){
    console.log("send Welcome Email end");
}

const login = ()=>{
    console.log("login end");
}


const getUserData = ()=>{
    console.log("get user data end");
}

const displayUserdata =()=>{
    console.log("display User data");
}

register();
sendWelcomeEmail(); 
login();
getUserData(); 
displayUserdata(); 

console.log("other application work!");


