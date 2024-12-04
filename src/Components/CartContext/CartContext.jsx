import React, { createContext, useEffect, useState } from 'react'

export let cartContext= createContext()

function CartContextProvider(props) {
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem('cartProduct');
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(()=>{
        localStorage.setItem('cartProduct', JSON.stringify(cartItem))
    }, [cartItem])

    function addToCart(item){
        setCartItem((prevItems)=>{
            const existingItem = prevItems.find((cartItem)=> cartItem.id === item.id)
        if(existingItem){
            return prevItems.map((cartItem)=>
                cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
        }
        else{
            return [...prevItems, { ...item, quantity: 1 }];
        }
        })

    }
    return <cartContext.Provider value={{cartItem, addToCart , setCartItem}}>
        {props.children}
            </cartContext.Provider>
    
}

export default CartContextProvider
