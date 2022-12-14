import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext"; //Going 2 step back in src then going in context then in notes then in noteContext

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context; //declaring to use context api

  const [note, setNote] = useState({
    title: " ",
    description: " ",
    tag: " ",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
  };
  const onChange = (e) => {
    // (...) using spreadoperator
    // jo value note meh hai woh rhe pr jo value age note mh likhi jari hai inko add ya overide krdena
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
    <h2>Add a Note</h2>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
        </div>
       
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
</div>
  );
};

export default AddNote;
