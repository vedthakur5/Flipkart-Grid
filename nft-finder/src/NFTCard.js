import React from 'react'

const NFTCard = ({nft}) => {
    return (
        <div>
            NFT Name {nft.name}
            NFT ID: {nft.id}
            Image: {nft.image_url}
            Description: {nft.description}
        </div>
    )
}

export default NFTCard
