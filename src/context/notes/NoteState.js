import { useState } from "react";
import noteContext from "./noteContext";

const NoteState= (props)=>{
   const notesIntial = [
    {
      "_id": "6391fe01d7e87c5293b8e394",
      "user": "6391fc13a0ca2c731d32b59d",
      "title": "New Note For cloudNote",
      "description": "new Note has been added",
      "tag": "personal",
      "date": "2022-12-08T15:08:49.689Z",
      "__v": 0
    },
    {
        "_id": "6391fe01d7e87c5293b8e394",
        "user": "6391fc13a0ca2c731d32b59d",
        "title": "New Note For cloudNote",
        "description": "new Note has been added",
        "tag": "personal",
        "date": "2022-12-08T15:08:49.689Z",
        "__v": 0
      },
      {
        "_id": "6391fe01d7e87c5293b8e394",
        "user": "6391fc13a0ca2c731d32b59d",
        "title": "New Note For cloudNote",
        "description": "new Note has been added",
        "tag": "personal",
        "date": "2022-12-08T15:08:49.689Z",
        "__v": 0
      },
      {
        "_id": "6391fe01d7e87c5293b8e394",
        "user": "6391fc13a0ca2c731d32b59d",
        "title": "New Note For cloudNote",
        "description": "new Note has been added",
        "tag": "personal",
        "date": "2022-12-08T15:08:49.689Z",
        "__v": 0
      }, {
        "_id": "6391fe01d7e87c5293b8e394",
        "user": "6391fc13a0ca2c731d32b59d",
        "title": "New Note For cloudNote",
        "description": "new Note has been added",
        "tag": "personal",
        "date": "2022-12-08T15:08:49.689Z",
        "__v": 0
      }
  ]
  const[notes, setNotes]= useState(notesIntial)
    return(
        // when you will wrap anything in this context all the children will come under this context automatically 
        <noteContext.Provider value={{notes, setNotes}}>
           {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;