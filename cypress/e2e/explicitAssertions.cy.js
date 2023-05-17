/*
in terminal 1: npm start (to start the local site)
in termonal 2: npx cypress open (to open cypress)
*/

describe('explicit assertions', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3) //it's a cypress command that search for the defined number of elements
    .should('have.class','success');

    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.attr','class');

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('have.text','Column content');

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(5)
    .should('have.html','Column content');

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .should('contain','Column content');

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(5)
    .should('not.contain','Hello');

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(5)
    .should('include.text','content');

    cy.get('.table.table-bordered.assertion-table tr th')
    .eq(5)
    .should('contain','3');

    cy.get('.table.table-bordered.assertion-table tr th')
    .eq(5)
    .invoke('text')
    .then(parseFloat)
    .should('be.greaterThan', 2); //to get all that in styles



    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#inputName')
    .type('Lili')
    .should('have.value','Lili');

    cy.get('#query-btn')
    .should('be.enabled');

    cy.get('#main')
    .should('be.enabled');

    cy.visit('http://localhost:8080/commands/traversal');
    cy.get('.traversal-disabled .btn.btn-default')
    .eq(0)
    .should('be.disabled');

    cy.get('.traversal-disabled .btn.btn-default')
    .eq(1)
    .should('be.enabled');

    //check link
    cy.visit('http://localhost:8080/commands/querying');
    cy.get('.nav.navbar-nav.pull-right li a')
    .should('have.attr', 'href');

    //check css
    cy.get('#query-btn')
    .should('have.css','background-color') // checking the background-color - from styles in console
    .and('eq','rgb(51, 122, 183)'); // take hex from console (e.g. #286090) and onvert to rgb (in google search 'hex-to-rgb')
    
   

  })
})