///<reference types ="cypress"/>

it.skip('Querying elements', () =>{
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

it('Additional commands to find elements', () =>{
    cy.visit('http://localhost:8080/commands/traversal');

    cy.get('.traversal-breadcrumb.breadcrumb')
    .children('li')
    .eq(0)
    .should('contain', 'Home'); 

    cy.get('.traversal-breadcrumb.breadcrumb')
    .children('.active')
    .eq(0)
    .should('contain', 'Data');

    cy.get('.traversal-badge')
    .closest('ul')
    .should('have.class', 'list-group');

    cy.contains('John')
    .closest('table')
    .should('have.class', 'traversal-table')
    .and('contain', 'Doe');

    cy.get('.traversal-table td')
    .first()
    .should('contain', '1');
    

    cy.get('.traversal-breadcrumb.breadcrumb')
    .find('li') //find one of childs
    .should('contain', 'Data');

    cy.get('.traversal-disabled button')
    .first()
    .should('have.attr', 'disabled')
    .and('eq', 'disabled');

    cy.get('.traversal-ul')
    .contains('li','apples')
    .next()
    .should('contain','oranges')
    .next()
    .should('contain','bananas');

    cy.get('.traversal-next-all')
    .contains('apples')
    .nextAll()
    .should('have.length', '4') //check q-ty of next sibling elements 

    cy.get('#veggies')
    .nextUntil('#nuts')
    .should('have.length','3')
    .and('contain', 'cucumbers')
    .and('contain', 'carrots')
    .and('contain', 'corn')

    cy.get('.traversal-disabled .btn-default')
    .not('disabled')
    .should('contain', 'Button')
    .and('be.enabled');

    cy.get('.traversal-mark')
    .parent()
    .should('contain', 'Morbi leo risus, porta ac consectetur ac, highlight vestibulum at eros.');

    cy.contains('.active', 'About')
    .parent()
    .should('contain', 'Services');

    cy.get('.traversal-cite')
    .parents()
    .should('contain','Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    cy.get('.traversal-pagination')
    .find('span')
    .last()
    .should('contain', '»')
    
})