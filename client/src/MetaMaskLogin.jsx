import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { jsNumberForAddress } from '@metamask/jazzicon';

const MetaMaskLogin = ({ onConnect }) => {
  const [account, setAccount] = useState(null);
  
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length !== 0) {
        const acc = accounts[0];
        setAccount(acc);
        onConnect(web3);
      }
    }
  };

  const connectWallet = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      const web3 = new Web3(provider);
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const acc = accounts[0];
      setAccount(acc);
      onConnect(web3);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div>
      {account ? (
        <div>
          <p>Connected with {account}</p>
          <img
            src={`https://robohash.org/${account}`}
            alt="account avatar"
            width="50"
            height="50"
          />
        </div>
      ) : (
        <button onClick={connectWallet}>Connect to MetaMask</button>
      )}
    </div>
  );
};

export default MetaMaskLogin;