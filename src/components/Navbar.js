import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { NavLinkComp } from "./NavLinkComp";

export const Navbar = () => {
    const [user, setUser] = useState(null);
    const [delivery, setDelivery] = useState(null);
    const [restaurant, setRestaurant] = useState(null);
    const [logout, setLogout] = useState(true)
  
    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('user')
      const loggedDeliveryJSON = window.localStorage.getItem('delivery')
      const loggedRestaurantJSON = window.localStorage.getItem('restaurante')
      if(loggedUserJSON){
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        setLogout(false)
      }
  
      if(loggedDeliveryJSON){
        const delivery = JSON.parse(loggedDeliveryJSON)
        setDelivery(delivery)
        setLogout(false)
      }
  
      if(loggedRestaurantJSON){
        const restaurant = JSON.parse(loggedRestaurantJSON)
        setRestaurant(restaurant)
        setLogout(false)
      }
  
    }, [])
  
    const handleClick = () => {
    };
  
    const handleLogout = () => {
      window.localStorage.removeItem('user')
      window.localStorage.removeItem('delivery')
      window.localStorage.removeItem('restaurante')
      window.localStorage.removeItem('token')
      setUser(null)
      setDelivery(null)
      setRestaurant(null)
    };
  
    const renderLinkLogin = () => {
      return <NavLinkComp to="/login" onClick={handleClick}>Iniciar Sesión</NavLinkComp>
    }
  
    const renderUser = () => {
      return (
        <>
        <Link to="/" onClick={handleLogout}>Cerrar sesión</Link>
        <NavLinkComp data-cy="logged" to="/usuario">Usuario: {user.nombreUsuario}</NavLinkComp>
        </>
      )
    }

    const renderDelivery = () => {
        return (
          <>
          <Link to="/" onClick={handleLogout}>Cerrar sesión</Link>
          <NavLinkComp data-cy="logged" to="/usuario">Repartidor: {delivery.nombre}</NavLinkComp>
          </>
        )
      }

      const renderRestaurant = () => {
        return (
          <>
          <Link to="/" onClick={handleLogout}>Cerrar sesión</Link>
          <NavLinkComp data-cy="logged" to="/usuario">Restaurante: {restaurant.nombreRestaurante}</NavLinkComp>
          </>
        )
      }
  

    return(
        <nav className="Navbar">
        <NavLinkComp to="/" className="nav-logo">
        <h4>FOOD&ENJOY</h4>
        </NavLinkComp>
        <NavLinkComp to="/register/user" onClick={handleClick}>Registro</NavLinkComp>
        <NavLinkComp to="/register/delivery" onClick={handleClick}>Quiero ser repartidor</NavLinkComp>
        <NavLinkComp to="/register/restaurant" onClick={handleClick}>Añadir Restaurante</NavLinkComp>
        {
        user && renderUser()
        }
        {
        delivery && renderDelivery()
        }
        {
        restaurant && renderRestaurant()
        }
        {
        logout && renderLinkLogin()
        }
        
        </nav>
  )  
}
