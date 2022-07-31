1) Extract the Zip Folder
2) nft-finder and generate image folders require no prior packages
3) nft_reactmint and nfttransfer_react require installation

For nft_reactmint and nfttransfer_react
1) Open the folder in vs code
2) Open a terminal and cd into the folder directory
3) Enter the following commands:
	npm install
4) Generate your rinkeby url from infura.io and also enter private key of your metamask wallet
5) Update these two parameters in your hardhat.config.js file
6) Enter the following commands:
	npx hardhat node (in a separate terminal)
	npx hardhat run scripts/deploy.js --network rinkeby (in a separate terminal)
	npm run start (in a separate terminal)
7) Further details are coveyed in the code video
	