import React,{useEffect, useState} from 'react'
import Valid from './Valid';
import '../App.css'
const SignUpForm = () => {

    const [isSubmit,setisSubmit]=useState(false);


    const[values,setValues]=useState({
        fullname:"",
        email:"",
        password:"",
    })
    
    const[errors,setErrors]=useState({})




    const handleFormSubmit=(event)=>{
    event.preventDefault();
   setErrors(Valid(values))
   setisSubmit(true)
   };



const handleChange=(event)=>{
    setValues({...values,[event.target.name]:event.target.value})
}

useEffect(()=>{
    if(Object.keys(errors).length===0 && isSubmit ){
   console.log(values)
    }
},[errors])


  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h1 className="title">Validation</h1>
            </div>
            <form>
                
                <div className='name'>
                    <label>Name:</label>
                    <input type="text" 
                    name="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    
                    />
                   {errors.fullname && <p className="error">{errors.fullname}</p>} 
                </div>
                
                <div className='email'>
                <label>Email:</label>
                <input 
                type="email"
                 name="email"
                value={values.email}
                onChange={handleChange}
                />

                {/* is used to conditionally render an error message associated with the password input field */}
                 {errors.email && <p className="error">{errors.email}</p>}
                </div>

<div className='password'>
    <label>password:</label>
    <input type="password" 
    name="password" 
    value={values.password}
    onChange={handleChange}
    />
    
    {errors.password && <p className="error">{errors.password}</p>}
</div>

<div>
    <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
</div>

            </form>

            {Object.keys(errors).length===0 && isSubmit && (<div className='success'>Signed up Successfully</div>)}  
        </div>
      
    </div>
  )
}

export default SignUpForm

