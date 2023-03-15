
import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import  Studentdata from './Data';

const Studentdetails = () => {
    const student=useParams();
    const navigate = useNavigate();
    return (
       <div className='studentinformation'>
       <h3>student details</h3>
    
     {
        Studentdata.filter((item)=>student.studentid==item.id).map((item)=>
        {
            return (<div className='studentdetails'>
                         <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.firstname}</p>
               <p>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.email}</p>
               <p>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.gender}</p>
               <p>Branch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.department}</p>
               <br></br>
               <button style={{padding:'3px'}}  onClick={()=>{navigate(-1)}}>Previous</button>
            </div>)
        })

            
      
       }
   
       
       </div>
    );
};

export default Studentdetails;

