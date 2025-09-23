const url = "https://api.github.com/users/jat_ravi"
const res = fetch(url);
res.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log("Data : ",data)
})
