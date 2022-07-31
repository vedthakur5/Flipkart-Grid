import mintAbi from "./MintedABI.json";
import {ethers, BigNumber} from "ethers";
import {useEffect, useState} from "react";

var mintedAdress = "0xd803BD23CB9AD7c0408D74216325263DCc23fead";
var transcontract;

function App() {

  const [accounts, setAccounts] = useState([]);
  var mintAmmount = 1;
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

  async function handleMint() {
    if (window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        mintedAdress,
        mintAbi.abi,
        signer,
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmmount));
        console.log("response:", response);
      }
      catch (err){
        console.log("error", err);
      }
    }
  }

  async function ApproveTrans() {
    if (window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
      mintedAdress,
      mintAbi.abi,
      signer,
      );
      const response2 = await contract.setApprovalForAll(transcontract, true);
      console.log("response:", response2);
    }
  }

  function mintfun(){
    var val = document.getElementById("id1").value;
    mintAmmount = val;
    console.log(mintAmmount);
    handleMint();
  }

  function contfun() {
    var contval = document.getElementById("id2").value;
    mintedAdress = contval; 
  }

  function transfun() {
    var transval = document.getElementById("id3").value;
    transcontract = transval;
    ApproveTrans();
  }

  return (
    <div className="App">
      {accounts.length && (
        <div>
          {/* <button onClick = {ApproveTrans}> Approve Transaction</button> */}
          <label> Enter Contract Address:<br></br><input type='text' id='id2' /></label> <button onClick = {() => {contfun()}}>Submit</button> <br></br>
          <label> Enter Mint ammount:<br></br><input type='text' id='id1' /></label> <button onClick = {() => {mintfun()}}>Submit</button> <br></br>
          <label> Enter Transfer Contract:<br></br><input type='text' id='id3' /></label> <button onClick = {() => {transfun()}}>Submit</button>
        </div>
        )}
    </div>
  );
}

export default App;
