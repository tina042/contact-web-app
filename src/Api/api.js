console.log("Hi i am api");


// for fetching data 
const getdata=async (url)=>{
    let res=await fetch(url);
    let data= res.json();
    return data
}
export {getdata}