const url = "https://api.github.com/users/rishabh-o36"
const res = fetch(url);
res.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log("Data : ",data)
})
.catch((err)=>{
    console.log("Error:",err.message)
})
.finally(()=>{
    console.log("inside finally")
})

// node fetch.js