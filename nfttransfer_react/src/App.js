import mintAbi from "./MintedABI.json";
import {ethers, BigNumber} from "ethers";
import {useEffect, useState} from "react";

var mintedAddress = "0xB4cdb5f3e3E48607Ea5599AED15aa744cFf8899a";
var tokenAddress;
var customerAddress;
var tokenId;

function App() {
  const [accounts, setAccounts] = useState([]);

  async function connectAccounts(){
    if(window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    setAccounts(accounts);
    }
  }

  useEffect(() => {
    connectAccounts();
  }, [])

  //Transfer and Burn NFTs

  async function TransferNFTs() {
    if (window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        mintedAddress,
        mintAbi.abi,
        signer,
      );
      try {
        const response = await contract.bulkAirdropERC721transfer(tokenAddress, customerAddress, BigNumber.from(tokenId));
        console.log("response:", response);
      }
      catch (err){
        console.log("error", err);
      }
    }
  }

  function contfun() {
    var contval = document.getElementById("id2").value;
    mintedAddress = contval; 
  }

  function tokenfun() {
    var tokenval = document.getElementById("id1").value;
    tokenAddress = tokenval;
  }

  function customfun() {
    var customnval = document.getElementById("id3").value;
    customerAddress = customnval;
  }

  function transfun() {
    var tokenidval = document.getElementById("id4").value;
    tokenId = tokenidval;
    TransferNFTs();
  }

  function burnfun() {
    var newtokenidval = document.getElementById("id5").value;
    tokenId = newtokenidval;
    customerAddress = "0x98a024B8644643b92D789F95caA48BcDd33639eC";
    TransferNFTs();
  }



  return (
    <div className="App">
    <label> Enter Contract Address:<br></br><input type='text' id='id2' /></label> <button onClick = {() => {contfun()}}>Submit</button> <br></br>
    <p> Transfer NFT</p>
    <label> Enter Token Smart Contract Address:<br></br><input type='text' id='id1' /></label> <button onClick = {() => {tokenfun()}}>Submit</button> <br></br>
    <label> Enter Customer Address:<br></br><input type='text' id='id3' /></label> <button onClick = {() => {customfun()}}>Submit</button> <br></br>
    <label> Enter Token Id:<br></br><input type='text' id='id4' /></label> <button onClick = {() => {transfun()}}>Transfer NFT</button> <br></br>

    <p> BURN NFT</p>
    <label> Enter Token Smart Contract Address:<br></br><input type='text' id='id1' /></label> <button onClick = {() => {tokenfun()}}>Submit</button> <br></br>
    <label> Enter Token Id:<br></br><input type='text' id='id5' /></label> <button onClick = {() => {burnfun()}}>BURN NFT</button> <br></br>
    </div>
  );
}

export default App;
