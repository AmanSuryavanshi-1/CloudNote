import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {

  const Navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token');
   Navigate("/Login");
  }

  let location = useLocation();
  return (
    
    <nav className="navbar navbar-expand-lg " >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{color:'white', textShadow:'5px 8px 8px black', letterSpacing:'2px',marginRight:' 2rem',}}> <h3>Cloud Note</h3> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px'}}>
      <i className="fa-solid fa-bars" style={{backgroundColor:'#d1ac19', marginRight:'10px',marginLeft:'10px'}}></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* by getting location.pathname Activating hover effect  */}
            <Link className={`nav-link ${location.pathname=== "/" ?"active": "" }`} style={{color:'black',backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px', width:'8em'}} aria-current="page" to="/"> <i className="fa-solid fa-house" style={{backgroundColor:'#d1ac19', marginRight:'10px',marginLeft:'10px'}}></i>Home</Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== "/About" ?"active": "" }`} style={{color:'black',backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px', width:'8em'}} to="/About"><i className="fa-solid fa-address-book" style={{backgroundColor:'#d1ac19', marginRight:'10px',marginLeft:'10px'}}></i>About</Link>
          </li>
        </ul>
        
        {/* if localStorage.getItem is null then return logout else show the form  */}
        {!localStorage.getItem('token')?<form className='d-flex'>
          <Link className='btn btn-warning' to='/Login' role="button" style={{color:'black',backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px', width:'8.4em'}}>  <i className="fa-solid fa-right-to-bracket" style={{backgroundColor:'#d1ac19', marginRight:'10px',marginLeft:'8px'}}></i>Login</Link>
          <Link className='btn btn-warning' to='/Signup' role="button" style={{color:'black',backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px', width:'8.4em'}}>  <i className="fa-solid fa-user-plus" style={{backgroundColor:'#d1ac19', marginRight:'10px',marginLeft:'8px'}}></i> Sign Up</Link>
        </form>: <button onClick={handleLogout} className="btn btn-warning" style={{color:'black',backgroundColor:'#d1ac19', borderRadius:'5px',margin:'10px', width:'8.5em'}}>  <i className="fa-solid fa-right-from-bracket" style={{backgroundColor:'#d1ac19', marginRight:'10px',marginLeft:'10px'}}></i>Logout</button>
        }
      </div>
    </div>
  </nav>

  )
}

export default Navbar
