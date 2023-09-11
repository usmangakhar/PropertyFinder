class CommercialPropertiesPage {
    visitCommercialPropertiesPage() {
      cy.visit('https://www.propertyfinder.bh/');
    }
  
    clickShowCommercialPropertiesOnlyCheckbox() {
      cy.get('#commercial-checkbox-bottom').check({ force: true });
    }
  
    clickSearchIcon() {
      cy.get('.button-2').eq(1).click({ force: true });
    }
  
    selectOfficeSpacePropertyType() {
      cy.get('[data-testid="filters-form-dropdown-property-type"]').click({ force: true });
      cy.get('[data-testid="dropdown-content"]')
        .contains('button', 'Office Space')
        .click({ force: true });
    }
  
    makeApiRequest() {
      return cy.request({
        method: 'GET',
        url: 'https://www.propertyfinder.bh/en/search?c=3&fu=0&ob=mr&page=1',
        failOnStatusCode: false,
      });
    }
  
    getUiPropertyCount() {
      return cy.get('.styles_container__KcjEg');
    }
  }
  
  export default CommercialPropertiesPage;
  