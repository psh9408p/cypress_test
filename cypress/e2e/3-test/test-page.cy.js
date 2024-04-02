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
    // case3
    const longInput = "이 문장은 10자리를 넘어버렸어";

    cy.get("input").type(longInput);
    cy.get("button").click();
    cy.get("p").should("contain", "할 일은 10자리를 넘길 수 없습니다.");
  });
});
// describe("MetaMask 연결 테스트", () => {
//   beforeEach(() => {
//     cy.visit("/"); // dapp 사이트 방문
//   });

//   it("MetaMask 연결", () => {
//     // MetaMask 연결 버튼 클릭
//     cy.contains("Connect MetaMask").click();

//     // MetaMask와 상호작용
//     cy.connectMetaMask();
//     cy.acceptMetaMaskAccess();

//     // 계정 정보 및 잔액 확인
//     cy.get("div").contains("Your balance:").should("exist");
//     cy.get("div").contains("ETH").should("exist");
//   });

//   it("MetaMask 연결 해제", () => {
//     // MetaMask 연결
//     cy.contains("Connect MetaMask").click();
//     cy.connectMetaMask();
//     cy.acceptMetaMaskAccess();

//     // 연결 해제 버튼 클릭
//     cy.contains("Disconnect MetaMask").click();

//     // 연결 해제 확인
//     cy.get("div").contains("연결 X").should("exist");
//   });
// });
