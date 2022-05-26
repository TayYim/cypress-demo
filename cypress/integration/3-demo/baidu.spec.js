describe('Demo of searching in baidu', function () {
  var text = 'Cypress';
  before(() => {
    cy.log('I will run before all');
  })
  beforeEach(() => {
    cy.visit('http://www.baidu.com')
  })
  it('I search the text by baidu', function () {
    cy.get('#kw').type(text);
    cy.get('#kw').should('have.value', text)
    cy.url().should("contains", "baidu")
  })

  it('Should search 西安交通大学 success ', function () {
    cy.get('input.s_ipt').type('西安交通大学');
    cy.get('#kw').should('have.value', '西安交通大学')
  })

  afterEach(() => {
    cy.log('I will run after each');
  })
  after(() => {
    cy.log('I will run after all');
  })
})