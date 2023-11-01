---
id: what-is-validium
title: What are Validiums
sidebar_label: What are Validiums?
description: "Learn about the zkEVM-based validium offering part of the Polygon CDK."
keywords:
  - docs
  - polygon
  - layer 2
  - validium
  - zkValidium
  - sdk
  - cdk
---

Validiums are solutions that process transactions off the main Ethereum network using off-chain data availability and computation. Unlike traditional rollups, Validiums don't store transaction data on the L1 network. Instead, they generate ZK proofs, which are then published as validity proofs. This approach ensures data integrity while optimizing scalability and cost.

## What do you Mean by Data Availability Layer?

In the realm of blockchain, data availability ensures that all nodes can access and verify the complete transaction history, which is crucial for maintaining the network's transparency, security, and integrity.

However, storing all transaction data on the main chain (L1) can lead to high costs and compromise privacy. Data availability layers tackle these issues by separating transaction execution from data storage. This allows for transaction data to be stored off-chain, reducing costs and enhancing privacy, while still being accessible for validation.

This separation introduces new challenges, such as ensuring the secure and reliable management of off-chain data. Features like the [<ins>DAC</ins>](#what-are-dacs) within the Polygon CDK framework address these concerns, offering trusted oversight of off-chain data.

The diagram below provides a high-level overview of the Polygon CDK Validium's approach to blockchain infrastructure.

<div align="center">
  <img src="/img/cdk/zksupernets-2.excalidraw.png" alt="bridge" width="90%" height="30%" />
</div>

## What are DACs?

Data Availability Committees (DACs) are a crucial element in many blockchain protocols, tasked with ensuring the reliability and accessibility of off-chain data. In essence, they verify the availability of data associated with specific blockchain blocks.

In the context of L2 solutions, DACs play a pivotal role in enhancing scalability. They aid in transferring significant computational work and data storage off-chain, thereby alleviating the burden on the main L1 blockchain.

The DAC is an integral element in the validium framework of the CDK, functioning as a secure consortium of nodes to maintain the accessibility and security of off-chain data. For an overview of how the DAC functions within the CDK, please explore the DAC guide, available [<ins>here</ins>](/docs/cdk/validium/dac.md).

> For a more detailed understanding of data availability, the Ethereum Foundation's guide on Data Availability is a great resource, accessible [<ins>here</ins>](https://ethereum.org/en/developers/docs/data-availability/).

## How do L2s Built with Polygon CDK Validium Function as App-chains?

Leveraging the power of Polygon's advanced [zkEVM technology](/docs/zkevm/), chains developed using the Polygon CDK offer a high-performance L2 scaling solution. Developers have the flexibility to choose the validium framework, which integrates a secure data availability layer managed by a [Data Availability Committee (DAC)](/docs/cdk/validium/dac.md). Chains built with the CDK can function like L1 blockchains tailored to specific business logic. However, as L2 solutions, they provide the advantage of near-infinite scalability. Designed with a user-centric approach, these chains prioritize core business functions and user engagement strategies without compromising on performance and scalability. The following diagram illustrates the high-level architecture of a chain developed using the Polygon CDK.

<div align="center">
  <img src="/img/cdk/zksupernets-6.excalidraw.png" alt="bridge" width="90%" height="30%" />
</div>
