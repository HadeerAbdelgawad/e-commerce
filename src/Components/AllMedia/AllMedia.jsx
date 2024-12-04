import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'



function AllMedia() {

    const [Products, setProducts]= useState([])

    async function getProducts(mediaTypes, callback){
        let {data}= await axios.get(`https://fakestoreapi.com/products/${mediaTypes}`)
        callback(data)

        console.log(data)
    }

    useEffect(()=>{
        getProducts('',setProducts)
       

    },[])

    return<>
        <div>
        <div  className="products-grid"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                }}
>
                {Products.map((item,index)=><MediaItem key={index} item={item}/>)}
        </div>
            </div>
    </>
}

export default AllMedia
