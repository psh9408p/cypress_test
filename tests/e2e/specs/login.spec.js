// describe("MetaMask Wallet Connection and Balance Display Test", () => {
//   it("connects MetaMask wallet and displays balance", () => {
//     // MetaMask 연결 설정
//     cy.setupMetamask();
//     // 테스트할 애플리케이션 페이지로 이동
//     cy.visit("http://localhost:3000"); // 실제 애플리케이션 URL로 대체하세요.

//     // "Connect MetaMask" 버튼 클릭
//     cy.contains("Connect MetaMask").click();

//     // MetaMask에서 지갑 연결 승인
//     cy.confirmMetamaskPermissionRequest();

//     // 연결이 성공했는지 확인하기 위해 잔액 정보가 표시되는지 확인
//     cy.contains("Your balance:").should("exist");

//     // 잔액이 제대로 표시되는지 확인 (이 부분은 실제 잔액 값에 따라 달라질 수 있습니다)
//     // 이 예제에서는 단순히 잔액 정보의 존재만을 확인합니다.
//     // 특정 잔액 값을 확인하려면, 테스트 환경에 따라 적절한 검증 로직을 추가해야 할 수 있습니다.

//     // 추가: MetaMask에서 지갑 연결 해제를 테스트하려면 아래의 코드를 사용할 수 있습니다.
//     // "Disconnect MetaMask" 버튼 클릭
//     // cy.contains('Disconnect MetaMask').click();
//     // MetaMask 연결 해제 확인
//     // cy.contains('연결 X').should('exist');
//   });
// });

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

describe("Test User Login", () => {
  it("Connects with Metamask", () => {
    cy.visit("http://localhost:3000");
    // find "Connect Wallet" button and click it
    cy.contains("Connect MetaMask").click();
    // assuming there is only metamask popping up
    // always important to switch between metamask and cypress window
    cy.switchToMetamaskWindow();
    // connect to dapp
    cy.acceptMetamaskAccess().should("be.true");
    cy.confirmMetamaskSignatureRequest();
    // switch back to cypress window (your dApp)
    cy.switchToCypressWindow();
    // check UI change
    cy.contains("...").should("be.visible");
  });
});
