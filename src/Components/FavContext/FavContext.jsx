import React, { createContext, useEffect, useState } from 'react'

export let favContext= createContext()


function FavContextProvider(props) {

    const[favItem,setFavItem]= useState(()=>{
        const savedFav= localStorage.getItem('favItems')
        return savedFav ? JSON.parse(savedFav) : []
    })

    useEffect(()=>{
        localStorage.setItem('favItems', JSON.stringify(favItem))
    },[favItem])

    function removeFromFav(itemId) {
        setFavItem(prev => prev.filter(fav => fav.id !== itemId));
    }

    function addToFav(item){
        if(!item) return;

        const isAlreadyFav = favItem.some(fav => fav.id === item.id);

        if (isAlreadyFav) {
            setFavItem(prev => prev.filter(fav => fav.id !== item.id));
          } else {
            setFavItem(prev => [...prev, item]);
          }
    }
    return <favContext.Provider value={{favItem, addToFav, setFavItem, removeFromFav}}>
        {props.children}
    </favContext.Provider>
}

export default FavContextProvider
