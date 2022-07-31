Extract the Zip Folder
nft-finder and generate image folders require no prior packages
nft_reactmint and nfttransfer_react require installation
For nft_reactmint and nfttransfer_react

Open the folder in vs code
Open a terminal and cd into the folder directory
Enter the following commands: npm install
Generate your rinkeby url from infura.io and also enter private key of your metamask wallet
Update these two parameters in your hardhat.config.js file
Enter the following commands: npx hardhat node (in a separate terminal) npx hardhat run scripts/deploy.js --network rinkeby (in a separate terminal) npm run start (in a separate terminal)
Further details are coveyed in the code video
