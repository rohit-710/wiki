---
id: pol-overview
title: Polygon Ecosystem Token
sidebar_label: Overview
description: Learn about Polygon's native token, MATIC.
keywords:
  - docs
  - polygon
  - matic
  - gas token
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

## Overview

Innovation within Polygon 2.0 includes proposals to transition the existing native token, MATIC, into a new "Polygon Ecosystem Token" or POL. As a hyper-productive asset, POL will fuel various chains, including Polygon's PoS chain and app-chains developed using the Chain Development Kit (CDK). The vision is to create a network where value exchange parallels information flow, achieved through innovative harmonization for scalability, security, and an improved user experience.

| Attribute            | Details                          |
|----------------------|----------------------------------|
| **Name**             | Polygon Ecosystem Token          |
| **Symbol**           | POL                              |
| **Initial Supply**   | 10 billion                       |
| **Purpose**          | Allows for multiple participant and network maintainer roles within the Polygon ecosystem |
| **Current Phase**    | [<ins>Goerli Testnet: 0x4f34BF3352A701AEc924CE34d6CfC373eABb186c</ins>](https://goerli.etherscan.io/address/0x4f34BF3352A701AEc924CE34d6CfC373eABb186c)    |

### Core Principles of POL

- **Security**: POL is designed to bolster the Polygon ecosystem through a decentralized approach, attracting validators to a secure network while deterring malicious activities.
  
- **Scalability**: POL supports the growth of the Polygon ecosystem, ensuring adaptability to the increasing demands of multiple Polygon chains.
  
- **Community Involvement**: POL emphasizes community participation in decision-making processes, fostering a sense of ownership.
  
- **User Experience**: POL simplifies blockchain interactions, removing potential barriers for users and developers.
  
- **Governance**: POL serves as a governance instrument, granting the Polygon community a voice in the ecosystem's trajectory.

This emphasis on community involvement underscores POL's flexibility to accommodate additional utility functions as determined by the community.

For more information, check out the [<ins>POL whitepaper</ins>](https://polygon.technology/papers/pol-whitepaper).

## Architecture

### Architecture Overview

Polygon 2.0 introduces a series of smart contracts that facilitate the transition from MATIC to POL. Each contract has a distinct role, ensuring both a smooth migration and the continued growth and security of the ecosystem. Here's a breakdown of the primary contracts:

- **Polygon Ecosystem Token (POL) Smart Contract**: 
  - Built on the ERC20 permit framework from OpenZeppelin.
  - Initializes the ecosystem with 10 billion POL tokens.
  - Contains mechanisms to control minting.

- **Polygon Migration Smart Contract**: 
  - Allows MATIC token holders to swap for POL tokens on a 1:1 basis.
  - Features an "unmigrate" function, but its use can be governed by Polygon's administration.

- **Default Emission Manager**: 
  - Designed for growth, ensuring a 2% annual increase in the POL token supply.
  - Half of this growth rewards validators.
  - The remainder supports ecosystem development.

For a detailed walkthrough of each contract, you can watch the video below:

<div style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/V2oXLbA64IE?start=633" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Token Contract

The `PolygonEcosystemToken` contract represents the new POL token on Ethereum L1. It's designed to provide a 1-to-1 representation between the new $OL and the existing $MATIC token. Additionally, it allows for controlled emission of new tokens based on specific requirements.

Key Features:

- **Token Details**: The contract establishes the POL token with the name "Polygon Ecosystem Token" and the symbol "POL".

- **Controlled Emission**: The contract has a mechanism to mint new POL tokens at a controlled rate. The initial cap is set to 10 POL tokens per second. This emission rate ensures a steady and controlled release of new tokens into the ecosystem.

- **Role-Based Access Control**: The contract uses role-based access control to ensure that only authorized entities can perform specific actions. For instance, only an account with the `EMISSION_ROLE` can mint new tokens. Similarly, the `CAP_MANAGER_ROLE` allows updating the minting cap, and the `PERMIT2_REVOKER_ROLE` manages the default max approval to the special `PERMIT2` contract.

- **Permit2 Allowance Mechanism**: The contract has a unique mechanism related to the `PERMIT2` contract. By default, the `PERMIT2` contract has full approval. However, this approval can be revoked and later manually approved if needed. This mechanism provides flexibility in managing allowances related to the `PERMIT2` contract.

- **Versioning**: The contract supports versioning, ensuring that it can be upgraded or modified in the future without disrupting its primary functionalities.

- **Safety Checks**: The contract employs various safety checks, such as ensuring valid addresses for the migration, emission manager, governance, and permit2 revoker during the contract's initialization.

### Emissions Contract

The `DefaultEmissionManager` contract is responsible for the controlled emission of the new POL tokens on Ethereum L1. It's designed to ensure a steady and predictable release of new tokens into the ecosystem, primarily to the `StakeManager` and `Treasury` contracts.

#### Key Features:

- **Controlled Emission Rate**: The contract is designed to allow for a 1% mint each year, compounded annually. This ensures a predictable and steady release of new tokens, fostering stability in the ecosystem.

- **Token Minting Mechanism**: The contract provides a mechanism for anyone to mint tokens based on the current emission rates. The minted tokens are then distributed equally between the `StakeManager` and the `Treasury` contracts. This decentralized approach to minting ensures transparency and fairness.

- **Emission Calculation**: The contract calculates the amount of tokens to be minted based on the difference between the current total supply and the new supply, which is determined by the time elapsed since the contract's deployment. This dynamic calculation ensures that the emission rate remains consistent over time.

- **Token Conversion**: After minting the POL tokens, the contract has a mechanism to convert POL tokens back to MATIC before sending them to the `StakeManager`. This ensures seamless integration with the existing MATIC ecosystem.

- **Safety Mechanisms**: The contract employs various safety checks, such as ensuring valid addresses during initialization and maintaining a constant reference to the migration contract.

- **Versioning**: The contract supports versioning, ensuring that it can be upgraded or modified in the future without disrupting its primary functionalities.

### Migration Contract

The `PolygonMigration` contract plays a pivotal role in the transition between MATIC and the new POL token on Ethereum L1. It's designed to facilitate a seamless 1-to-1 conversion process between the two tokens.

Key Features:

- **Token References**: The contract establishes immutable references to both the MATIC and POL tokens, ensuring a secure and direct conversion mechanism.

- **Migration Mechanism**: Users can migrate their MATIC tokens to POL tokens. When a user initiates this process, the contract takes the specified amount of MATIC tokens from the user and provides an equivalent amount of POL tokens in return.

- **Unmigration Mechanism**: The contract also supports the reverse process, allowing users to revert their POL tokens back to MATIC. This process is controlled by an "unmigration lock" which can be toggled by the governance. This ensures that the unmigration process can be paused or resumed based on governance decisions.

- **EIP-2612 Permit Support**: The contract supports EIP-2612 permits, allowing users to approve token transfers without separately sending an approval transaction. This makes the unmigration process more gas-efficient and user-friendly.

- **Token Burning**: Governance has the ability to burn POL tokens, effectively removing them from circulation. This mechanism can be used to manage the token's supply and value.

- **Versioning**: The contract supports versioning, ensuring that it can be upgraded or modified in the future without disrupting its primary functionalities.

- **Safety Mechanisms**: The contract employs various safety checks, such as ensuring valid addresses and managing roles and permissions. This ensures that only authorized entities can perform specific actions, enhancing the contract's security.

## Associated Polygon Improvement Proposals (PIPs)

| PIP Number | Title                                               | Description                                         |
|------------|-----------------------------------------------------|-----------------------------------------------------|
| [<ins>PIP-17</ins>](https://forum.polygon.technology/t/pip-17-polygon-ecosystem-token-pol/12912) | Polygon Ecosystem Token (POL) | This proposal introduces the Polygon Ecosystem Token (POL) and its role in the ecosystem. It emphasizes the importance of POL as a governance token, allowing the community to participate in the decision-making process. |
| [<ins>PIP-18</ins>](https://forum.polygon.technology/t/pip-18-polygon-2-0-phase-0-frontier/12913/2) | Polygon 2.0 Phase 0 - Frontier | This proposal outlines the first phase of Polygon 2.0, termed "Frontier". It focuses on the introduction of the POL token, its distribution, and the transition from MATIC to POL. The proposal also highlights the significance of community participation and the role of POL in governance. |
| [<ins>PIP-19</ins>](https://forum.polygon.technology/t/pip-19-update-polygon-pos-native-token-to-pol/12914) | Update Polygon PoS Native Token to POL | This proposal suggests updating the native token of Polygon PoS to POL. It discusses the benefits of this transition, including enhanced security, scalability, and decentralization. The proposal also touches upon the potential challenges and solutions related to the switch. |
| [<ins>PIP-24</ins>](https://forum.polygon.technology/t/pip-24-change-eip-1559-policy/13007) | Change EIP-1559 Policy | Proposes updates to the EIP-1559 burn system, including changes to the recipient address of the burn on the Polygon PoS network, and serves as a prerequisite for the implementation of Phase 0 of Polygon 2.0. |
| [<ins>PIP-25</ins>](https://forum.polygon.technology/t/pip-25-adjust-pol-total-supply/13008) | Adjust POL Total Supply | Recommends adjustments to the total supply of POL tokens. It provides a detailed breakdown of the proposed supply changes, emphasizing the importance of a balanced token economy. The proposal also discusses the potential impact on the ecosystem and the benefits of the adjustments. |
| [<ins>PIP-26</ins>](https://forum.polygon.technology/t/pip-26-transition-from-matic-to-pol-validator-rewards/13046) | Transition from MATIC to POL - Validator Rewards | This proposal suggests aligning the initial POL Validator Rewards with the original MATIC Validator Rewards Schedule, introduced during the launch of MATIC in 2020, and ending in June 2025. The idea is to adhere to the current MATIC reward schedule until June 2025 and then switch to the proposed Polygon 2.0 reward schedule. This approach aims to honor the social contract with regards to Polygon validator rewards and ensure a smooth transition to Polygon 2.0. |

## Implementation Phases

The transition from MATIC to POL is a monumental task that requires careful planning and execution. To ensure a smooth transition, the process is broken down into distinct phases, each with its own set of objectives and milestones. Here's an overview of the implementation phases:

### Phase 1: Testing and Validation

- **Objective**: Test the new contracts and ensure their robustness.
- **Details**: 
  - The initial phase involves deploying the contracts on the Goerli Testnet.
  - Rigorous testing is conducted to identify and rectify any potential issues.
  - Feedback from the community is actively sought to make necessary improvements.

### Phase 2: Mainnet Launch and Migration

- **Objective**: Launch the POL token on the Ethereum mainnet and initiate the migration process.
- **Details**: 
  - The POL token contract is deployed on the Ethereum mainnet.
  - Users can start migrating their MATIC tokens to POL.
  - Necessary tools and interfaces are provided to facilitate the migration.

### Phase 3: Ecosystem Integration

- **Objective**: Ensure that the new POL token is integrated across the Polygon ecosystem.
- **Details**: 
  - Partners, DApps, and other ecosystem participants update their systems to support the new POL token.
  - Continuous monitoring to ensure seamless integration and address any challenges.

### Phase 4: Community Engagement and Governance

- **Objective**: Foster community participation and introduce governance mechanisms.
- **Details**: 
  - Engage with the community to gather feedback and make iterative improvements.
  - Introduce governance proposals and mechanisms to allow the community to have a say in the future direction of the ecosystem.

### Phase 5: Continuous Improvement and Expansion

- **Objective**: Continuously improve the ecosystem and explore new opportunities for expansion.
- **Details**: 
  - Monitor the performance and adoption of the POL token.
  - Explore partnerships and integrations to expand the reach and utility of POL.
  - Introduce new features and improvements based on community feedback and technological advancements.
