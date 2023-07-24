// so now we have seen the callback hell is looking so weird 
// so now we will use promises 
// promises makes our code looks better 

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(function (){
            return reject("error while registering");
            console.log("register end"); 
            //resolve();   
        }, 2000);
    });
}

const sendWelcomeEmail = function(){
   return new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("send Welcome Email end");
        resolve();     
    }, 3000);//3 seconds
      
   });
    
}

const login = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("login end"); 
            resolve();   
        }, 1000);    
    })
    
}


const getUserData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("get user data end");
            resolve();   
        }, 4000);     
    })
   
}

const displayUserdata =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("display User data");
            resolve();  
        }, 2000);    
    })
}

//and now you can see that this is looking better then callback hell
register()
    .then(sendWelcomeEmail)
    .then(login)
    .then(getUserData)
    .then(displayUserdata)
    .catch((err)=>{//suppose we got error while registering the user then we will use reject 
      console.log("ERROR : "+ err);
    })
    // so catch get the rejected part 



//callback hell  
// register(function(){
//     sendWelcomeEmail(()=>{
//         login(()=>{
//             getUserData(()=>{
//                 displayUserdata();    
//             }); 
                
//         });
        
//     }); 
     
// });



//synchronous code 
console.log("other application work!");