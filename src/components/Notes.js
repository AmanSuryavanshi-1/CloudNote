import React, {useContext} from 'react'
import noteContext  from "../context/notes/noteContext" //Going 2 step back in src then going in context then in notes then in noteContext
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const{notes, setNotes} = context; //declaring to use context api  
  return (
    <div className="row my-3">
    <h2> Your Notes</h2>
    {notes.map((note)=>{
       return <Noteitem note = {note}/>;   //Getting notes title from NoteState Using context 
    })
    }
  </div>
  )
}

export default Notes