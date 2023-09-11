import PropertySearchPage from '../pages/property_search_page';

const propertySearchPage = new PropertySearchPage();

describe('Search for Property by Location', () => {
  beforeEach(() => {
    propertySearchPage.visitPropertyFinderWebsite();
  });

  it('should search for "The Bahrain Bay" location and verify "Available from date"', () => {
    const locationToSearch = 'The Bahrain Bay';

    propertySearchPage.searchForLocation(locationToSearch);

    // Wait for the search results to appear
    cy.get('.multi-selection-autocomplete__no-suggestions').then((suggestions) => {
      if (suggestions.length === 0) {
        // No search results found for the location
        propertySearchPage.verifyNoLocationFoundMessage();
      } else {
        // Click on the first location from the search results
        propertySearchPage.clickOnFirstLocationFromSearchResults();

        // Verify that the "Available from date" is not empty
        propertySearchPage.verifyAvailableFromDateIsNotEmpty();
      }
    });
  });
});
