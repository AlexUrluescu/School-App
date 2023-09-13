 import React from 'react'

 // Import Styles -------------------------
 import "../style/NavBar.css"

 // Import react router Link ---------------------
 import { Link } from 'react-router-dom'
 
 const NavBar = () => {
   return (
     <div className='navbar'>
      {/* <Link to="/">Home</Link> */}
      <Link className='login' to="/login"><h3>Login</h3></Link>
      {/* <Link to="/contiChat">contiChat</Link> */}
     </div>
   )
 }
 
 export default NavBar