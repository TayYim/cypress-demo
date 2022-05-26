describe('Demo for cypress',function(){
    const username ='Lucy Li';
    const email = `test@email.com`;
    const address = 'test address';
    beforeEach(()=>{
        cy.visit('/', {timeout:30000})
    })
    it('Should submit my information successfully', function(){
        // cy.visit('/', {timeout:120000})
        cy.contains('Elements').click();
        cy.contains('Text Box').click();
        cy.get('#userName').type(username);
        cy.get('#userName').should('have.value', username)
        cy.get('#userEmail').type(email);
        cy.get('#userEmail').should('have.value', email);
        cy.get('#currentAddress').type(address);
        cy.get('#submit').click();
        cy.get('#name').should('contain', username);
        cy.get('#email').should('contain', email);
        cy.get('#output #currentAddress').should('contain', address);
    })

    it('should check checkbox successfully',function(){
        // cy.visit('/', {timeout:120000})
        cy.contains('Elements').click();
        cy.contains('Check Box').click();
        cy.get('#tree-node-home')
          .check({force: true })
          .should('be.checked');
    
        cy.get('#tree-node-home')
        .uncheck({force: true })
        .should('not.be.checked');
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })   
})