describe('Demo for cypress upload and download',function(){
    const path = './Downloads/SampleFile.jpeg';
    beforeEach(()=>{
        cy.visit('/',{timeout:30000})
    })

    it('Should upload success',function(){
        cy.contains('Elements').click();
        cy.contains('Upload and Download').click();
        cy.get('#uploadFile').selectFile('cypress/integration/test.txt');
        cy.get('#uploadedFilePath').invoke('text').should('contain','test.txt')
        //auto create a new file and upload  
        /*
        cy.get('#uploadFile').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.txt',
            mimeType: 'text/plain',
            lastModified: Date.now(),
          })
          
        cy.get('#uploadedFilePath').invoke('text').should('contain','file.txt')
        */
    })

    it('Should download success',function(){
        cy.contains('Elements').click();
        cy.contains('Upload and Download').click();
        cy.get('#downloadButton').click();
        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist')

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })   
})