///<reference types ="cypress"/>

it('Querying elements', () =>{
    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#query-btn') //by id
    .should('contain','Button'); 

    cy.get('li:contains("bananas")') //find element by selector
    .should('contain', 'bananas');

    cy.contains('bananas') //find element by cypress command contains
    .should('contain', 'bananas');

    cy.get('.query-list').contains('bananas')
    .should('contain', 'bananas');


    // to check the list of items!!!
    const items = ['apples', 'oranges', 'bananas', 'more apples'];

    items.forEach((item) => {
        cy.contains('.query-list', item)
        .should('contain',item)
    })

    cy.get('.query-form')
    .within(()=>{
    cy.get('#inputEmail').should('have.attr','placeholder','Email');
    cy.get('#inputPassword').should('have.attr','placeholder','Password');
     })

    //cy.root - check internal elements
    cy.get('div.col-xs-5 form').within(()=>{
        cy.root().should('have.class', 'query-form')
        ;
      })

})