require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

networks: {
  rinkeby: {
    url: "https://rinkeby.infura.io/v3/35487f6a953c46529248da19901f8cb7",
    accounts: ['a89de2f4ee4f26742dba903f92b482e1709600bb0d137a953d13e90e74607e2e']
  }
},
etherscan: {
  apiKey: "4XBGRPAYTJKSWHVB8UZ12AQH5X3CDS636B",

}
};
