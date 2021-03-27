/// <reference path="../support/index.ts" />

const loadCourses = () => {
  cy.intercept('GET', 'http://localhost:8080/courses', {
    fixture: 'api/cards/courses.fixture.json',
  }).as('courses');
};

const loadSessions = () => {
  cy.intercept('GET', 'http://localhost:8080/sessions/?courseId=1', {
    fixture: 'api/cards/sessions.fixture.json',
  }).as('sessions');
};

describe('THINKO TEST APPLICATION', () => {
  beforeEach(() => {
    loadCourses();
    cy.visit('/');
  });
  describe('Check CARDS page behaviours', () => {
    it('Should render cards with courses information once course has been selected', () => {
      cy.wait(['@courses']);
      loadSessions();
      cy.get('[ng-reflect-message="Configuración"]').click();
      cy.get(
        '.margin > .mat-form-field-wrapper > .mat-form-field-flex'
      ).click();
      cy.get('#mat-option-2').click();
      cy.get('.save-button').click();
      cy.wait(['@sessions']);
      cy.get('.cancel-button > span').click();

      cy.get('[ng-reflect-title="3"] > .mat-card').should('be.visible');
      cy.get(
        '[ng-reflect-title="3"] > .mat-card > .content > .title > span'
      ).should('contain.text', '3º Trimestre');
      cy.get(
        '[ng-reflect-title="3"] > .mat-card > .content > .seen > span'
      ).should('contain.text', '0 / 12');

      cy.get('[ng-reflect-title="2"] > .mat-card').click();

      cy.get('.breadcrumbs > span').should('contain.text', 'Atrás');
      cy.get(':nth-child(1) > [style="flex-grow: 100;"] > .name').should(
        'contain.text',
        'Ordinales'
      );
      cy.get(':nth-child(1) > div.ng-star-inserted > .mat-icon').click();
      cy.get('text.ng-star-inserted > [x="115"]').should('contain.text', '8');
      cy.get('.seen > span').should('contain.text', '1 / 12');

      cy.get(':nth-child(3) > [style="flex-grow: 100;"]').click();
      cy.get('.selected')
        .should('have.css', 'background-color')
        .and('equal', 'rgb(242, 108, 72)');
      cy.url().should('include', '2/detail');

      cy.get('.breadcrumbs > .mat-icon').click();
      cy.url().should('include', 'home');
    });
  });
});
