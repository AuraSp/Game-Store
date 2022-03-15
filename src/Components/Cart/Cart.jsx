import React, { useState, useEffect } from 'react'
import './Cart.css'
import Data from '../../Data/Data.json';

const Cart = (props) => {

     function removeFromCart(removedProduct, index){
         let tempList = [...props.cart]
         tempList.splice(index, 1)
         props.setCart(tempList)
        }
    let totalPrice = 0;

    props.cart.map((product)=>{
        console.log(product)
        Data.map((dataProd) =>{
            if (product == dataProd.name){
                totalPrice += dataProd.price
            }
            console.log(totalPrice)
        })
    })
  return (
    <div className='cartPage'>
        <div className='productsAndPrices'>
            {props.cart.map((product, index)=>(
                <div className='cartProduct'>
                <div className='cartProductName'>{product},  Price: {Data.map((dataProduct) =>(
                    product == dataProduct.name && <div>{dataProduct.price}$</div>
                ))}<a href="#" onClick={(e)=>{removeFromCart(product, index)}} className="cartDelete">X</a></div>
                </div>
            ))}
        <div className='cartTotalPrice'>Total price: {totalPrice}$</div>

        </div>
    </div>
  )
}

export default Cart