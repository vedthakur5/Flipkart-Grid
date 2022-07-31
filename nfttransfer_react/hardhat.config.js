require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

networks: {
  rinkeby: {
    url: "https://rinkeby.infura.io/v3/3f13da67bf584eae92f468b915298934",
    accounts: ['a89de2f4ee4f26742dba903f92b482e1709600bb0d137a953d13e90e74607e2e']
  }
},
etherscan: {
  apiKey: "4XBGRPAYTJKSWHVB8UZ12AQH5X3CDS636B",

}
};
