'use client'
import styled from "styled-components"
import Note from "./Note"

import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import AddNotes from "./AddNotes"
const NoteCont = ({toggle}) => {

    const initialNote = [
        {
            id : nanoid(),
            text : "Welcome to our Website I hope you will enjoy",
            date : '12/12/12'
        }
    ]

   
  const [note, setNote] = useState(() => {
    if (typeof window !== 'undefined') {
      const recoverData = JSON.parse(localStorage.getItem('notes-data'))
      return recoverData || initialNote
    }
    return initialNote
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const recoverData = JSON.parse(localStorage.getItem('notes-data'))
      if (recoverData) {
        setNote(recoverData)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notes-data', JSON.stringify(note))
    }
  }, [note])

    const deleteNote = (id)=>{
        const newNotes = note.filter(elem => elem.id !== id)
        setNote(newNotes);
    }

    const handleAdd = (text) => {
        const date = new Date();
        const newNote = {
            id : nanoid(),
            text : text,
            date : date.toLocaleDateString()
        }
        const newNotes = [...note , newNote]
        setNote(newNotes)
    }

  return (
    <>
        <NotesCont >
            {
                note.map(note => <Note toggle={toggle} key={note.id} id={note.id} text={note.text} date={note.date} handleDelete={deleteNote} />)
            }
            <AddNotes toggle={toggle} handleAdd={handleAdd}/>
        </NotesCont>
    </>
  )
}

export default NoteCont

const NotesCont = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill , minmax(310px , 1fr));
    padding: 20px 0;
`