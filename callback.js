//now we want to make our code asynchronous 
//by using callback function 

function register(callback){
    setTimeout(function (){
        console.log("register end"); 
        callback();   
    }, 2000);//in miliseconds 
    
}

const sendWelcomeEmail = function(callback){
    setTimeout(() => {
        console.log("send Welcome Email end");
        callback();     
    }, 3000);//3 seconds
   
}

const login = (callback)=>{
    setTimeout(() => {
        console.log("login end"); 
        callback();   
    }, 1000);
    
}


const getUserData = (callback)=>{
    setTimeout(() => {
        console.log("get user data end");
        callback();   
    }, 4000);
    

}

const displayUserdata =()=>{
    console.log("display User data");
}

//callback hell  
register(function(){
    sendWelcomeEmail(()=>{
        login(()=>{
            getUserData(()=>{
                displayUserdata();    
            }); 
                
        });
        
    }); 
     
});

//synchronous code 
console.log("other application work!");