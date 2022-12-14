import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert]= useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

   let myStyle = {
    backgroundColor:'rgb(49, 50, 50)',
    borderColor:'white',
    color:'white',
}

 
  return (
    <>
    <div className="main"style={myStyle}>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container" >
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route exact path="/About" element={<About showAlert={showAlert} />}></Route>
              <Route exact path="/Login" element={<Login showAlert={showAlert} />}></Route>
              <Route exact path="/Signup" element={<Signup showAlert={showAlert} />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
      </div>
    </>
  );
  }
export default App;
