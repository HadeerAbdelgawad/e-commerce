import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { favContext } from '../FavContext/FavContext'

function ProductDetails() {
    let {favItem, addToFav}= useContext(favContext)
    let {id}= useParams()
    const [itemDetails, setItemDetails]= useState(null)


    async function getItemDetails(mediaId){
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${mediaId}`);
            setItemDetails(data);
          } catch (error) {
            console.error("Failed to fetch item details:", error);
          }
    }

    useEffect(()=>{
        getItemDetails(id)
    },[id])


    if (!itemDetails) return <div>Loading...</div>;


    const isFavorite = itemDetails && favItem.some((fav) => fav.id === itemDetails.id);
    return <>
    <div className='container d-flex justify-content-between text-align-center gap-5'>
        <div className='detail-img p-2' style={{backgroundColor:'rgba(245, 245, 245, 1)'}}>
            <img src={itemDetails.image} alt={itemDetails.title} width={'500px'} /> 
        </div>
        <div className='detail-info'>
            <h2>{itemDetails.title}</h2>
                    <div className="rating">
                        {[...Array(Math.round(itemDetails.rating.rate))].map((_, i) => (
                        <i key={i} style={{color: '#FFAD33'}}  class="fa-solid fa-star"></i>
                        ))}
                        <span className="review-count">({itemDetails.rating.rate})</span>  
                    </div>

          <p style={{color:'#DB4444', fontWeight:'500'}}>${itemDetails.price}</p>
          <p style={{fontFamily:'"Poppins", serif',fontWeight:'400', fontSize:'14px'}}>{itemDetails.description}</p>
          <hr/>

          <div className='d-flex flex-row justify-content-evenly'>
            <div>
                {/* Quantity */}
            </div>
            <div>
                <button className='btn text-light' style={{backgroundColor:'rgba(219, 68, 68, 1)', width:'165px', height:'44px', borderRadius:'4px', border:'none'}}>Buy Now</button>
            </div>
            <div className='fav' style={{width:'40px', border:'1px solid black', borderRadius:'4px', textAlign:'center',margin:'auto', fontSize:'25px'}}>
                <i onClick={()=>itemDetails && addToFav(itemDetails)}
                className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                style={{ color: isFavorite ? 'red' : 'black' }}>

                </i>
            </div>
          </div>
        </div>
    </div>

    </>
}

export default ProductDetails
