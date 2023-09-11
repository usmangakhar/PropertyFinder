class PropertySearchPage {
    visitPropertyFinderWebsite() {
      cy.visit('https://www.propertyfinder.bh/');
    }
  
    searchForLocation(location) {
      cy.get('[data-testid="root"]').eq(0).type(location);
    }
  
    clickOnFirstLocationFromSearchResults() {
      cy.get('.multi-selection-autocomplete__no-suggestions')
        .first()
        .click();
    }
  
    verifyAvailableFromDateIsNotEmpty() {
      cy.get('[data-testid="property-detail-available-date"]').should('not.be.empty');
    }
  
    verifyNoLocationFoundMessage() {
      cy.log('No location found in the search results.');
    }
  }
  
  export default PropertySearchPage;
  