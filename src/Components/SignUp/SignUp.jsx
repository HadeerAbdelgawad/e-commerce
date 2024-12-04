import axios from 'axios'
import React, { useState } from 'react'
import Login from '../Login/Login'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'

function SignUp() {


    let navigate= useNavigate()
    const[error, setError]= useState('')
    const[loading, setLoading]= useState(false)
    const[errorList, setErrorList]= useState([])
    const[user,setUser]= useState({
        firstName:'',
        lastName:'',
        address:'',
        password:'',
        email:'',
        phoneNumber:''

    })


    function getUserData(eventInfo){
        let myUser={...user}
        myUser[eventInfo.target.name]= eventInfo.target.value
        setUser(myUser)
        console.log(eventInfo)
    }


    async function sendRegisterDataToApi(){
        try{
            let {data} = await axios.post(`https://wezaaa.runasp.net/api/account/register`, user)
            console.log(data)
            if(!data.errors){
                navigate('/login')
                setLoading(false)
            }else{
                setError(data.errors)
                setLoading(false)
            }
        }
        catch(error){
            setLoading(false)
            if (error.response) {
                setError(error.response.data.message || 'Registration failed.')

                console.log("Error Response:", error.response.data);
            } else {
                setError('Something went wrong. Please try again later.')
                console.error('Error:', error.message)
            }
        }
    }  
    
    function submitRegisterData(e){
        e.preventDefault()
        // sendRegisterDataToApi()
        setLoading(true)
        let validation= validateRegisterForm()
        console.log(validation)

        if(validation.error){
            setLoading(false)
            setErrorList(validation.error.details)
        }else{
            sendRegisterDataToApi()

        }
    }


    function validateRegisterForm(){
        let schema= Joi.object({
            firstName:Joi.string().min(3).max(50).required(),
            lastName:Joi.string().min(3).max(50).required(),
            address:Joi.string().min(3).max(100),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phoneNumber:Joi.string().min(11).max(11).required(),
            password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/).required()
        })
        return schema.validate(user, {abortEarly:false})
    }


    return <>

        {errorList.length>0 ?<div className="alert alert-danger">{errorList.map((error,index)=>(<p>{error.message}</p>))}</div>:''}


     <div className='w-100 h-700 flex-md-row flex-column d-flex' style={{gap:'120px'}}>
        <div className='side-img'>
            <img src='/Phone.jpeg' alt='phone_img' width={'800px'} height={'706px'}/>
        </div>

        

        <div className='side-form me-3' style={{marginTop:'70px'}}>
            <form onSubmit={submitRegisterData}>
                <h2 className='py-2'>Create an account</h2>
                <p className='py-2 text-dark'>Enter your details below</p>

                <input onChange={getUserData} type='text' placeholder='First_name' className='my-input my-2 w-100 my-4' name='firstName' id='fname'/>

                <input onChange={getUserData} type='text' placeholder='Last_name' className='my-input my-2 w-100 my-4' name='lastName' id='lname'/>

                <input onChange={getUserData} type='text' placeholder='Address' className='my-input my-2 w-100 my-4' name='address' id='address'/>

                <input onChange={getUserData} type='email' placeholder='Email' className='my-input my-2 w-100 my-4' name='email' id='email'/>

                <input onChange={getUserData} type='tel' placeholder='Phone Number' className='my-input my-2 w-100 my-4' name='phoneNumber' id='phone'/>


                <input onChange={getUserData} type='password' placeholder='Password' className='my-input my-2 w-100 my-4' name='password' id='password'/>

                <button className='btn btn-danger w-100 my-2 p-2'>
                    {loading == true?<i className='fas fa-spinner fs-spin'></i>:'Create Account'}
                </button>
                {/* <button className='btn btn-danger w-100 my-2 p-2'></button> */}

                <button className='btn btn-light border-dark w-100 my-2 p-2'>Sign up with Google</button>

            </form>
                <p className='text-muted w-100 text-center'>Already have account?<button className='border-0 px-2 bg-transparent'><Link to="/login" className='text-dark'><u>Log in</u></Link></button></p>
            

                
        
        </div>
    </div>


    </>


}

export default SignUp
