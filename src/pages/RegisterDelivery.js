import { useState } from 'react';
import { RegisterDeliveryPerson } from '../components/RegisterDeliveryPerson.js';


export const RegisterDelivery = () => {
    const [values, setValues] = useState({
        nombre:"",
        apellido:"",
        direccion:"",
        telefono:"",
        dni:"",
        localidad:"",
        email:"",
        nombreUsuario:"",
        contraseña:"",
        vehiculo:""
    });
    //const navigate = useNavigate();

    /*const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await registerService.registrarRepartidor(values)
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
        <RegisterDeliveryPerson values={values} onChange={onChange}>

        </RegisterDeliveryPerson>
        </>
    )
}