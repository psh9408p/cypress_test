describe("TODO 테스트코드", () => {
  it("TODO INPUT TEST", () => {
    cy.visit("/test");
    // cy.get("[data-cy=todoInput]").as("todoInput");
    // cy.get("@todoInput").type("~~~");

    // case1
    cy.get("input").type("   ");
    cy.get("button").click();
    cy.get("ul").children().should("have.length", 0);

    // case2
    cy.get("input").clear();
    cy.get("button").click();
    cy.get("ul").children().should("have.length", 0);
  });
});
