class SearchResultsPage {
    getUiPropertyCount() {
      return cy.get('.styles_container__KcjEg').invoke('text').then((uiPropertyCountText) => {
        return parseInt(uiPropertyCountText.replace(/\D+/g, ''));
      });
    }
  }
  
  export default new SearchResultsPage();
  