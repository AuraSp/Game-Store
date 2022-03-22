import React from 'react'
import './Cart.css'
import Data from '../../Data/Data.json';

const Cart = (props) => {

     function removeFromCart(removedProduct, index){
         let tempList = [...props.cart]
         tempList.splice(index, 1)
         props.setCart(tempList)
        }
    let totalPrice = 0;

    props.cart.forEach((product)=>{
        console.log(product)
        Data.forEach((dataProd) =>{
            if (product === dataProd.name){
                totalPrice += dataProd.price
                totalPrice = +totalPrice.toFixed(2)
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
                    product === dataProduct.name && <div>{dataProduct.price}$</div>
                ))}</div>
                
                <a href={() => false} onClick={(e)=>{removeFromCart(product, index)}} className="cartDelete">X</a></div>
            ))}
        <h2 className='cartTotalPrice'>Total price: {totalPrice}$</h2>

        </div>
    </div>
  )
}

export default Cart