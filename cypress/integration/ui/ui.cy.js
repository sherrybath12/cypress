
describe('UI tests spec', () => {
  
  it('Load NASA website', () => {
      cy.visit("https://www.nasa.gov/");
    })

  it('Verify NASA logo', () => {
      cy.get(".usa-logo").should("be.visible");
  })

  it('Verify Search box with placeholder text', () => {
    cy.get(".hds-search-panel-mobile-trigger > svg").should("be.visible");
  })

  it('Verify Image of the Day text and image', () => {
    cy.get(".margin-bottom-10 > .display-41").should("be.visible");
  })

  it('Verify disclaimer on website', () => {
    cy.get(".wp-block-nasa-blocks-news-manual > .grid-container > .margin-bottom-3 > .margin-bottom-2 > .section-heading-md").should("be.visible");
  })
})

