'use client'

import styled, { ThemeProvider } from 'styled-components';
import { MdOutlineDeleteForever } from "react-icons/md";


const Note = ({ text , date , id , handleDelete , toggle }) => {

    const handleOnChange = () => {
        console.log('changed');
    }

  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
    <NoteComp className={`${toggle ? "bg-slate-400" : "bg-slate-800"} `}>
      <textarea cols="35" rows="10" value={text} onChange={handleOnChange} ></textarea>
      <div className="note-footer">
        <small>{date}</small>
        <MdOutlineDeleteForever size={"25px"} onClick={() => handleDelete(id)} />
      </div>
    </NoteComp>
  </ThemeProvider>
  )
}

const darkTheme = {
    color: 'black',
  };
  
  const lightTheme = {
    color: 'white',
  };

  const toggleTheme = (currentTheme) => {
    return currentTheme === lightTheme ? darkTheme : lightTheme;
  };

const NoteComp = styled.div`
    min-height: 200px;
    border-radius: 20px;
    padding: 20px;  
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    box-shadow: 0 0 10px -5px white;
    color: ${props => props.theme.color};
    white-space: pre-wrap;
    .note-footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    textarea{
        background: transparent;
        resize: none;
        outline: none;
        color: inherit; 
        font-weight: 600;
    }
`;
export default Note 

