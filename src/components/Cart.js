import {useState} from 'react'
import './Cart.css';

export const Cart = ({quantity, comida, precio, handleOnClick}) => {
    return (
        <>
        <section className='display'>
            <article className='producto'>
                <h4>{comida}</h4>
                <h4>{quantity}</h4>
                <h4>{precio * quantity}€</h4>
                <a onClick={handleOnClick}>🗑</a>
            </article>
        </section>
        </>
    )
}