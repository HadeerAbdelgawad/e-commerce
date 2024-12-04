import React , {useContext} from 'react'
import { cartContext } from '../CartContext/CartContext'
import { favContext } from '../FavContext/FavContext'
import { Link } from 'react-router-dom'


function BestProduct({item}) {
  let {addToCart}= useContext(cartContext)
  let {favItem, addToFav}= useContext(favContext)

  const isFavorite = item && favItem.some((fav) => fav.id === item.id);


  return <>
    <div className='product_container col-md-3 d-flex justify-content-space-between align-items-center'>
        <div className="product position-relative">
          <div className='mb-3' style={{backgroundColor: '#F5F5F5'}}>
            <img src={item.image} className='w-100 p-2 ' width={'270px'}  alt={item.title}/>
          </div>

          <div className='overlay'>
              <button className='btn btn-dark text-light position-absolute w-100 d-none' style={{color:'black', top:'0'}}   onClick={()=>addToCart(item)}>Add To Cart</button>
          </div>
          
          <h4 style={{ fontSize: '1rem' }}>{item.title}</h4>
          <div className='position-absolute top-0 start-0 px-3 m-2' style={{backgroundColor:'#DB4444', borderRadius:'3px', color:'white'}}>
            {item.rating.count}
          </div>
            <p style={{color:'#DB4444', fontWeight:'500'}}>${item.price}</p>

          <div className="rating">
            {[...Array(Math.round(item.rating.rate))].map((_, i) => (
              <i key={i} style={{color: '#FFAD33'}}  class="fa-solid fa-star"></i>
            ))}
            <span className="review-count">({item.rating.rate})</span>
            <div className='position-absolute top-0 end-0 px-3 flex-column'>

              <p className='ic rounded-circle p-3 m-3' style={{backgroundColor:'#cacaca'}}>
                <i onClick={()=>item && addToFav(item)}
                className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                style={{ color: isFavorite ? 'red' : 'black' }}>
                </i></p>
                
              <Link to={`/productdetails/${item.id}/${item.category}`} className='text-dark'><p className='ic rounded-circle p-3 m-3' style={{backgroundColor:'#cacaca'}}><i className="fa-regular fa-eye"></i></p></Link>
              
            </div>

            
            
          </div>


        </div>

    </div>

  </>
}

export default BestProduct
