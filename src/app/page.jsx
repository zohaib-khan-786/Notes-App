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
    <div className={`${mode ? 'bg-slate-200' : 'bg-slate-900'} w-full min-h-[100dvh]`}>
      <Navbar handleToggle={handleToggle} />
      <NoteCont toggle={mode}/>
    </div>
  )
}
