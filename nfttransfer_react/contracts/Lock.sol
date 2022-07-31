// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

// Import this file to use console.log
import "hardhat/console.sol";

interface IERC721 {
  function safeTransferFrom(address from, address to, uint256 tokenId) external;
}

contract BulkAirdrop {

  function bulkAirdropERC721transfer(IERC721 _token, address _to, uint256 _id) public {
      _token.safeTransferFrom(msg.sender, _to, _id);
  }

    function bulkAirdropERC721burn(IERC721 _token, address _to, uint256 _id) public {
            _token.safeTransferFrom(msg.sender, _to, _id);
  }

}