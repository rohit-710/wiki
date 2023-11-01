---
id: what-is-polygon-cdk
title: What is the Polygon Chain Development Kit?
sidebar_label: What is the Polygon CDK
description: "An introduction to Polygon CDK."
keywords:
  - docs
  - Polygon
  - chain
  - layer 2
  - development kit
  - sdk
  - cdk
  - chain development kit
---

The Polygon Chain Development Kit (CDK) is an advanced open-source framework designed for the rapid deployment of ZK-powered Layer 2 (L2) blockchains on [Ethereum](https://ethereum.org/en/). With a strong emphasis on modularity, the CDK empowers developers to either initiate new Ethereum L2 chains or seamlessly transition existing Layer 1 (L1) chains into L2s. Every chain created through the CDK is interconnected, ensuring near-instant finality, boundless scalability, and a unified liquidity pool.

Utilizing the CDK, developers can meticulously design [application-specific chains](#what-are-application-specific-blockchains) to fit their unique specifications. The CDK is designed to prioritize core business functionalities and user engagement, all while maintaining peak performance and scalability. This includes choices in the virtual machine, operational mode, data availability solutions, sequencer types, gas tokens, and more.

For example, a chain tailored for a specific application might leverage the zkEVM execution environment, adopt the ["validium"](#what-are-validiums) mode, and implement a centralized sequencer. Regardless of these individualized choices, each chain maintains flawless interoperability with all other Polygon chains, delivering a high-performance L2 scaling solution.

The diagram below provides an overview of the key components within the CDK.

:::caution The Polygon CDK at this stage defaults to the validium

As Polygon 2.0 evolves, content will be updated and expanded to reflect new configurations.
The Edge product suite is included as part of the CDK.

:::

<div align="center">
  <img src="/img/cdk/cdk-stack.excalidraw.png" alt="CDK Overview" width="75%" height="30%" />
</div>

## What are Application-Specific Blockchains?

Application-specific blockchains (app-chains) are specialized blockchain networks designed for specific tasks, providing increased efficiency compared to general-purpose blockchains. By focusing on a specific application, such as supply chain management or decentralized finance, these blockchains can eliminate unnecessary features and computational overhead, thereby increasing speed and resource efficiency. 

However, their specificity can also lead to a lack of versatility, adaptability, and potential fragmentation in the blockchain landscape. Thus, while beneficial, these blockchains must also consider scalability, interoperability, and future-proofing.

## Why Choose Polygon CDK?

Polygon CDK, integral to Polygon 2.0, reshapes blockchain infrastructure. It ensures unparalleled liquidity, optimizes performance, and facilitates seamless asset transfers, all while prioritizing user experience and data security.

### Design Principles

1. **High Modularity**: Polygon CDK offers a modular environment for ZK-powered L2 chain design. Developers can customize chains according to their needs, from choosing the execution environment to determining the gas token.

2. **Hyper-Scalability**: CDK-developed L2 chains enhance transaction speed and can be multiplied to achieve Polygon 2.0's vision of a highly scalable ecosystem.

3. **Unified Liquidity**: Ensuring fluid asset transfers across multiple chains within Polygon 2.0's L2 ecosystem, CDK-developed chains champion unified liquidity, fostering a vibrant, efficient digital economy.

4. **Independent Data Availability**: With a dedicated data availability layer and a DAC, CDK-developed chains provide robust off-chain data access and reliability. This structure, independent of Ethereum, ensures substantial data resilience and integrity.

5. **Composable Interoperability**: Thanks to the LXLY Bridge, CDK-developed chains enhance seamless interaction and asset exchange across diverse blockchains. This interoperable infrastructure cultivates an interconnected and versatile ecosystem, promoting cross-chain collaboration and interaction.

6. **Near-Instant Finality**: Chains deployed using the Polygon CDK rely on cryptographic security, ensuring transaction integrity without the need for full nodes. This approach guarantees near-instant finality and robust security.

The following diagram illustrates how CDK-developed chains fit into the overall Polygon 2.0 ecosystem.

<div align="center">
  <img src="/img/cdk/cdk-1.excalidraw.png" alt="bridge" width="85%" height="30%" />
</div>

### Key Factors for Adoption

1. **Scalability for Ethereum**: CDK-developed chains significantly scale Ethereum. They allow projects and businesses to build applications to meet their block space needs while preserving the security and integrity of the Ethereum mainnet.

2. **Business Logic Customization**: CDK-developed chains fully support the Ethereum Virtual Machine (EVM), which allows for custom gas limits, opcode compatibility, and technology integrations. This enhances flexibility in business logic design and scalability through Polygon zkEVM.

3. **Privacy Options**: CDK-developed chains enable the creation of private app chains, providing an option for those who prioritize privacy in their applications. This feature supports clients in maintaining the confidentiality of their application data while still enjoying the benefits of blockchain technology.

4. **Compliance-Oriented**: CDK-developed chains enable network sovereignty and regulatory compliance. They allow network maintainers to choose administrators who comply with local regulations, ensuring conformity to regional regulatory requirements.

5. **Extensive Web3 Support**: CDK-developed chains, being direct forks of the zkEVM stack, facilitate easy porting of services. They also leverage a comprehensive ecosystem with premium service providers offering essential tools for application integration, development, and deployment.

## How to Get Started

The CDK Validium is actively being developed, with ongoing feature enhancements and issue resolutions.
**We recommend starting with the [Quickstart guide](/docs/cdk/validium/quickstart) to gain a quick hands-on introduction to CDK Validium.**

Meanwhile, the Polygon Labs team remains at your disposal. We encourage you to connect with the team for further engagement with the [CDK Program](/docs/cdk/program.md).

:::note Flexibility and Considerations

The [CDK Program](/docs/cdk/program.md) uses the validium implementation for app-chains, targeting use cases highly reliant on robust data availability and cost-effectiveness. 

However, the framework's design flexibility enables future expansion to support rollup-based app-chains, as per evolving use case requirements.

<!--
Stay tuned for more information and please feel free to reach out to the team 
Create prompt
-->

:::
