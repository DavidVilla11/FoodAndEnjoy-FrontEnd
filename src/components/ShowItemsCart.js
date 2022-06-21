import { useState } from 'react'
import {Cart} from './Cart.js'

export const ShowItemsCart = ({cart, handleClick, total, handleOnSubmit}) => {
    console.log(cart)
    console.log(total)
    if(cart.length === 0){
        return (
            <div className='carrito'>
                <h2>No hay productos</h2>
            </div>
        )
    }


    return (
        <>
            <div className='carrito'>
                {cart.map((rest) => (
                    <Cart key={rest.comida_id} quantity={rest.quantity} comida={rest.nombreComida} precio={rest.precio}
                    handleOnClick={() => handleClick(rest)}>
                    </Cart>
                    ))
                }
            </div>
            <form className='total'>
                    <h3 className='pago'>Total a pagar: {parseFloat(total)} €</h3>
                    <button onClick={handleOnSubmit} className='card_btn'>Pedir</button>
            </form>
        </>
    )
}

