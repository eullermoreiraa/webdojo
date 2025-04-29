describe('Formulário de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.loginSubmit('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Euller Moreira')

        cy.get('input[placeholder="Digite seu email"]').type('teste@gmail.com')

        cy.get('input[placeholder="(00) 00000-0000"]')
        .type('21 981818181')
        .should('have.value', '(21) 98181-8181')

        cy.get('#consultancyType').select('Individual')

        cy.contains('span', 'Pessoa Física')
        .parent()
        .find('input')
        .check()

        cy.get('input[placeholder="000.000.000-00"]')
        .type('67664437075')
        .should('have.value', '676.644.370-75')

        const discoveryChannels = ['Instagram', 'LinkedIn', 'Udemy', 'YouTube', 'Indicação de Amigo']

        for(let i = 0; i < discoveryChannels.length; i++){

            let n = discoveryChannels[i]
            cy.contains('label', n)
            .find('input')
            .check()
            .should('be.checked')
        }

        cy.get('input[type="file"]')
        .selectFile('./cypress/fixtures/document.pdf', { force: true })

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type('Lorem Ipsum')

        const Tecnologias = ["Cypress", "Selenium", "Robot", "Playwright"]

        for(let i = 0; i < Tecnologias.length; i++){
            let n = Tecnologias[i]

            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(n)
            .type('{enter}')
        
            cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', n)
            .should('be.visible')
        }

        cy.contains('label', 'termos de uso')
        .find('input')
        .check()
        .should('be.checked')

        cy.contains('button', 'Enviar formulário').click()

        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
        .should('be.visible')

        cy.contains("Fechar").click()
        
    })
})