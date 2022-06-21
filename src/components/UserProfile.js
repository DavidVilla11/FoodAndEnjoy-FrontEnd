import { useEffect, useState } from 'react'
import './UserProfile.css'
import edit from './edit32.png'
import editUsers from '../services/editUsers'
import { Orders } from './Orders'
import foto from './foto_defecto.png'

export const UserProfile = () => {
    const [isDisable, setIsDisable] = useState(true);
    const [pedido, setPedido] = useState([]);
    const [user, setUser] = useState([]);
    const [token, setToken] = useState("")


    useEffect(() => {
        const loggedUserJSON = async () => {
            const logged = window.localStorage.getItem('user')
            if(logged){
            const jwt = window.localStorage.getItem('token')
            const user = await JSON.parse(logged)
            const pedido = user.pedido
            setUser(user)
            setPedido(pedido)
            setToken(jwt)
            }  
        }

        loggedUserJSON()
        
      }, [])

    const handleDissable = () => {
        setIsDisable(false)
    }

    
    /*const onChange = (e) => {
        setNuevaComida({...nuevaComida, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(comida)
        const response = await editUsers.editRestaurante(id, user, comida)
        if (response !== undefined){
            localStorage.setItem('restaurante', JSON.stringify(response))
            
        }
    }*/

    return (
        <>
        <form>
            <article className='card-profile'>
            <section className="picture-profile">
                <picture className='border-img'>
                <img className='image-profile' src={foto} alt="Imagen de perfil"></img>
                </picture>
            </section>

            <section className='data-profile'>
                <div className='edit-row'>
                    <h2>📋 Datos 📋</h2>
                    <button type='button' onClick={handleDissable} className='edit-button'>
                        <img src={edit}></img>
                    </button>
                </div>
                    <div className='column'>
                    <label>
                    Nombre*
                    <input placeholder='Nombre' type='text' name="nombre" required={true} value={user.nombre || ""} disabled={isDisable} />
                    </label>

                    <label>
                    Apellidos*
                    <input placeholder='Apellidos' type='text' name="apellido" required={true} value={user.apellido || ""} disabled={isDisable}/>
                    </label>
                    </div>

                    <div className='column'>
                    <label>
                    Dirección*
                    <input placeholder='Dirección' type='text' name="direccion" required={true} value={user.direccion || ""} disabled={isDisable}/>
                    </label>

                    <label>
                    Numero*
                    <input placeholder='Nº' type='text' name="numero" required={true} value="2" disabled={isDisable}/>
                    </label>
                    </div>


                    <div className='column'>
                    <label>
                    Número de telefono
                    <input placeholder='Telefono' type='tel' name="telefono" value={user.telefono || ""} disabled={isDisable}/>
                    </label>
                    </div>
            </section>
                <h2>📦 Pediddos 📦</h2>
            <section className='food-profile'>
                <div id='food'>
                {
                    /*pedido.map((p) => {
                        return(
                        <div key={p.comida_id}>
                            <Orders id={p.comida_id} nombreComida={p.nombreComida} ingredientes={p.ingredientes} 
                                    precio={p.precio} tipo={p.tipo} edit={isDisable} removeFood={removeFood}
                             >
                                 <button type="button" className="delete" disabled={isDisable} onClick={() => removeFood(c)}>🗑</button>
                             </Orders>
                             
                        </div>
                        ) 
                    })*/
                    <h1>Hola</h1>
                }
                </div>
            </section>
            <button type='submit' style={{display: isDisable ? 'none' :  undefined }}>Confirmar</button>
            </article>
        </form>
        </>
    )
}