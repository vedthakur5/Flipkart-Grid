// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BASENFT is ERC721 {
    constructor() ERC721("Base URI NFT", "BUN") {}

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        for(uint256 i; i < quantity; i++)
            _mint(msg.sender, i);
    }

    function _baseURI() override internal view virtual returns (string memory) {
        return "ipfs://bafybeibtam4spjlf6qbskp5x74w4hmckdbu5iggprjw2csbbraoocirgj4/";
    }
}