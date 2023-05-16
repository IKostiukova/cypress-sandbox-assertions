///<reference types ="cypress"/>

it('Location tests', () =>{

    cy.visit('http://localhost:8080/commands/assertions');

    cy.location().should(location =>{
        expect(location.href).to.eq('http://localhost:8080/commands/assertions'); //check full URL
        expect(location.host).to.eq('localhost:8080');
        expect(location.hash).to.be.empty;
        expect(location.origin).to.eq('http://localhost:8080');
        expect(location.pathname).to.eq('/commands/assertions');
        expect(location.port).to.eq('8080');
        expect(location.protocol).to.eq('http:');
    })

    cy.url().should('eq', 'http://localhost:8080/commands/assertions');
})