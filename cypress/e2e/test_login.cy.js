describe('Food and Enjoy App - login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('Test login app', () => {
        cy.get('[placeholder="Username"]').type('dvilla11')
        cy.get('[placeholder="Password"]').type('a')
        cy.contains('Login').click()
        cy.get('[data-cy="logged"]')
    })
})