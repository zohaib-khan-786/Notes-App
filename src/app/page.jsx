"use client"
import { useState } from "react";
import Navbar from "./Components/Navbar";
import NoteCont from "./Components/NoteCont";


export default function Home() {

  const [mode, setMode] = useState(false)

  const handleToggle = (toggle)=>{
      setMode(toggle)
  }

  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <NoteCont toggle={mode}/>
    </>
  )
}
