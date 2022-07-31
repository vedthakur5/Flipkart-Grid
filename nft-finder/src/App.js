import {useEffect, useState} from 'react';
import NFTContainer from "./NFTContainer";

function App() {
  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts, setNfts] = useState([])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0])
    }
  }

  const getNFTData = async () => {
    if (!walletAddress) return;
    const response = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&offset=0&limit=50`)
    const data = await response.json()
    setNfts(data.assets)
  }

  useEffect(() => {
    getNFTData()
  }, [walletAddress])

  return (
    <div className="App">
     <div className="text">
      <h1> VIEW YOUR NFT</h1>
       Account: {walletAddress}
     </div>
      <button className = 'connect-button' onClick = {connectWallet}>
        Connect Wallet
      </button>
      <NFTContainer nfts={nfts} />
    </div>
  );
}

export default App;
