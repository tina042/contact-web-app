
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
    Heading,
    Box,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from "@chakra-ui/react";
  import { Spinner } from '@chakra-ui/react'
  import { Link } from "react-router-dom";
import { getdata } from "../Api/api";

export  const ListOfContact =()=>{

const [data,setData]=useState([]);
 
   useEffect(()=>{ 
    
    let url="https://kisan-network.onrender.com/users/login";
    getdata(url).then((res)=>{
      setData(res)
    }).catch(e=>console.log(e)) 
     
     },[]) 




return <>

<Box
        alignContent={"flex-start"}
        w="100%"
        h="100vh"
        bg='green.400'
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
          <Heading color={"black"}>List of Users</Heading>
        </Button>
        <Box
          overflow={"scroll"}
           
          h="90%"
          // responsive design breakpoint by using Chakra UI
          ml={{ base: "2%", lg: "7%", xl: "9%" }}
        >
          <TableContainer
          //  responsive design breakpoint by using Chakra UI
            w={{ base: "80%", lg: "80%", xl: "80%" }}
            fontSize={{ base: "12px", lg: "16px", xl: "24px" }}
            m="3%"
            mt="20px"
          >
            <Table variant="simple">
              <Thead>
                <Tr bg="blackAlpha.800">
                  <Th color={"Red"}>S.no</Th>
                  <Th color={"Red"}>User Name</Th>
                  <Th color={"Red"}>contact</Th>
                  
                  
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
                {data.map((e, i) => {
                  return (
                     
                      <Tr key={i}>
                        <Td  color={"white"} bg="blackAlpha.800" key={i+1}>
                          {i + 1}
                        </Td>
                        <Td color={"white"} bg="blackAlpha.800" key={i+2}>
                          {e.firstName}{" "}{e.lastName}
                        </Td>
                        <Td bg="blackAlpha.800"  key={i+3}>
                          {" "}
                          <Link to={`/contactinfo/${e._id}`}>
                            {" "}
                            <Button m="5px" colorScheme="teal" size="sm">
                              More Details
                            </Button>{" "}
                          </Link>
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