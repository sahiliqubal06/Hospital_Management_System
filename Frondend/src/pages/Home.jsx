import React from 'react'
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const home = () => {
  return (
    <>
    <Hero title={"Welcome to HospiCare! Your trusted healthcare provider."} imageUrl={"/hero.png"}/>
    <Biography/>
    <Departments/>
    <MessageForm/>
    
    </>
  )
}

export default home