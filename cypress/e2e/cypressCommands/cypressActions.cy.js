///<reference types="cypress"/>

it('Actions', () =>{
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#email1')
    .type('lili@mail.com')
    .should('have.value','lili@mail.com')
    .clear()
    .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}T',{delay:50})
    .type('{selectAll}{backspace}')
    .should('have.value', '');

   cy.get('.action-disabled')
   .type('Type into disabled filed',{force:true})

   cy.get('#password1')
   .focus()
   .prev()
   .should('have.attr','style','color: orange;');

   cy.get('#fullName1')
   .focus()
   .blur()
   .prev()
   .should('have.attr','style','color: red;')

    cy.get('#couponCode1')
    .type('Text')
    .closest('form')
    .submit()
    .siblings()
    .should('contain','Your form has been submitted!')

    cy.get('#couponCode1')
    .type('Text')
    .closest('form')
    .submit()
    .next()
    .should('contain','Your form has been submitted!')
    .and('have.attr','style','color: rgb(32, 181, 32);');

    cy.get('.action-btn')
    .click()
    .get('.popover-title')
    .should('have.text','Popover')
    .get('.popover-content')
    .should('have.text', 'This popover shows up on click')

    //cy.get('#action-canvas')
    //.click('bottom')
    //.click('center')
    //.click('top');

    cy.get('#action-canvas')
    .click(20,100)

    cy.get('.action-div')
    .dblclick()
    .next()
    .should('not.have.class','hidden')
    .clear()
    .type('text');

    cy.get('[data-placement = "bottom"]')
    .click({multiple:true});

    cy.get('.action-multiple-checkboxes [type="checkbox"]')
    .check({multiple:true});

    cy.get('#optionsRadios1')
    .check();
    
}) 

it('Actions', () =>{
    cy.visit('http://localhost:8080/commands/actions');

    //select from the drop-down
    cy.get('.form-control.action-select')
    .select('oranges')
    .should('have.value', 'fr-oranges');

}) 

it('scrollIntoView action', () =>{
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#scroll-horizontal button')
    .should('not.be.visible')
    .scrollIntoView()
    .should('be.visible')

}) 

it.only('trigger action', () =>{
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('.trigger-input-range')
    .invoke('val', 30)
    .trigger('change')
    .next()
    .should('have.text', '30');

}) 


