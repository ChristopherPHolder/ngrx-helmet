import { getContentTitle, getMetaDescription } from '../support/app.po';

describe("demo-ngrx-helmet", () => {
  before(() => cy.visit("/"));

  it("should display display the h1 title on initial navigation", () => {
    cy.visit('/static-content');
    getContentTitle().contains('Root Route With Static Content Demo');

    cy.visit('/dynamic-content');
    getContentTitle().contains('Root Route With Dynamic Content Demo');

    cy.visit('/sub-route/static-content');
    getContentTitle().contains('First Child Route With Static Content Demo');

    cy.visit('/sub-route/dynamic-content');
    getContentTitle().contains('First Child Route With Dynamic Content Demo');

    cy.visit('/sub-route/sub-route/static-content');
    getContentTitle().contains('Second Child Route With Static Content Demo');

    cy.visit('/sub-route/sub-route/dynamic-content');
    getContentTitle().contains('Second Child Route With Dynamic Content Demo');
  });


  it("should display display the meta description on initial navigation", () => {
    cy.visit('/static-content');
    getMetaDescription().should('have.attr', 'content', 'Root Route With Static Content Demo');

    cy.visit('/dynamic-content');
    getMetaDescription().should('have.attr', 'content', 'Root Route With Dynamic Content Demo');

    cy.visit('/sub-route/static-content');
    getMetaDescription().should('have.attr', 'content', 'First Child Route With Static Content Demo');

    cy.visit('/sub-route/dynamic-content');
    getMetaDescription().should('have.attr', 'content', 'First Child Route With Dynamic Content Demo');

    cy.visit('/sub-route/sub-route/static-content');
    getMetaDescription().should('have.attr', 'content', 'Second Child Route With Static Content Demo');

    cy.visit('/sub-route/sub-route/dynamic-content');
    getMetaDescription().should('have.attr', 'content', 'Second Child Route With Dynamic Content Demo');
  });
});
