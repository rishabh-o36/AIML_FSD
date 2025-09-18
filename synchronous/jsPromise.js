function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('register end')   
            resolve();
          },4000)   
    })
}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Send Email end')   
            resolve();
          },3000)  
    })     
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Login end')   
            resolve();
          },1000)  
    })     
}

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('get Data end')   
            resolve();
          },8000)  
    })     
}

function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('display data end')   
            resolve();
          },2000)  
    })     
}

// promise chaining

register()
.then(sendEmail)
.then(login) 
.then(getData)
.then(displayData)
.catch((err)=>{
    console.log('Error = ' + err)
})
