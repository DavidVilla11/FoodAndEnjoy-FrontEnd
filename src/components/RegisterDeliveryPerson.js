import { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api'
import { useNavigate } from 'react-router-dom';
import registerService from '../services/register'
import './Register.css'
import { Navbar } from './Navbar';

export const RegisterDeliveryPerson = ({values, onChange}) => {

    const PROVINCIAS = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
    'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']

    const navigate = useNavigate();
    const direccion = useRef()
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        values.direccion = direccion.current.value
        const response = await registerService.registrarRepartidor(values)
        if(response === '201'){
            navigate('/', {state:true})
        }
    }


    return (
        <div className='image'>
            <Navbar></Navbar>
            <div className='container_log'>
                <form className='register' onSubmit={handleSubmit}>
                    <div className='column'>
                    <label>
                    Nombre*
                    <input placeholder='Nombre' type='text' name="nombre" value={values.nombre}
                        onChange={onChange} required={true} />
                    </label>

                    <label>
                    Apellidos*
                    <input placeholder='Apellidos' type='text' name="apellido" value={values.apellido}
                        onChange={onChange} required={true}/>
                    </label>
                    </div>

                    <label>
                    Dirección*
                    <Autocomplete>
                    <input placeholder='Dirección' type='text' ref={direccion} name="direccion"
                        onChange={onChange} required={true}/>
                    </Autocomplete>
                    </label>


                    <div className='column'>
                    <label>
                    Número de telefono
                    <input placeholder='Telefono' type='tel' name="telefono" value={values.telefono}
                        onChange={onChange}/>
                    </label>

                    <label>
                    DNI*
                    <input placeholder='DNI' type='text' name="dni" value={values.dni}
                        onChange={onChange} required={true}/>
                    </label>
                    </div>

                    <label>
                    Localidad
                    <select required={true} name="localidad" value={values.localidad} onChange={onChange} className="select-class">
                        {
                            PROVINCIAS.map((prov) => {
                                return <option key={prov} value={prov}>{prov}</option>
                            })
                        }
                    </select>
                    </label>

                    <label>
                    Email*
                    <input placeholder='Email' type='email' name="email" value={values.email}
                        onChange={onChange} required={true}/>
                    </label>

                    <label>
                    Nombre usuario*
                    <input placeholder='Username' type='text' name="nombreUsuario" value={values.nombreUsuario}
                        onChange={onChange} required={true}/>
                    </label>

                    <label>
                    Contraseña*
                    <input placeholder='Password' type='password' name="contraseña" value={values.contraseña}
                        onChange={onChange} required={true}/>
                    </label>

                    <label>
                    Vehiculo para repartir
                    <select name="vehiculo" value={values.vehiculo} onChange={onChange} className="select-class">
                        <option>Moto</option>
                        <option>Bicicleta/Patinete</option>
                    </select>
                    </label>



                    <button className='button-24'>Login</button>
                </form>
            </div>
        </div>
    )
}