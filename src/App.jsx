import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Profile from './Components/Profile/Profile';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import AllMedia from './Components/AllMedia/AllMedia';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist'
import CartContextProvider from './Components/CartContext/CartContext';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import FavContextProvider from './Components/FavContext/FavContext';
import CheckOut from './Components/CheckOut/CheckOut';


function App() {

  const[userData,setUserData]=useState(null)

  useEffect(()=>{
    if(localStorage.getItem('userToken')!==null)
      saveUserData()
  },[])

  function saveUserData(){
    let encodedToken= localStorage.getItem('userToken')
    let decodedToken= jwtDecode(encodedToken)
    console.log(decodedToken)
    setUserData(decodedToken)
  }
  

  let routers=createBrowserRouter([
    {path:'/', element:<Layout setUserData={setUserData} userData={userData}/>, children:[
      {path:'home', element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute> },
      {path:'about', element:<ProtectedRoute userData={userData}><About/></ProtectedRoute>},
      {path:'contact', element:<ProtectedRoute userData={userData}><Contact/></ProtectedRoute>},
      {path:'wishlist', element:<ProtectedRoute userData={userData}><Wishlist/></ProtectedRoute>},
      {path:'cart', element:<ProtectedRoute userData={userData}><Cart/></ProtectedRoute>},
      {path:'profile', element:<ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute>},
      {path:'allmedia', element:<ProtectedRoute userData={userData}><AllMedia userData={userData}/></ProtectedRoute>},
      {path:'productdetails/:id/:media_type', element:<ProtectedRoute userData={userData}><ProductDetails userData={userData}/></ProtectedRoute>},
      {path:'checkout', element:<ProtectedRoute userData={userData}><CheckOut userData={userData}/></ProtectedRoute>},
      {path:'login', element:<Login saveUserData={saveUserData}/>},
      {index:true, element:<SignUp/>}
    ]}
  ])
  return <CartContextProvider>
            <FavContextProvider>
                <RouterProvider router={routers}/>  
            </FavContextProvider>
          </CartContextProvider>
}

export default App;
