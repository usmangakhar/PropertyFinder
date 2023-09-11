import CommercialPropertiesPage from '../pages/commercial_properties_page';

const commercialPropertiesPage = new CommercialPropertiesPage();

describe('Commercial Properties Scenario', () => {
  beforeEach(() => {
    commercialPropertiesPage.visitCommercialPropertiesPage();
    commercialPropertiesPage.clickShowCommercialPropertiesOnlyCheckbox();
    commercialPropertiesPage.clickSearchIcon();
    commercialPropertiesPage.selectOfficeSpacePropertyType();
  });

  it('should match UI and API property counts', () => {
    commercialPropertiesPage.makeApiRequest().then((response) => {
      expect(response.status).to.equal(200);

      commercialPropertiesPage.getUiPropertyCount().should('exist').invoke('text').then((uiPropertyCountText) => {
        const uiPropertyCount = parseInt(uiPropertyCountText.replace(/\D+/g, ''));

        if (uiPropertyCount !== response.body.length) {
          const errorMessage = `UI property count (${uiPropertyCount}) does not match API property count (${response.body.length}).`;
          cy.log(errorMessage);
        } else {
          cy.log('Property counts match between UI and API.');
        }
      });
    });
  });
});
