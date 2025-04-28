describe('Login', () => {
  it('Login com Sucesso', () => {
    cy.start()
    cy.loginSubmit('papito@webdojo.com', 'katana123')
    
    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should("be.visible")
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
    })

    it('Senha inválida', () => {
      cy.start()
      cy.loginSubmit('papito@webdojo.com', 'katana321')

      cy.contains('Acesso negado! Tente novamente.')
      })

      it('E-mail inválido', () => {
        cy.start()
        cy.loginSubmit('teste@webdojo.com', 'katana123')
  
        cy.contains('Acesso negado! Tente novamente.')
        })
})