import { getContentTitle, getMetaDescription } from '../support/app.po';

import * as routeData from '../fixtures/route-data.json';

describe("demo-ngrx-helmet", () => {
  before(() => cy.visit("/"));

  it("should display display the h1 title on initial navigation", () => {
    routeData.map((data) => {
      cy.visit(data.path);
      getContentTitle().contains(data.title);
    });
  });

  it("should display display the meta description on initial navigation", () => {
    routeData.map((data) => {
      cy.visit(data.path);
      getMetaDescription().should('have.attr', 'content', data.title);
    });
  });
});
