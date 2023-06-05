
import React from "react";
import { Grid, GridItem ,Button} from '@chakra-ui/react'
 import {Link} from "react-router-dom"
 

export  const Landing =()=>{
   
return <>
 <Grid    templateColumns={{
//   responsive design breakpoint by using Chakra UI
      sm: 'repeat(1, 1fr)',
      md: 'repeat(1, 1fr)',
      lg: 'repeat(2, 1fr)',
      xl: 'repeat(2, 1fr)',
      '2xl': 'repeat(2, 1fr)',
}} gap={4}>
     <GridItem  display={"flex"} justifyContent={"center"} alignItems="center"
      h={{
        //  responsive design breakpoint by using Chakra UI
        base:'50vh',
        sm: '50vh',
        md: '50vh',
        lg: '100vh',
        xl: '100vh',
       '2xl': '100vh',
}} bg='green.400' color={"black"} >
     {/* link to go to list of  contact page */}
    <Link to="listofcontact"> <Button >List of Contact</Button>  </Link>
      
     </GridItem>
  <GridItem display={"flex"} justifyContent={"center"} alignItems="center"   h={{
    //  responsive design breakpoint by using Chakra UI
  base:'50vh',      
 sm: '50vh',
  md: '50vh',
  lg: '100vh',
  xl: '100vh',
  '2xl': '100vh',
}} bg='papayawhip' >
  {/* link to go to list of  Messages page */}
  <Link to="listofmessage"><Button >List of Messages</Button></Link>
    
  </GridItem>
 </Grid>

</>

}