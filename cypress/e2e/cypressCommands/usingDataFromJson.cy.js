///<reference types ="cypress"/>

//file with jason should be imported using linux path
import * as emailFromJson from '../fixtures/{} example.json'

it('Actions', () =>{
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#email1')
    .type(emailFromJson.email1)
    .should('have.value',emailFromJson.email1)
    .clear()
    .type(emailFromJson.email2)
    .should('have.value',emailFromJson.email2);

})