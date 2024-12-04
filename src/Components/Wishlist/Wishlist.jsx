import React, { useEffect, useState, useContext } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import axios from 'axios'
import BestProduct from '../BestProducts/BestProducts'
import {favContext} from '../FavContext/FavContext';
import { cartContext } from '../CartContext/CartContext'



function Wishlist() {
    let {addToCart}= useContext(cartContext)
    let {favItem, removeFromFav}= useContext(favContext)
    const [BestProducts, setBestProducts]= useState([])

    async function getlimitedProducts(mediaTypes,callback) {
        let{data}= await axios.get(`https://fakestoreapi.com/products?limit=4`)
        callback(data)
        console.log(data)
        
    }

useEffect(()=>{
    getlimitedProducts('',setBestProducts)
    

},[])



    return <>
        <div className='container'>

            <div className=' d-flex align-items-center justify-content-between'>
                <div className='side-title'>
                    <h2 className='pt-5' style={{ fontWeight:'400', fontSize:'20px', fontFamily:'"Poppins", serif'}}>Wishlist({favItem.length})</h2>
            
                </div>
                <div className='d-flex justify-content-evenly align-items-center'>
                        <button className='btn btn-light' 
                        style={{ width:'223px', height:'56px', borderRadius:'4px', border:'1px solid rgba(0, 0, 0, 0.5)', fontFamily:'"Poppins", serif', fontWeight:'500', fontSize:'16px'}}>
                            Move All To Bag
                        </button>

                </div>

            </div>


            <div className='container product_container py-4 d-flex justify-content-evenly align-items-center flex-wrap'>
                {favItem.length > 0 ? (
                    favItem.map((item, index) => (
                        <div key={index} className='product card py-2' style={{ width: '18rem' }}>
                            <div className='position-relative'>
                                <img src={item.image} className='px-2 card-img-top' alt={item.title} />
                            </div>
                            <div className='overlay'>
                                <button className='btn btn-dark text-light position-absolute w-100' style={{color:'black', bottom:'0'}}   onClick={()=>addToCart(item)}>Add To Cart</button>
                            </div>
                            
                            <div className='card-body'>
                                <h5 className='card-title'>{item.title}</h5>
                                <p className='card-text'>${item.price}</p>
                                <div className='position-absolute p-2 top-0 end-0'>
                                    <button
                                        className='btn btn-light rounded-circle'
                                        style={{ fontSize: '14px' }}
                                        onClick={() => removeFromFav(item.id)}>
                                        <i className=" fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    ))
                ) : ''}
            </div>
            
        </div>


            

            <div className='container d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center justify-centent-center '>
                    <div className='box'></div>
                
                    <div className='side-title'>
                        <h2 className='px-2 pt-2' style={{ fontWeight:'400', fontSize:'20px', fontFamily:'"Poppins", serif'}}> Just For You</h2>
                    </div>
                </div>
                <div>
                     <button className='btn' style={{backgroundColor:'#DB4444', color:'white', width:'159px', height:'56px', fontSize:'16px'}}>View All</button>
                </div>

            </div>

            <div className='container py-2 d-flex align-items-center justify-centent-center'>
            {BestProducts.map((item,index)=><BestProduct key={index} item={item}/>)}
            </div>
    </>
}

export default Wishlist
