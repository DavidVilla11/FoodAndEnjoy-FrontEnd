import { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api'
import { useNavigate } from 'react-router-dom';
import registerService from '../services/register'
import './Register.css'
import { Navbar } from './Navbar';

export const RegisterRestaurant = ({values, onChange}) => {
    
    const PROVINCIAS = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
    'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']

    const navigate = useNavigate();
    const direccion = useRef()
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(document.getElementById("form-rest"));
        console.log([...formData])
        values.direccion = direccion.current.value
        const response = await registerService.registrarRestaurante(formData)
        if(response === '201'){
            navigate('/', {state:true})
        }
    }

    return (
        <div className='image'>
            <Navbar></Navbar>
            <div className='container_log'>
                <form className='register' onSubmit={handleSubmit} encType='multipart/form-data' id='form-rest'>
                    <label>
                    Nombre Restaurante*
                    <input placeholder='Nombre' type='text' name="nombreRestaurante" value={values.nombreRestaurante}
                        onChange={onChange} required={true} />
                    </label>
                    <label>
                    Imagen Restaurante*
                    <input placeholder='Nombre'type="file" id="img" accept="image/*" name="imagen" value={values.imagen}
                        onChange={onChange} required={true} />
                    </label>
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

                    <div className='column'>
                    <label>
                    Dirección*
                    <Autocomplete >
                    <input placeholder='Dirección' type='text' name="direccion" ref={direccion} onChange={onChange} required={true}/>
                    </Autocomplete>
                    </label>

                    <label>
                    Numero*
                    <input placeholder='Nº' type='text' name="numero" value={values.numero}
                        onChange={onChange} required={true}/>
                    </label>
                    </div>


                    <div className='column'>
                    <label>
                    Número de telefono
                    <input placeholder='Telefono' type='tel' name="telefono" value={values.telefono}
                        onChange={onChange}/>
                    </label>

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
                    </div>


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


                    <button className='button-24'>Login</button>
                </form>
            </div>
        </div>
    )
}
