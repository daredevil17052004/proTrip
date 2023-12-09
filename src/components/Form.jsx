import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'

const Form = () => {
    const initialValues = {first:'',last:'', email:'', number:''}
    const [formValues,setFormValues] = useState(initialValues);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) =>{
       const {name,value} = e.target
        setFormValues({...formValues,[name]:value});
        console.log(formValues)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true);
    }


    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    },[formErrors])


    const validate = (values) =>{
        const errors = {}
        const regex =/^\S+@\S+\.\S+$/;
        if(!values.first){
            errors.first = "Firstname is required"
        }
        if(!values.last){
            errors.last = "Lastname is required"
        }
        if(!values.email){
            errors.email = "Email is required"
        } else if (!regex.test(values.email)){
            errors.email = 'This is not an valid email'
        }
        if(!values.number){
            errors.number = "Number is required"
        }
        return errors
    }

  return (
    <div className='container'>

        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='ui message success'>Signed in successfully</div>) :null }
        
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <label >FirstName</label><br />
                    <input type="text" name='first' placeholder='FirstName' value={formValues.first} onChange={handleChange} />
                </div>
                <p>{formErrors.first}</p>
                <div className='field'>
                    <label >LastName</label><br />
                    <input type="text" name='last' placeholder='LastName' value={formValues.last} onChange={handleChange} />
                </div>
                <p>{formErrors.last}</p>
                <div className='field'>
                    <label>Email</label><br />
                    <input type="email" name='email'  placeholder='Email' value={formValues.email}
                    onChange={handleChange}/>
                </div>
                <p>{formErrors.email}</p>
                <div className='field'>
                    <label>Contact no.</label><br />
                    <input type="number" name='number' placeholder='XXXXXXXXXX' value={formValues.number} 
                    onChange={handleChange}/>
                </div>
                <p>{formErrors.number}</p>
                <button className='bb'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form