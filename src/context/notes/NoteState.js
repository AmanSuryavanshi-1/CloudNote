import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesIntial = []
  const [notes, setNotes] = useState(notesIntial);

//--- Get all note

const getNotes = async() => {
  // TODO API call
   //API call
   const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjM2MDRjYzA3ZmU3NGQ4N2ViOTVlIn0sImlhdCI6MTY2ODQyOTM5NH0.mVPiY7c0-c4ZMG0b5mGLGhh5HdoqcviyU3ya0VRePz0",
    },
  });
  const json = await response.json()
  setNotes(json)
}





  //--- Add a note

  const addNote = async(title, description, tag) => {
    // TODO API call
     //API call
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjM2MDRjYzA3ZmU3NGQ4N2ViOTVlIn0sImlhdCI6MTY2ODQyOTM5NH0.mVPiY7c0-c4ZMG0b5mGLGhh5HdoqcviyU3ya0VRePz0",
      },
      body: JSON.stringify({title, description, tag}),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };
  //--- Delete a note

  const deleteNote = async (id) => {
    // TODO API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjM2MDRjYzA3ZmU3NGQ4N2ViOTVlIn0sImlhdCI6MTY2ODQyOTM5NH0.mVPiY7c0-c4ZMG0b5mGLGhh5HdoqcviyU3ya0VRePz0",
      },});
    const json = response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //--- Edit a note

  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjM2MDRjYzA3ZmU3NGQ4N2ViOTVlIn0sImlhdCI6MTY2ODQyOTM5NH0.mVPiY7c0-c4ZMG0b5mGLGhh5HdoqcviyU3ya0VRePz0",
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();
   

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in client side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    // when you will wrap anything in this context all the children will come under this context automatically
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
