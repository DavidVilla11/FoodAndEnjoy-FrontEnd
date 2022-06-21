import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import loginService from '../services/login'
import './Login.css'

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tipo, setTipo] = useState("Usuario");
    const [error, setError] = useState(false)
    const [auth, setAuth] = useState(false);

    const navigate = useNavigate();

    async function login(tipo, username, password){
        if (tipo === 'Usuario'){
            try{
                const data = await loginService.iniciarSesionUsuario(username, password)
                window.localStorage.setItem('token', data.tokenJWT)
                delete data.tokenJWT
                delete data.contraseña
                window.localStorage.setItem('user', JSON.stringify(data))
                setAuth(true)
                navigate('/', {state:false, replace:true})
                window.location.reload()
            }catch(error){
                console.log('wrong credentials')
                setError(true)
            }
        }

        if (tipo === 'Repartidor'){
            try{
                const data = await loginService.iniciarSesionRepartidor(username, password)
                window.localStorage.setItem('token', data.tokenJWT)
                delete data.tokenJWT
                delete data.contraseña
                window.localStorage.setItem('delivery', JSON.stringify(data))
                setAuth(true)
                navigate('/', {state:false, replace:true})
                window.location.reload()
            }catch(error){
                console.log('wrong credentials')
                setError(true)
            }
        }

        if (tipo === 'Restaurante'){
            try{
                const data = await loginService.iniciarSesionRestaurante(username, password)
                window.localStorage.setItem('token', data.tokenJWT)
                delete data.tokenJWT
                delete data.contraseña
                window.localStorage.setItem('restaurante', JSON.stringify(data))
                setAuth(true)
                navigate('/usuario', {state:false, replace:true})
                window.location.reload()
            }catch(error){
                console.log('wrong credentials')
                setError(true)
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(tipo, username, password)
    }
    
    return (
        <div className='image'>
            <Navbar></Navbar>
            <div className='container_log'>
                <form className='login' onSubmit={handleSubmit}>
                    <label>
                    Iniciar sesión como:
                        <select name="tipo" onChange={(e) => setTipo(e.target.value)} className="select-class">
                            <option>Usuario</option>
                            <option>Repartidor</option>
                            <option>Restaurante</option>
                        </select>
                    </label>
                    <label>
                    Nombre usuario
                    <input placeholder='Username' type='text'
                        onChange={(e) => setUsername(e.target.value)}/>
                    </label>

                    <label>
                    Contraseña
                    <input placeholder='Password' type='password'
                        onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <span className='errorFields' style={{ display: error ? "block" : "none" }}>Usuario o contraseña incorrecto</span>
                    <button className='button-24'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}