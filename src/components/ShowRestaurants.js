import React, { useEffect, useState } from 'react'
import './Card.css'
import {Card} from './Card.js'
import searchRestaurants from '../services/searchRestaurants.js';

export default function ShowRestaurants ({ restaurantes, handleClickAdd}) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      setLoading(true)
    },850)
}, [restaurantes] );

  return (
    <div className='cards_grid'>
      {loading ? restaurantes.map(rest => {
                    if(rest.distancia < 3000){
                      return <Card key={rest.Restaurante_id} img={rest.imagenByte} 
                      title={rest.nombreRestaurante} description={rest.direccion} platos={rest.comida} telefono={rest.telefono} tiempo={rest.distancia} handleClickAdd={handleClickAdd}/>
                    }
                  })
               : 'Cargando...'
      }
    </div>
  )
}