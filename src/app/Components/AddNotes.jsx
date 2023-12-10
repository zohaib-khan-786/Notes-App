import styled, { ThemeProvider } from "styled-components"
import { useState } from "react"

const AddNotes = ({ handleAdd , toggle }) => {

    const [addText, setAddText] = useState('')
    const handleOnClick = () => {
        if (addText.trim().length > 0){ 
        handleAdd(addText)
        setAddText('')
    }
    }
    return (
        <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
        <Add className={`${toggle ? "bg-slate-400" : "bg-slate-800"} `}>
            <textarea cols="35" rows="10" value={addText} onChange={(e) => setAddText(e.target.value)}></textarea>
            <div className="addNote-footer">
                <button type='button' onClick={handleOnClick}>Add Note</button>
            </div>
        </Add>
        </ThemeProvider>
    )
}

const darkTheme = {
    color: 'black',
    border: '1px solid dark'
  };
  
  const lightTheme = {
    color: 'white',
    border: '1px solid white'
  };
  

  const toggleTheme = (currentTheme) => {
    return currentTheme === lightTheme ? darkTheme : lightTheme;
  };
  

const Add = styled.div`
        min-height: 200px;
        border-radius: 20px;
        padding: 20px;  
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: ${props => props.theme.border};
        box-shadow: 0 0 10px -5px white;
        color: ${props => props.theme.color};
        position: relative;
        overflow: hidden;
    .addNote-footer{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 6px;
        width: 100%;
        background-color: #3cd83c;
    }
    .addNote-footer button{
        text-align: center;
        font-weight: 800;
        width: 100%;
        height: 100%;
        outline: none;
    }textarea{
            background: transparent;
            resize: none;
            outline: none;
            color: inherit;
            font-weight: 600;
        }
    
    `
export default AddNotes