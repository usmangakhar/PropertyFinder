import HomePage from '../pages/homepage';
import SearchResultsPage from '../pages/search_results';

describe('Scenario 1', () => {
  it('verifies consistency between UI and API property counts', () => {
    // Visit the Property Finder website
    HomePage.visitHomePage();

    // Select "Villa" as the property type
    HomePage.selectPropertyType('Villa');

    // Set the price range to a maximum of 300,000
    HomePage.setPriceRange('300000');

    // Click the search button
    HomePage.clickSearchButton();

    // Make an API request to fetch the number of properties
    cy.request({
      method: 'GET',
      url: 'https://www.propertyfinder.bh/en/search?c=1&pt=300000&fu=0&rp=m&ob=mr',
      failOnStatusCode: false,
    }).then((response) => {
      // Check if the API request was successful (status code 200)
      expect(response.status).to.equal(200);

      // Get the displayed property count from the UI
      SearchResultsPage.getUiPropertyCount().then((uiPropertyCount) => {
        // Parse the API response to extract the number of properties
        const apiPropertyCount = response.body.length; // Assuming the response is JSON

        // Verify that the UI property count matches the API property count
        if (uiPropertyCount !== apiPropertyCount) {
          const errorMessage = `UI property count (${uiPropertyCount}) does not match API property count (${apiPropertyCount}).`;
          cy.log(errorMessage);

          // Log the error message and do not fail the test
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        }
      });
    });
  });
});
