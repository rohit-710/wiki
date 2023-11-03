---
id: zkevmbridge-guides
title: Deploy The zkEVM Bridge
sidebar_label: Deploy zkEVM Bridge
description: A guide to deploying polygonZKEVMBridge.sol smart contract by following code examples in a repo.
keywords:
  - docs
  - polygon
  - developer
  - guides
  - zkEVM
  - smart contract
  - bridge
  - deploy
---

Deploy the `polygonZKEVMBridge.sol` to **bridge** and **claim** various asset-types.

Follow our `code-examples` on how to bridge, using the _message layer_ that `polygonZKEVMBridge.sol` implements.

The `code-examples` are,

- `customERC20-bridge-example` to bridge an ERC20.

- `pingPongExample` to bridge messages between networks.

- `rwaERC20-bridge-example` to bridge an Real World Asset ERC20.

- `zkevm-nft-bridge-example` to bridge NFTs.

The **_general procedure_** for each of these examples is as follows:

**Step 1:** Clone the repo [here](https://github.com/0xPolygonHermez/code-examples/tree/main).

**Step 2:** Start on the `code-examples` directory. Switch directory to the specific example.

For instance, `cd zkevm-nft-bridge-example`

**Step 3:** Run the command:

```bash
npm i
cp .env.example .env
```

**Step 4:** Switch directory to deployment. i.e., `cd deployment`

**Step 5:** Run the command:

```bash
npm run deploy:nftBridge:goerli
```

**Step 6:** Verify contracts with:

```bash
npm run verify:nftBridge:goerli
npm run verify:nftBridge:polygonZKEVMTestnet
```

**Step 7:** Use provided scripts to _bridge_,

```bash
npm run bridge:MockERC20:goerli
```

and _claim_ once the message has reached the other Layer,

```bash
npm run claim:MockERC20:polygonZKEVMTestnet
```