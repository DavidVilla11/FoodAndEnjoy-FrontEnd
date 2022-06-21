import { useEffect, useState } from 'react'
import './UserProfile.css'
import edit from './edit32.png'
import { Plates } from "./Plates"
import  Modal  from './Modal'
import { NewPlates } from './newPlates'
import editUsers from '../services/editUsers'

export const RestaurantProfile = () => {
    const [isDisable, setIsDisable] = useState(true);
    const [user, setUser] = useState([]);
    const id = user.Restaurante_id
    const [comida, setComida] = useState([]);
    const [nuevaComida, setNuevaComida] = useState({
        nombreComida: "",
        precio: "",
        ingredientes: "",
        tipo: "",
    });
    const [showModal, setShowModal] = useState(false)
    const [editForm, seteditForm] = useState(false)


    useEffect(() => {
        const loggedUserJSON = async () => {
            const logged = window.localStorage.getItem('restaurante')
            if(logged){
            editUsers.setToken(window.localStorage.getItem('token'))
            const user = await JSON.parse(logged)
            const comida = user.comida
            setUser(user)
            setComida(comida)
            }  
        }

        loggedUserJSON()
        
        
      }, [])

    const handleDissable = () => {
        setIsDisable(false)
    }

    const handleFood = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    const removeFood = (foodToRemove) => {
        setComida(comida.filter((food) => food !== foodToRemove))
        console.log(comida)
    }

    const onChange = (e) => {
        setNuevaComida({...nuevaComida, [e.target.name]: e.target.value })
    }

    const handleAdd = (nuevaComida) => {
        console.log(nuevaComida)
        setComida([...comida, {...nuevaComida}])
        setShowModal(false)
        console.log(comida)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(comida)
        const response = await editUsers.editRestaurante(id, user, comida)
        if (response !== undefined){
            localStorage.setItem('restaurante', JSON.stringify(response))
            
        }
    }

    return (
        <>
        <form>
            <article className='card-profile'>
            <section className="picture-profile">
                <picture className='border-img'>
                <img className='image-profile' src={`data:image/jpeg;base64,${user.imagenByte}`} alt="Imagen de perfil"></img>
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
                <h2>🍝 Platos 🍝</h2>
            <section className='food-profile'>
                <div id='food'>
                {
                    comida.map((c) => {
                        return(
                        <div key={c.comida_id}>
                            <Plates id={c.comida_id} nombreComida={c.nombreComida} ingredientes={c.ingredientes} 
                                    precio={c.precio} tipo={c.tipo} edit={isDisable} removeFood={removeFood}
                             >
                                 <button type="button" className="delete" disabled={isDisable} onClick={() => removeFood(c)}>🗑</button>
                             </Plates>
                             
                        </div>
                        ) 
                    })
                }
                </div>
            </section>
            <button type='button' onClick={handleFood} style={{display: isDisable ? 'none' :  undefined }}>Añadir plato</button>
            <button type='submit' onClick={handleSubmit} style={{display: isDisable ? 'none' :  undefined }}>Confirmar</button>
            </article>
        </form>
        {showModal && <Modal onClose={handleClose}><NewPlates id={comida.length} values={nuevaComida} onChange={onChange} handleAdd={handleAdd}/></Modal>}
        </>
    )
}