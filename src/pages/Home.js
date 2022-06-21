import './Home.css'
import { Autocomplete } from '@react-google-maps/api'
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react'
import { Navbar } from '../components/Navbar'

export const Home = () => {
    const [error, setError] = useState(false)
    const [errorAuth, setErrorAuth] = useState(false)
    const [auth, setAuth] = useState(false)
    
    const originAdress = useRef()
    const number = useRef()
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUserJSON = async () => {
            const user = window.localStorage.getItem('user')
            if(user) setAuth(true)
        }

        loggedUserJSON()
        
        
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(originAdress.current.value === '' || number.current.value === ''){
            setError(true) 
        }else if(auth === true){
            window.localStorage.setItem("direccion", originAdress.current.value + ' ' + number.current.value)
            originAdress.current.value = ''
            number.current.value = ''
            navigate('/restaurantes', {state:false, replace:true})
            setError(false)
        }else if(auth === false){
            setErrorAuth(true)
        }
        
    }

    return (
        <>
        <div className='imagen'>
            <Navbar></Navbar>
            <div className='blanco'>
                <h2 className='a'>Ponga su dirección para iniciar el pedido:</h2>
                <form onSubmit={handleSubmit}>
                    <Autocomplete>
                        <input type='text' id='adress' placeholder='Ponga aquí su dirección...' ref={originAdress} ></input>
                    </Autocomplete>
                        <input className='num' type='text' id='numero' placeholder='Nº' ref={number} ></input>
                    <button className='button-24'>Buscar restaurantes</button>
                    <span className='errorFields' style={{ display: error ? "block" : "none" }}>Hay que rellenar todos los campos.</span>
                    <span className='errorFields' style={{ display: errorAuth ? "block" : "none" }}>Es necesario iniciar sesión.</span>
                </form>
            </div>
        </div>
        </>
    )
}