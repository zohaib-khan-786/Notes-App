'use client'
import styled from "styled-components"
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({handleToggle}) => {

    const [toggle, setToggle] = useState(true)
    const toggleMode = ()=>{
        handleToggle(toggle)
        setToggle(!toggle)
    }
  return (
    <>
        <NavigationBar className={` ${toggle ? "bg-slate-900" : "bg-slate-200" } shadow-lg border-b-2`}>
            <h1 className={`text-3xl ${toggle ? "text-white" : "text-black" } font-black`}>NOTE'S-APP</h1>
            {
                toggle ? <GoSun size={'2rem'} color="white" onClick={toggleMode} /> : <FaMoon size={'2rem'} onClick={toggleMode} />
            }
            
        </NavigationBar>
    </>
  )
}

export default Navbar   


const NavigationBar = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
