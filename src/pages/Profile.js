import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { RestaurantProfile } from "../components/RestaurantProfile"
import { UserProfile } from "../components/UserProfile"

export const Profile = () => {
    const [user, setUser] = useState(false)
    const [restaurante, setRestaurante] = useState(false)

    useEffect(() => {
        const loggedUserJSON = async () => {
            const restaurante = window.localStorage.getItem('restaurante')
            const user = window.localStorage.getItem('user')
            if(restaurante) setRestaurante(true)
            if(user) setUser(true)
        }

        loggedUserJSON()
        
        
      }, [])


    return (
        <>
        <Navbar></Navbar>
        {restaurante && <RestaurantProfile></RestaurantProfile>}
        {user && <UserProfile></UserProfile>}
        </>
    )
}