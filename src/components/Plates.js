import { Children } from "react"

export const Plates = (props) => {

    return (
    <div className='column-profile' key={props.id}>
        <label>
        Nombre*
        <input placeholder='Nombre' type='text' name="nombreComida" defaultValue={props.nombreComida || ""} disabled={props.edit} required={true} />
        </label>

        <label>
        Ingredientes*
        <input placeholder='Ingredientes' type='text' name="ingredientes" defaultValue={props.ingredientes || ""} disabled={props.edit} required={true}/>
        </label>
    

        <label>
        Precio*
        <input placeholder='Precio' type='text' name="precio" id='precio' defaultValue={props.precio || ""} disabled={props.edit} required={true}/>
        </label>

        <label>
        Tipo*
        <select className="select-class" defaultValue={props.tipo || ""} disabled={props.edit}>
            <option>Entrante</option>
            <option>Primer plato</option>
            <option>Segundo plato</option>
            <option>Postre</option>
            <option>Bebida</option>
        </select>
        </label>

        {props.children}
    </div>
    )
}