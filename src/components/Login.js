import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {

  const [credentials, setCredentials] = useState({email: "", password: ""})

  const Navigate = useNavigate();
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
      // save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      props.showAlert("Logged in Successfully","success");
      Navigate("/");
    }
    else{
      props.showAlert("Invalid Details! Please try again","danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
   };

  return (
    <div className='mt-2'>
      <h2 className='my-5'>Login to CloudNote</h2>
    <form onSubmit={handleSubmit}>
  <div className="my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="Password"/>
  </div>
  <button type="submit" className="btn btn-warning">Submit</button>
</form>
    </div>
  )
}

export default Login