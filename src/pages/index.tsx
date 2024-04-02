import React, { useEffect, useState } from "react";
import web3provider from "@/web3";

function Home() {
  const [balance, setBalance] = useState("");
  const [web3, setWeb3] = useState(web3provider);
  const [accounts, setAccounts] = useState([]);

  // console.log(web3, accounts);

  const connectWallet = async () => {
    if (window?.ethereum) {
      try {
        const accounts = await web3?.eth.getAccounts();
        // console.log(accounts[0], "acc");

        setWeb3(web3provider);
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // MetaMask 연결 끊기 (애플리케이션 상태 초기화)
  const disconnectWallet = () => {
    setWeb3(null);
    setAccounts([]);
    // 사용자에게 MetaMask 연결을 끊으라는 메시지를 표시할 수 있습니다.
    alert("Disconnect your wallet from MetaMask!");
  };

  useEffect(() => {
    const getBalance = async () => {
      const accounts = await web3?.eth.getAccounts();

      const balance = await web3?.eth.getBalance(accounts[0]);
      setBalance(web3?.utils.fromWei(balance, "ether"));
    };

    const getAccounts = async () => {
      const accounts = await web3?.eth.getAccounts();
      // console.log(accounts[0], "acc");

      // setWeb3(web3);
      setAccounts(accounts);
    };

    getAccounts();
    getBalance();
  }, [accounts]);

  return (
    <>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <button
          onClick={disconnectWallet}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginRight: "20px", // 버튼 사이의 간격 조정
            backgroundColor: "#f44336", // 색상은 원하는 대로 조정
            color: "white", // 글자색
            border: "none",
            borderRadius: "5px",
          }}
        >
          Disconnect MetaMask
        </button>
        <button
          onClick={connectWallet}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#4CAF50", // 색상은 원하는 대로 조정
            color: "white", // 글자색
            border: "none",
            borderRadius: "5px",
          }}
        >
          Connect MetaMask
        </button>
      </div>
      <div>{accounts ? `Your balance: ${balance} ETH` : "연결 X"}</div>;
    </>
  );
}

export default Home;
