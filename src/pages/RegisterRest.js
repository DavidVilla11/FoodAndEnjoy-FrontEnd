import { useState } from 'react';
import { RegisterRestaurant } from '../components/RegisterRestaurant.js';


export const RegisterRest = () => {
    const [values, setValues] = useState({
        nombreRestaurante:"",
        nombre:"",
        apellido:"",
        direccion:"",
        telefono:"",
        numero:"",
        localidad:"",
        email:"",
        nombreUsuario:"",
        contraseña:"",
        imagen:"",
        comida:[]
    });
    //const navigate = useNavigate();

    /*const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values.direccion)
        const response = await registerService.registrarRestaurante(values)
        if(response === '201'){
            navigate('/', {state:true})
        }
        console.log(response)
    }*/

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
    }

        
    return (
        <>
        <RegisterRestaurant values={values} onChange={onChange}>

        </RegisterRestaurant>
        </>
    )
}