describe('Demo for cypress',function(){
    const bookName = '重构';
    before(()=>{
        cy.log('I will run before all');

    })
    beforeEach(()=>{
        cy.log('I will run before each');
    })

    it('I want to search the book named "重构"',function(){
        cy.visit('http://www.taobao.com')
        cy.get('div.search-suggest-combobox #q').type(bookName).should('have.value', bookName)
        cy.screenshot('./screenshots/searchResult');
    })

    afterEach(()=>{
        cy.log('I will running after each')
    })
    after(()=>{
        cy.log('I will run after all');
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })  
})