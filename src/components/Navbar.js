import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token');
   navigate("/login");
  }

  let location = useLocation();
  return (
    
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{color:'white', textShadow:'5px 8px 8px black', letterSpacing:'2px',marginRight:'3rem'}}> Cloud Note</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* by getting location.pathname Activating hover effect  */}
            <Link className={`nav-link ${location.pathname=== "/" ?"active": "" }`} style={{color:'black',backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px'}} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== "/About" ?"active": "" }`} style={{color:'black',backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px'}} to="/About">About</Link>
          </li>
        </ul>
        
        {/* if localStorage.getItem is null then return logout else show the form  */}
        {!localStorage.getItem('token')?<form className='d-flex'>
          <Link className='btn btn-warning mx-1' to='/login' role="button">Login</Link>
          <Link className='btn btn-warning mx-1' to='/signup' role="button">Sign Up</Link>
        </form>: <button onClick={handleLogout} className="btn btn-warning">Logout</button>
        }
      </div>
    </div>
  </nav>

  )
}

export default Navbar
