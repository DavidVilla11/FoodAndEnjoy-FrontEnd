/*const baseUsuarioURL = 'http://localhost:8081/api/login/usuario'
const baseRepartidorURL = 'http://localhost:8081/api/login/repartidor'*/

let token = ""

const setToken = (newToken) => token = `Bearer ${newToken}`

async function restaurantsInLocation(localidad){    
    const request = await fetch( `http://localhost:8081/api/restaurantes/${localidad}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    const response = await request.json()
    return response
}


export default { restaurantsInLocation, setToken }