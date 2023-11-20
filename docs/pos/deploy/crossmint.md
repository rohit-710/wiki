---
id: crossmint
title: How to Deploy a Smart Contract Using Crossmint
sidebar_label: Using Crossmint
description: "Lean how to deploy smart contracts on Polygon PoS using Crossmint."
keywords:
  - docs
  - matic
  - polygon
  - Crossmint
  - create smart contract
  - deploy on polygon
image: https://wiki.polygon.technology/img/polygon-logo.png
---

:::caution Content disclaimer

Please view the third-party content disclaimer [<ins>here</ins>](https://github.com/0xPolygon/wiki/blob/master/CONTENT_DISCLAIMER.md).

:::

Crossmint is the leading enterprise-grade web3 development platform, allowing you to build NFT applications without requiring any blockchain experience or holding cryptocurrency, and making the blockchain invisible to end users. The platform offers a one-stop-shop for most of your NFT infrastructure needs across all major chains, including creating, distributing, selling, storing digital assets, and offering post-mint utility. 

To create a new smart contract using Crossmint's Developer Console, follow the steps below.
> Crossmint has two Developer Console environments, they are, **Staging** which works with contracts deployed on a Testnet and **Production** which works with contracts deployed on a Mainnet. Please use the Staging environment to familiarize yourself with Crossmint before proceeding with the Production environment. 

1. Navigate to the [Crossmint's Developer Console page:](https://staging.crossmint.com/console/overview/?utm_source=backlinks)

  ![img](/img/Crossmint/screenshot1.jpg)

  > You need to create a developer account on Crossmint using your email Id before proceeding with the above step. 

2. Click on Collections on the top navbar.

  ![img](/img/Crossmint/screenshot2.png)
4. Click on "New Collection" to create a new collection on your console.
5. Enter the collection information 
   - `Collection name`: The name of your contract and NFT Collection
   - `Description`: The description of your contract and NFT Collection
   - `Website`: The website of your project
   - `Twitter`: Twitter URL of your project
   - `Discord`: Invite link for your Discord server
   - Also upload the cover image for your NFT Collection and your contract. 

  ![img](/img/Crossmint/screenshot3.png)
6. Click on "Create a new contract" to create a new NFT contract.

  ![img](/img/Crossmint/screenshot4.png)
7. Select the preferred use-case for your collection. You can select both if you wish to do so and this can be changed later. 

  ![img](/img/Crossmint/screenshot5.png)
8. Select your blockchain as Polygon.

  ![img](/img/Crossmint/screenshot6.png)
9. Configure your Payment settings
   - `NFT Price`: The price per NFT in MATIC
   - `Recipient address`: Enter the address where you want to receive the revenue from the sales of the NFTs.

  ![img](/img/Crossmint/screenshot7.png)
10. Review the details of your collection and click on "Deploy contract"

  ![img](/img/Crossmint/screenshot8.png)
11. Now you can upload your NFTs along with their metadata

  ![img](/img/Crossmint/screenshot9.png)
For additional information on Deploy, please refer [Crossmint’s documentation](https://docs.crossmint.com/docs/create-an-nft-collection/?utm_source=backlinks).

---

## Verify the Contract

Contracts deployed to [Polygon](https://docs.crossmint.com/docs/minting-quickstart/?utm_source=backlinks) are automatically verified by **Crossmint**. You can check the status on the Polygonscan. 

---

### Need help?

If you have any questions or encounter any issues during the process, **please reach out to the [official Crossmint support](https://help.crossmint.com/hc/en-us/?utm_source=backlinks) or reach out to us on our [official Discord server](https://discord.com/invite/crossmint/?utm_source=backlinks)**.
