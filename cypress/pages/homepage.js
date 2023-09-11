class HomePage {
    visitHomePage() {
      cy.visit('https://www.propertyfinder.bh/');
    }
  
    selectPropertyType(propertyType) {
      cy.get('.dd__head')
        .contains('.dd__text', 'Property type')
        .click({ force: true });
  
      cy.get('.dropdown-list__items')
        .contains('button', propertyType)
        .click({ force: true });
    }
  
    setPriceRange(maxPrice) {
      cy.get('.price-selector')
        .contains('.dd__label', 'Price')
        .click({ force: true });
  
      cy.get('.price-selector input.range-selector__input')
        .last()
        .type(maxPrice, { force: true });
    }
  
    clickSearchButton() {
      cy.get('.button-2').eq(1).click({ force: true });
    }
  }
  
  export default new HomePage();
  