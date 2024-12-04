import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet , useNavigate} from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout({userData ,  setUserData}) {
    let navigate= useNavigate()

    function logOut(){
        localStorage.removeItem('userToken')
        setUserData(null)
        navigate('/login')
    }
    return <>
        <Navbar logOut={logOut} userData={userData}/>
            <Outlet></Outlet>
        <Footer/>
    </>
}

export default Layout
