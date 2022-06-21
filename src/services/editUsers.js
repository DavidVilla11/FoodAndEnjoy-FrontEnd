let token = ""

const setToken = (newToken) => token = `Bearer ${newToken}`

async function editRestaurante(id, user, comida){
    const datos = {
        'nombre':user.nombre,
        'apellido':user.apellido,
        'direccion':user.direccion,
        'telefono': user.telefono,
        'comida': comida

    }
    
    const request = await fetch( `http://localhost:8081/api/restaurantes/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(datos)
    })
    const response = await request.json()
    return response
}


export default { editRestaurante, setToken }