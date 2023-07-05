import React from "react";
import Newses from "./Newses";

const HomeScreen=({user})=>{
  return <div>{user?.email}
  <Newses/></div>;
};

export default HomeScreen;