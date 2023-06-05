
import React from "react";
import { Box,Button,Spinner,Text  } from '@chakra-ui/react'
import { useParams ,Link} from "react-router-dom";
import { useEffect,useState } from "react";
import { getdata } from "../Api/api";
 
export  const ContactInfo =()=>{
// single user data state
const [data,setData]=useState([])
// unique id of the user 
const {id}=useParams()
 
//  useEffect for fetching the single user data 
useEffect(()=>{
    let url=`https://kisan-network.onrender.com/users/login/${id}`
    getdata(url).then((res)=>{
        setData(res)
    }).catch(e=>console.log(e))   
},[])


return <>
<Box 
 pt="10%" 
 bgColor={"Black"} 
 w="100%" 
 h="100vh" 
 bg='green.400' >
 <Box 
 fontFamily={"sans-serif"}
  w={{sm:"100%" ,lg:"60%"}}
  h="200px" margin={"auto"}
  fontSize="20px" 
  bgColor="green.200"
  textAlign={"center"} 
  justifyContent="center">
{/* array of object of SIngle user  */}
{data.length===0?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>:null}
  {data.map((e,i)=>{
  return  <Box key={i}>
  <Text>Name : {e.firstName} {e.lastName}</Text>
  <Text>Number : {e.number}</Text>
  <Link  to= {`/messagescreen/${e._id}`} > <Button bg={"blue.400"} color="white" w="40%">Send  OTP</Button></Link>
  </Box>
  })}
 </Box>
 </Box>
</>

}