import React from "react";
import Newses from "./Newses";
import { useNavigate } from 'react-router-dom';



const HomeScreen=({user})=>{
    const navigate=useNavigate()
    try {
           
        navigate("/news/getall/")
    } catch (err) {
        console.log(err)
    }

    <Newses/>
   
    return <div>{user?.email}</div>;
};

export default HomeScreen;