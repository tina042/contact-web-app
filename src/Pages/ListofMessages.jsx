
import { Box, Button, Heading, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { getdata } from "../Api/api";


export  const ListofMessages =()=>{
  // state for the list of messages
    const [data,setData]=useState([])
    // for geting the list of messages and otp 
    useEffect(()=>{ 
      let url="https://kisan-network.onrender.com/users/querry";
      getdata(url).then((res)=>{
        setData(res.reverse())
      }).catch(e=>console.log(e)) 
         },[]) 

return <>

<Box
        alignContent={"flex-start"}
        w="100%"
        h="100vh"
        bg='papayawhip'
       
        m="auto"
      >
        
        <Button
        //  responsive design breakpoint by using Chakra UI
          w={{ base: "70%", lg: "48%", xl: "48%" }}
          ml={{ base: "9%", lg: "18%", xl: "20%" }}
          mt="20px"
          bg="white"
        >
          {" "}
          <Heading color={"black"}>List of OTP send</Heading>
        </Button>
        <Box
          overflow={"scroll"}
           
          h="90%"
          // responsive design breakpoint by using Chakra UI
          ml={{ base: "0%", lg: "7%", xl: "9%" }}
        >
          <TableContainer
          //  responsive design breakpoint by using Chakra UI
            w={{ base: "100%", lg: "100%", xl: "80%" }}
            fontSize={{ base: "11px", lg: "16px", xl: "24px" }}
            m="3%"
            mt="20px"
          >
            <Table variant="simple">
              <Thead>
                <Tr bg="blackAlpha.800">
                  <Th color={"Red"}>S.no</Th>
                  <Th color={"Red"}>User Name</Th>
                  <Th color={"Red"}>contact</Th>
                  <Th color={"Red"}>OTP</Th>
                  <Th color={"Red"}>Date&Time</Th>
                </Tr>
              </Thead>
              <Tbody>
              {data.length===0?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>:null}
                {/* maping the otp details date and time */}
                {data.map((e, i) => {
                  return (
                    
                      <Tr key={i}  color={"white"}> 
                        <Td    bg="blackAlpha.800">
                          {i + 1}
                        </Td>
                        <Td  bg="blackAlpha.800">
                          {e.firstName}{" "}{e.lastName}
                        </Td>
                        <Td bg="blackAlpha.800">
                          {" "} 
                            {e.number}
                        </Td>
                        <Td bg="blackAlpha.800">
                          {" "} 
                            {e.otp}
                        </Td>
                        <Td bg="blackAlpha.800">
                          {" "} 
                            {e.dateTime}
                        </Td>
                      </Tr>
                     
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

</>

}