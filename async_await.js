//so async- await is better than both callback hell and promises  
//code will be same like promises code 
function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(function (){
         
            console.log("register end"); 
            resolve('success');   
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
            //return reject("error while get user data!");
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

//async-await
//making function asynchronous then only we can use await inside it async function 
async function authenticate(){
       try{
        const message = await register()//passing data into resolve goes to message 
                        await sendWelcomeEmail()
                        await login()
                        await getUserData()
                        await displayUserdata()
                        console.log(message);
       } catch(err){
         console.log(err);
         throw new Error;// throwing this err manually to not print all set
       }
        
}
//return promise to auhenticate function so we can use then in this function
authenticate().then(()=>{
    console.log("ALL SET!");
}).catch((err)=>{
    console.log("ERROR:"+err);
});
//one way to get the error


//promises
//and now you can see that this is looking better then callback hell
// register()
//     .then(sendWelcomeEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserdata)
//     .catch((err)=>{//suppose we got error while registering the user then we will use reject 
//       console.log("ERROR : "+ err);
//     })
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