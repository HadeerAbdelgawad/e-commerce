import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../CartContext/CartContext'

function Navbar({userData, logOut}) {

  const { cartItem, setCartItem } = useContext(cartContext);
    const[underlined, setundelined]= useState(null)
    const [isdropDownOpen, setIsDropDownOpen]= useState(false)

    const textUnderlined=(index)=>{
        setundelined(index)
    }

    const togglePopover=()=>{
      setIsDropDownOpen(!isdropDownOpen)
    }

    const navItems= [
        {name:'Home', path:'/home'},
        {name:'About', path:'/about'},
        {name:'Contact', path:'/contact'},
        {name:'Sign Up', path:'/signup'},

    ];
    

    return <>
    <nav className="p-4 flex-md-row flex-column d-flex justify-content-between" style={{borderBottom:'1px solid gray', marginBottom:'55px'}}>
                <div className='left-logo flex-md-row d-flex align-items-center'>
                    <h2 className='logo ps-3' >Exclusive</h2>
                </div>
                

                <div className='pt-3 center-nav'>
                <ul className="list-unstyled flex-md-row flex-column d-flex m-0 align-items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="px-2"
              onClick={() => textUnderlined(index)} 
              style={{ textDecoration: underlined === index ? 'underline' : 'none' }} 
            >
              <Link to={item.name === 'Sign Up' ? '/' : item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
                </div>

                <div className='pt-2 right-nav flex-md-row flex-column d-flex'>
                    <form className='right-nav flex-md-row flex-column d-flex position-relative'>
                    <div className="pe-5 input-group h-50 mb-3">
                        <input type="text" className="px-3 form-control border-0 bg-light" placeholder="What are you looking for?" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-text border-0" id="basic-addon2"><i className=' fas fa-search'></i></span>
                        
                        <Link to='/wishlist' style={{color:'black'}}>
                          <span><i className="pt-2 icon-size px-2 far fa-heart"></i></span>
                        </Link>


                      {userData? 
                      <div className="position-relative">
                        <Link to='/cart' style={{color:'black'}}>
                          <span>
                              <i className="pt-2 icon-size pe-3 fa fa-cart-shopping"></i>
                          </span>
                        </Link>
                          
                          <span className="badge me-2 rounded-circle position-absolute" style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#DB4444',
                            top: '-5px',  
                            right: '-5px',  
                            textAlign: 'center',
                            fontSize: '12px',
                            color: 'white'
                          }}>
                            {cartItem.length}
                          </span>
                        </div>: <span>
                            <i className="pt-2 icon-size pe-3 fa fa-cart-shopping"></i>
                          </span>}
                        

                      
              {userData ? <span  className="popover position-relative border-0">
                <a href="#" onClick={togglePopover} style={{ cursor: 'pointer' }}>
                  <i
                    style={{ color: 'white', fontSize: '22px', lineHeight: '1.29' }}
                    className="pt-1 px-2 pb-1 bg-danger rounded-circle fa-regular fa-user"
                  ></i>
                </a>
                {isdropDownOpen && (
                  <div className="popover-content position-absolute shadow p-2" style={{backgroundColor:'rgba(0, 0, 0, 0.5)', backdropFilter:'blur(10px)' ,top: '100%',
                    right: '0',
                    zIndex: '1000', width:'180px'}}>

                    <Link style={{textDecoration:'none' , color:'white', display:'block'}} to="/profile" className="popover-item py-1">
                      <i className="fa-regular fa-user"></i> Manage My Account
                    </Link>
                    <Link style={{textDecoration:'none' , color:'white', display:'block'}} to="/orders" className="popover-item py-1">
                    <i className="fa-solid fa-bag-shopping"></i> My Order
                    </Link>
                    <Link style={{textDecoration:'none' , color:'white', display:'block'}} to="/cancellations" className="popover-item py-1">
                      <i className="fa-regular fa-times-circle"></i> My Cancellations
                    </Link>
                    <Link style={{textDecoration:'none' , color:'white', display:'block'}} to="/reviews" className="popover-item py-1">
                      <i className="fa-regular fa-star"></i> My Reviews
                    </Link>
                    <li onClick={logOut} style={{textDecoration:'none' , color:'white', display:'block'}} to="/logout" className="popover-item py-1">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
                    </li>
                  </div>
                )}
              </span>:''}
                        

                        
                    </div>
                    </form>
                </div>
   
            </nav>
            </>
    
}

export default Navbar;
