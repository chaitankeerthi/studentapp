
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './App.css'
const Login = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [msg,setMsg]=useState(false);
    const navigate=useNavigate();
    const onSubmit=(formdata)=>
    {
        console.log(formdata);
        const username=localStorage.getItem("username")
        const password=localStorage.getItem("password")
        if((username==formdata.username  && password==formdata.password))
        {
        
           navigate('/dashboard');
        }
        else{
            setMsg(true);
        }
    }
    return (
       <div className='login'>
        <form onSubmit={handleSubmit(onSubmit)} action={()=>navigate('/dashboard')} >
        Username&nbsp;&nbsp;:&nbsp;&nbsp;<input type="text" placeholder='username' {...register("username",
          {
            required:
            {
                value:true,
                message:'Invalid Username'
            }

          })}/>
          <br></br>
          <br></br>
          <p style={{color:'red'}}>{errors.username?.message}</p>
          <br></br>
          Password&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<input type="password" placeholder='Password' {...register("password",{
            required:
            {
                value:true,
                message:'Incorrect Password'
            }
          })}/>
          <br></br>
          <br></br>
           <p style={{color:'red'}}>{errors.password?.message}</p>
       
          <br></br>
               <input  type="submit" value="LOGIN" className='button' />
         
<br></br>
<br></br>
      {   msg?<p style={{color:'red'}}>Incorrect credentials</p>:<p></p>}
        </form>
       </div>
    );
};

export default Login;