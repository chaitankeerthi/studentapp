import React from 'react';
import {NavLink,useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    const changeStyle=({isActive})=>
    {
        return({
            color:isActive?'white':'black'
        })
    }
    return (
        <>
         <div className='navbar'>
            <NavLink to="/dashboard" style={changeStyle} className="navitem">Dashboard</NavLink>
            <div className='navbar-left'>
            <NavLink to="/students" style={changeStyle} className="navitem">Students</NavLink>    
            <NavLink to="/courses" style={changeStyle} className="navitem">Courses</NavLink>                  
            <NavLink to="/grades" style={changeStyle} className="navitem">Grades</NavLink>
            <button onClick={()=>{navigate('/')}}>Login</button>
            </div>
        </div>
        </>
    );
};
export default Navbar