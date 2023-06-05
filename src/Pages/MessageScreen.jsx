
import { Alert,Text,  AlertIcon, AlertTitle, Box, Button, Input,  } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from 'axios';
import { getdata } from "../Api/api";
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

export  const MessageScreen =()=>{
const [data,setData]=useState([]);

const {id}= useParams()
// console.log(id,"message-screen")
const [otp,setOtp]=useState("")
const [view,setView]=useState(false);
useEffect(()=>{
   setOtp( getRndInteger(10000,99999))
   let url=`https://kisan-network.onrender.com/users/login/${id}`
   getdata(url).then((res)=>{
       setData(res)
      
   }).catch(e=>console.log(e)) 


},[])


const send=(data)=>{
    let x=new Date() 
    let n=("0"+(x) ).slice(1,25)  
const body={
    firstName:data[0]?.firstName,
    lastName:data[0]?.lastName,
    number:data[0]?.number,
    dateTime:n,
    otp
}

  axios.post("https://kisan-network.onrender.com/sendsms",body).then((ress)=>console.log(ress,"d"))
  setView(true)  
  console.log(view)
  setTimeout(()=>{
    setView(false)
    console.log("view ")
   },3000)
}
console.log(view)

// if we want to customise the input field ac to user
const handelCHange =(e)=>{
 const {value}=e.target;
}

return <>
<Box  pt="10%"  bg='green.400' w="100%" h="100vh" >
{view?<Alert status='success' w="50%" m="auto">
  <AlertIcon />
  <AlertTitle>Your OTP is send </AlertTitle>
  
</Alert >:null}
 <Box w={{sm:'90%',lg:'50%'}} margin={"auto"} bg="green.300" mt="10%"> 

    <Input type={"text"}  onChange={handelCHange}  value={`Hi, Your five  digit  Otp is ${ otp}` } ></Input>
    <Button w="100%" bg="blue.400" color={"white"} onClick={()=>send(data)}>Send </Button>
    
    <Link to="/"> <Button>Go to Home</Button> </Link>
 </Box>
 </Box>
</>

}