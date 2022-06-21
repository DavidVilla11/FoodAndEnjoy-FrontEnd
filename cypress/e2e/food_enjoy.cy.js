describe('Food and Enjoy App', () => {
    it('Smoke test', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Ponga su dirección para iniciar el pedido:')
    })
})