describe('demo for all kinds of clicks',function(){
    it('should successfully click all the buttons',function(){
        cy.visit('/', {timeout:30000})
        cy.contains('Elements').click();
        cy.contains('Buttons').click();
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text','You have done a double click');
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click');

    }) 
})