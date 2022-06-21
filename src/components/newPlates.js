export const NewPlates = ({onChange, values, handleAdd, children}) => {

    return (
    <div className='column-profile' value={values.comida_id = Math.floor(Math.random() * 100)}>
        <label>
        Nombre*
        <input placeholder='Nombre' type='text' name="nombreComida" value={values.nombreComida}
                        onChange={onChange} required={true} />
        </label>

        <label>
        Ingredientes*
        <input placeholder='Ingredientes' type='text' name="ingredientes" value={values.ingredientes}
                        onChange={onChange} required={true}/>
        </label>
    

        <label>
        Precio*
        <input placeholder='Precio' type='text' name="precio" id='precio' value={values.precio}
                        onChange={onChange} required={true}/>
        </label>

        <label>
        Tipo*
        <select className="select-class" name="tipo" value={values.tipo} onChange={onChange}>
            <option>Entrante</option>
            <option>Primer plato</option>
            <option>Segundo plato</option>
            <option>Postre</option>
            <option>Bebida</option>
        </select>
        </label>
        <button className="add" onClick={() => handleAdd(values)}>➕</button>
    </div>
    )
}