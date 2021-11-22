import faker from 'faker';

const name = faker.name.firstName() + ' ' + faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password(8);

describe('Signup', () => {
  it('Should signup successfully', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('input[placeholder=Nome]').type(name);
    cy.get('input[placeholder=E-mail]').type(email);
    cy.get('input[placeholder=Senha]').type(password);
    cy.get("input[placeholder='Confirmar senha']").type(password);
    cy.contains('Cadastrar').click();
    cy.url().should('equal', 'http://localhost:3000/login');
  });
});

describe('Login', () => {
  it('Should login successfully', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder=E-mail]').type(email);
    cy.get('input[placeholder=Senha]').type(password);
    cy.contains('Login').click();
    cy.url().should('equal', 'http://localhost:3000/plans');
  });
});
