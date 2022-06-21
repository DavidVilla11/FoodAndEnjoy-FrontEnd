
const baseUsuarioURL = 'http://localhost:8081/api/login/usuario'
const baseRepartidorURL = 'http://localhost:8081/api/login/repartidor'
const baseRestauranteURL = 'http://localhost:8081/api/login/restaurante'

async function iniciarSesionUsuario(username, password){
    const datos = {}
    datos.nombreUsuario = username
    datos.contraseña = password 
    const request = await fetch( baseUsuarioURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    const response = await request.json()
    return response
}

async function iniciarSesionRepartidor(username, password){
    const datos = {}
    datos.nombreUsuario = username
    datos.contraseña = password 
    const request = await fetch( baseRepartidorURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    const response = await request.json()
    return response
}

async function iniciarSesionRestaurante(username, password){
    const datos = {}
    datos.nombreUsuario = username
    datos.contraseña = password 
    const request = await fetch( baseRestauranteURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    const response = await request.json()
    return response
}

export default { iniciarSesionUsuario, iniciarSesionRepartidor, iniciarSesionRestaurante }