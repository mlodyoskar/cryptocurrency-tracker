describe("Hamburger test", () => {
  it("Tries to click hamubrger on mobile view", () => {
    cy.visit("localhost:3000");
    cy.viewport("iphone-x");
    cy.get(".navbar-toggler").click();
  });
  it("Check if correct page is highlighted in navigation", () => {
    cy.visit("localhost:3000");
    cy.viewport("iphone-x");
    // cy.get(".navbar-toggler").click();
    // cy.get(".navbar-nav").blur();
  });
});
