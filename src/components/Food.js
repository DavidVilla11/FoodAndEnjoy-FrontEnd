import { useState } from 'react';
import { ShowItemsCart } from './ShowItemsCart';
import './Food.css'

export const Food = ({platos, handleClickAddFood}) => {

    return (
        <div className="container_menu">
            <section>
                <article>
                    <ul>
                    <h2>ENTRANTES</h2>
                        {
                            platos.map((plat) => {
                                if(plat.tipo === 'Entrante') 
                                return (
                                    <li className='food-line'  key={plat.comida_id}>
                                        
                                        <p>Nombre: </p>
                                        <h4>{plat.nombreComida}</h4>

                                        <p>Ingredientes: </p>
                                        <h4>{plat.ingredientes}</h4>

                                        <p>Precio: </p>
                                        <h4>{plat.precio}€</h4>
                                        <button onClick={() => handleClickAddFood(plat)}>Añadir</button>
                                        
                                        
                                    </li>
                                )
                                else return null
                            })
                        }
                    <h2>PRIMEROS PLATOS</h2>
                        {
                            platos.map((plat) => {
                                if(plat.tipo === 'Primer plato') 
                                return (
                                    <li className='food-line'  key={plat.comida_id}>
                                        
                                        <p>Nombre: </p>
                                        <h4>{plat.nombreComida}</h4>

                                        <p>Ingredientes: </p>
                                        <h4>{plat.ingredientes}</h4>

                                        <p>Precio: </p>
                                        <h4>{plat.precio}€</h4>
                                        <button onClick={() => handleClickAddFood(plat)}>Añadir</button>
                                        
                                        
                                    </li>
                                )
                                else return null
                            })
                        }
                    <h2>SEGUNDOS PLATOS</h2>
                        {
                            platos.map((plat) => {
                                if(plat.tipo === 'Segundo plato') 
                                return (
                                    <li className='food-line'  key={plat.comida_id}>
                                        
                                        <p>Nombre: </p>
                                        <h4>{plat.nombreComida}</h4>

                                        <p>Ingredientes: </p>
                                        <h4>{plat.ingredientes}</h4>

                                        <p>Precio: </p>
                                        <h4>{plat.precio}€</h4>
                                        <button onClick={() => handleClickAddFood(plat)}>Añadir</button>
                                        
                                        
                                    </li>
                                )
                                else return null
                            })
                        }
                    <h2>POSTRES</h2>
                        {
                            platos.map((plat) => {
                                if(plat.tipo === 'Postre') 
                                return (
                                    <li className='food-line'  key={plat.comida_id}>
                                        
                                        <p>Nombre: </p>
                                        <h4>{plat.nombreComida}</h4>

                                        <p>Ingredientes: </p>
                                        <h4>{plat.ingredientes}</h4>

                                        <p>Precio: </p>
                                        <h4>{plat.precio}€</h4>
                                        <button onClick={() => handleClickAddFood(plat)}>Añadir</button>
                                        
                                        
                                    </li>
                                )
                                else return null
                            })
                        }
                    <h2>BEBIDAS</h2>
                        {
                            platos.map((plat) => {
                                if(plat.tipo === 'Bebida') 
                                return (
                                    <li className='food-line'  key={plat.comida_id}>
                                        
                                        <p>Nombre: </p>
                                        <h4>{plat.nombreComida}</h4>

                                        <p>Precio: </p>
                                        <h4>{plat.precio}€</h4>
                                        <button onClick={() => handleClickAddFood(plat)}>Añadir</button>
                                        
                                        
                                    </li>
                                )
                                else return null
                            })
                        }
                    </ul>
                    
                </article>
            </section>
        </div>
    )
}



