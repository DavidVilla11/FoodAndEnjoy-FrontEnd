let token = ""

const setToken = (newToken) => token = `Bearer ${newToken}`

async function realizarPedido(cart, user){
    const datos = {
        usuario: user,
        comida: cart

    }
    const request = await fetch( 'http://localhost:8081/api/pedidos', {
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


export default { realizarPedido, setToken }