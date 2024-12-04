import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'

function Login({saveUserData}) {


    let navigate= useNavigate()
    const[error, setError]= useState('')
    const[loading, setLoading]= useState(false)
    const[errorList, setErrorList]= useState([])    
    const[user,setUser]= useState({
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


    async function sendLoginDataToApi(){
        try{
            let {data} = await axios.post(`https://wezaaa.runasp.net/api/account/login`, user)
            console.log(data)
            if(!data.errors){
                setLoading(false)
                localStorage.setItem('userToken', data.token)
                saveUserData()
                navigate('/home')
                
            }else{
                setError(data.errors)
                setLoading(false)
            }
        }
        catch(error){
            if (error.response) {
                setError(error.response.data.message || 'Registration failed.')

                console.log("Error Response:", error.response.data);
            } else {
                setError('Something went wrong. Please try again later.')
                console.error('Error:', error.message)
            }
        }
    }  
    
    function submitLoginData(e){
        e.preventDefault()
        sendLoginDataToApi()
        setLoading(true)
        let validation= validateLoginForm()
        console.log(validation)
    }


    function validateLoginForm(){
        let schema= Joi.object({
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phoneNumber:Joi.string().min(11).max(11),
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
            <form onSubmit={submitLoginData}>
                <h2 className='py-2'>Create an account</h2>
                <p className='py-2 text-dark'>Enter your details below</p>

                <input onChange={getUserData} type='email' placeholder='Email' className='my-input my-2 w-100 my-4' name='email' id='email'/>

                <input onChange={getUserData} type='tel' placeholder='Phone_number' className='my-input my-2 w-100 my-4' name='phoneNumber' id='phone'/>


                <input onChange={getUserData} type='password' placeholder='Password' className='my-input my-2 w-100 my-4' name='password' id='password'/>

                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                    <button className='px-4 btn btn-danger my-2 py-2'>
                        {loading === true?<i className='fas fa-spinner fs-spin'></i>:'Log in'}
                    </button>
                    </div>
                    <div>
                        <button className='btn text-danger p-0 m-0'>Forget Password?</button>
                    </div>
                    
                </div>
                
                {/* <button className='btn btn-danger w-100 my-2 p-2'></button> */}


            </form>
            

        </div>
    </div>
    </>
}

export default Login
