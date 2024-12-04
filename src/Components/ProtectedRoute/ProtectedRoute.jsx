import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function ProtectedRoute(props) {
    console.log(props)
    let navigate = useNavigate()
    if(!localStorage.getItem('userToken')){
        // navigate('/login')
        return <Navigate to={'/login'}/>

    }else{
        return props.children;
    }
   
}

export default ProtectedRoute
