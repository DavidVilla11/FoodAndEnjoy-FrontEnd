import { useState } from 'react';
import { RegisterUser } from '../components/RegisterUser.js';


export const Register = () => {
    const [values, setValues] = useState({
        nombre:"",
        apellido:"",
        direccion:"",
        telefono:"",
        dni:"",
        localidad:"",
        email:"",
        nombreUsuario:"",
        contraseña:""
    });
    //const navigate = useNavigate();

    /*const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await registerService.registrarUsuario(values)
        if(response === '201'){
            navigate('/', {state:true})
        }
    }*/

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
    }

        
    return (
        <>
        <RegisterUser values={values} onChange={onChange}>

        </RegisterUser>
        </>
    )
}

/* Nombre, apellidos, dirección, numero de telefono, DNI, email... */