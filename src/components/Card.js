import { useState } from 'react';
import Modal from './Modal.js'
import {Food} from './Food.js'
import './Card.css'

export const Card = (props) => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
        <div className="card">
            <img className='card_image' src={`data:image/jpeg;base64,${props.img}`}></img>
            <div className="card_body">
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
                <p>Tiempo de entrega estimado: <b>{Math.round(props.tiempo / 60)} min</b></p>
            </div>
                <button className="card_btn" onClick={handleClick}>View food</button>
        </div>
        {showModal && <Modal onClose={handleClose}><Food id={props.id} platos={props.platos} precio={props.precio} ingredientes={props.ingredientes} handleClickAddFood={props.handleClickAdd}/></Modal>}
        </>
    )
}