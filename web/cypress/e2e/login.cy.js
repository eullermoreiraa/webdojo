describe('Login', ()=> {
    it('Deve logar com sucesso', ()=> {
        cy.visit('http://localhost:3000')

        cy.get('#email')
        cy.get('#password')
    })
})