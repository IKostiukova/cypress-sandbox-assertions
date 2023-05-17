///<reference types="cypress"/>

//with implicit assertion it's possible to make a lot of checks
//even for element that appeared for short period (e.g. message, pop-up, etc.)
//explicit assertions don't work in this case 

it('Implicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    expect('Assertions').to.be.eq('Assertions');

    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3).then(element =>{  
        expect(element).to.have.class('success');
        expect(element).to.have.attr('class');

        expect(element.attr('class')).to.eq('success');
        expect(element.attr('class')).to.eql('success');//deeply equal 
        expect(element.attr('class')).to.eqls('success');//deeply equal 
        expect(element.attr('class')).to.equal('success');
        expect(element.attr('class')).to.equals('success');
    })

    const obj1 ={
        key: 'Lili',
        keyObj:{
            key2: '1'
        }
    }

    const obj2 ={
        key: 'Lili',
        keyObj:{
            key2: '1'
        }   
    }

    //expect(obj1).to.eq(obj2); //will fail
    expect(obj1).to.eql(obj2);//deeply equal works as they check as a text inside of the each object
    expect(obj1).to.eqls(obj2);//deeply equal works as they check as a text inside of the each object
    //expect(obj1).to.equal(obj2); //will fail
    //expect(obj1).to.equals(obj2); //will fail

    const obj3 = obj1;
    expect(obj3).to.eq(obj1); 
    expect(obj3).to.eql(obj1);//deeply equal 
    expect(obj3).to.eqls(obj1);//deeply equal 
    expect(obj3).to.equal(obj1); 
    expect(obj3).to.equals(obj1); 

    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(3)
    .then(element =>{
        expect(element).to.have.text('Column content');
        expect(element).to.have.html('Column content');
        expect(element).to.have.text('Column content');

        expect(element.text()).to.contain('Column content');
        expect(element.text()).to.contains('content');
        expect(element.text()).not.to.contains('text');
        expect(element.text()).to.be.empty;
    })

    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#inputName')
    .type('Didi')
    .then(element =>{
        expect(element.val()).to.be.eq('Didi');
    })

    cy.visit('http://localhost:8080/commands/traversal');
    cy.get('.traversal-disabled .btn.btn-default')
    .eq(0)
    .then(element =>{
        expect(element).to.be.disabled;
    })

    cy.visit('http://localhost:8080/commands/traversal');
    cy.get('.traversal-disabled .btn.btn-default')
    .eq(1)
    .then(element =>{
        expect(element).to.be.enabled;
    })

})