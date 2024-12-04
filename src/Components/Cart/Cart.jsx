import React, { useContext } from 'react'
import { cartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

function Cart() {

    const { cartItem, setCartItem } = useContext(cartContext);

    function handleRemoveItem(itemId){
        const updatedCart = cartItem.filter((item) => item.id !== itemId); 
        setCartItem(updatedCart); 
    }
    const totalPrice= cartItem.reduce(
        (total,item)=>total + item.price * item.quantity,
        0
    )
    return <>
        <div className='container'>
            <div className='cart-header py-3 px-4 my-2 d-flex justify-content-evenly align-items-center' style={{boxShadow:'0.5px 0.5px 60px 0.2px rgba(47, 46, 48, 0.2)'}}>
                <div><span style={{flex:2}}>Product</span></div>
                <div><span style={{flex:1}}>Price</span></div>
                <div><span style={{flex:1}}>Quantity</span></div>
                <div><span style={{flex:1}}>Subtotal</span></div>

            </div>

            {cartItem.map((item)=>(
                <div key={item.id} className='position-relative cart-row px-1 py-3 ps-4 my-2 d-flex justify-content-evenly align-items-center ' style={{boxShadow:'0.5px 0.5px 60px 0.2px rgba(47, 46, 48, 0.2)'}}>
                        <div style={{flex:2}}><img src={item.image} alt={item.title} width={'48px'} height={'42px'}/>
                            {item.title}
                        </div>
                        <div style={{flex:1}}>${item.price.toFixed(2)}</div>
                        <div style={{flex:1}}>{item.quantity}</div>
                        <div style={{flex:1}}>${item.price * item.quantity}</div>

                        <div className='position-absolute top-0 start-0 px-1 rounded-circle text-light bg-danger' 
                        onClick={() => handleRemoveItem(item.id)}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    
                    
                </div>

            ))}
            

            <div className='d-flex justify-content-between'>
                <div>
                    <Link to='/home'><button style={{border:'1px solid rgba(0, 0, 0, 0.5)', width:'218px', height:'56px', borderRadius:'4px', backgroundColor:'transparent'}}>Return To Shop</button></Link>
                </div>
                <div>
                    <button style={{border:'1px solid rgba(0, 0, 0, 0.5)', width:'218px', height:'56px', borderRadius:'4px', backgroundColor:'transparent'}}>Update Cart</button>
                </div>
            </div>

        </div>

        <div className='container my-3 d-flex flex-row justify-content-between' >

            <div>
                <div className='d-flex gap-3'>
                    <input className='px-2 py-2' type="text" placeholder='Coupon Code' />
                    <button className='px-3 py-2' style={{border:'none', backgroundColor:'rgba(219, 68, 68, 1)', color:'white', borderRadius:'4px'}}>Apply Coupon</button>
                </div>
            </div>
            <div className='px-2 py-4' style={{border:'1px solid black', borderRadius:'4px', width:'400px'}}>
                <h2 style={{fontFamily:'"Poppins", serif', fontWeight:'500', fontSize:'20px', }}>Cart Total</h2>
            
                <div className='d-flex flex-row justify-content-between align-item-center my-2'>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className='w-100 bg-black' style={{height:'0.5px'}}></div>
                <div className='d-flex flex-row justify-content-between my-2'>
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className='w-100 bg-black' style={{height:'0.5px'}}></div>
                <div className='d-flex flex-row justify-content-between my-2'>
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <Link to='/checkout'>
                    <button className='px-3 py-2' style={{border:'none', backgroundColor:'rgba(219, 68, 68, 1)', color:'white', borderRadius:'4px'}}>Procees to checkout</button>
                    </Link>
                </div>
            </div>
            
        </div>
    </>
}

export default Cart
