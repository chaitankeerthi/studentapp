import React from 'react';
import { Navigate } from 'react-router-dom';
const Protect = ({Children}) => {
    const isLoggedin=true;
   
      if(!(isLoggedin))
      {
           return <Navigate to="/" />
      }
      else{
      
        return Children;
      }
};

export default Protect;
