import { useState, useEffect } from 'react';
import {Card} from  '../components/Card.js'
import {Cart} from '../components/Cart.js'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import {ShowItemsCart} from '../components/ShowItemsCart.js'
import ShowRestaurants from '../components/ShowRestaurants.js';
import './List.css'
import searchRestaurants from '../services/searchRestaurants.js';
import { Navbar } from '../components/Navbar.js';
import submitOrder from '../services/submitOrder.js';

   
const carrito = JSON.parse(window.localStorage.getItem('carrito') || '[]')


export const List = () => {
    const [cart, setCart] = useState(carrito)
    const [user, setUser] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState()
    let acumuladorTotal = 0
    
    useEffect(() => {
        async function fetchData(){
            setLoading(true)
            const directionsService = new window.google.maps.DirectionsService()
            const adress = window.localStorage.getItem("direccion")
            setUser(JSON.parse(window.localStorage.getItem("user")))
            const location = adress.split(",")
            searchRestaurants.setToken(window.localStorage.getItem('token'))
            const response = await searchRestaurants.restaurantsInLocation(location[1].trim())
            response.map((d) => {
                directionsService.route({
                    origin: d.direccion,
                    destination: window.localStorage.getItem("direccion"),
                    travelMode: 'DRIVING'
                })
                .then((result) =>{
                    d.distancia = result.routes[0].legs[0].duration.value
                    return {
                        ...response, distancia: d.distancia
                    } 
                })
    
            })
            setData(response)
            acumuladorTotal = 0
            setLoading(false)
        }

        fetchData()
    }, [] );

    useEffect(() => {
        window.localStorage.setItem('carrito', JSON.stringify(cart))
        acumuladorTotal=0      
        cart.forEach(r => { 
            let precioCantidad = r.precio * r.quantity
            acumuladorTotal += precioCantidad
            setTotal(acumuladorTotal)
        })  
          
    }, [cart] );


    
    const removeItem = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove))
    }

    const addToCart = (product) => {
        const { comida_id } = product
        const check_index = cart.findIndex(item => item.comida_id === comida_id)

        if(cart.some(item => item.comida_id === comida_id)){
            cart[check_index].quantity++;
            setCart([...cart])
            
        }else setCart([...cart, {...product, quantity: 1}]) 
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await submitOrder.realizarPedido(cart, user)
        console.log(cart, user)
    }

    return (
        <>
        <Navbar></Navbar>
        <section className='container'>
            
            <ShowRestaurants restaurantes={data} handleClickAdd={addToCart}></ShowRestaurants>
            <ShowItemsCart cart={cart} handleClick={removeItem} total={total} handleOnSubmit={handleOnSubmit}></ShowItemsCart>
            
        </section>
        </>
    )
}