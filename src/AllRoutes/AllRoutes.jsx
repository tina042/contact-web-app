


import React from "react";
import {Routes,Route} from "react-router-dom"
import { ContactInfo } from "../Pages/ContactInfo";
import { Landing } from "../Pages/Landing";
import { ListOfContact } from "../Pages/ListOfContact";
import { ListofMessages } from "../Pages/ListofMessages";
import { MessageScreen } from "../Pages/MessageScreen";

export  const AllRoutes =()=>{


return <>

<Routes>
<Route path="/" element={<Landing/>} />
<Route path="/listofcontact" element={<ListOfContact/>} />
<Route path="/listofmessage" element={<ListofMessages/>} />
<Route path="messagescreen/:id" element={<MessageScreen/>} />
<Route path="contactinfo/:id" element={<ContactInfo/>} />
<Route path="*" element={<Landing/>} />
</Routes>

</>

}