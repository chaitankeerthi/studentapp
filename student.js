import React from 'react';
import { NavLink ,Outlet} from 'react-router-dom';
import  Studentdata  from './Data';
const Students = () => {
    return (
        <>
            <div className='students'>
            <div className='studentslist'>
                {
                    Studentdata.map((item)=>
                    {
                        return(<div key={item.id} className='studentnames' style={{padding:'5px 20px'}}>
                            <NavLink to={`/students/${item.id}`} className="navlink">{item.firstname}</NavLink>
                        </div>)
                    })
                }
            </div>
            <div className='studentdata'><Outlet/></div>
            </div>
        </>
    );
};

export default Students;
