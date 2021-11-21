describe('Signup', () => {
  it('Should signup successfully', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('input[placeholder=Nome]').type('Cypress Teste');
    cy.get('input[placeholder=E-mail]').type('cypress@teste.com');
    cy.get('input[placeholder=Senha]').type('cypress123');
    cy.get("input[placeholder='Confirmar senha']").type('cypress123');
    cy.contains('Cadastrar').click();
    cy.url().should('equal', 'http://localhost:3000/signup');
  });
});

describe('Login', () => {
  it('Should login successfully', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder=E-mail]').type('cypress@teste.com');
    cy.get('input[placeholder=Senha]').type('cypress123');
    cy.contains('Login').click();
    cy.url().should('equal', 'http://localhost:3000/plans');
  });
});
