
const baseUsuarioURL = 'http://localhost:8081/api/usuarios'
const baseRepartidorURL = 'http://localhost:8081/api/repartidores'
const baseRestauranteURL = 'http://localhost:8081/api/restaurantes'

async function registrarUsuario(values){
    const request = await fetch(baseUsuarioURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    const response = await request.status.toString()
    return response
}


async function registrarRepartidor(values){
    const request = await fetch(baseRepartidorURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    const response = await request.status.toString()
    return response
}

async function registrarRestaurante(formData){
    const request = await fetch(baseRestauranteURL, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json ,text/plain, */*'
        },
        body: formData
    })
    const response = await request.status.toString()
    return response
}


export default {registrarUsuario, registrarRepartidor, registrarRestaurante}