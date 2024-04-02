import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // 브라우저에서 실행되며, 메타마스크가 설치되어 있는 경우
  web3 = new Web3(window.ethereum);
  try {
    // 사용자에게 계정 액세스 권한 요청
    window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.error("User denied account access");
  }
} else {
  // 서버에서 실행되거나, 메타마스크가 설치되어 있지 않은 경우
  const provider = new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY"
  );
  web3 = new Web3(provider);
}

export default web3;
