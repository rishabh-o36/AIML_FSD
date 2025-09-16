function register(cb){
    setTimeout(()=>{
      console.log('register end')   
      cb();
    },4000)
 
}
function sendEmail(cb){
   setTimeout(()=>{
      console.log('Send Email end')   
      cb();
    },3000)  
}
function login(cb){
    setTimeout(()=>{
      console.log('Login end')   
      cb();
    },1000)  
}
function getData(cb){
    setTimeout(()=>{
      console.log('get Data end')   
      cb();
    },8000)   
}
function displayData(){
    setTimeout(()=>{
      console.log('display data end')   
    },2000)  
}

//callback hell
register(()=>{
         sendEmail(()=>{
                login(()=>{
                      getData(()=>{
                               displayData();
                      });
                });
         });
});




console.log('call other application')