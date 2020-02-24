# Udacity Blockchain Capstone

The capstone is a POC of a decentralized housing product. 

# Application libraries and versions
```
Truffle v5.1.8 (core: 5.1.8)
Solidity v0.5.12 (solc-js)
Node v10.13.0
Web3.js v1.2.1
```

# Running project steps

Clone project

Install dependencies
  ``` 
  npm install
  ```
Install Zokrates
  ```
  docker run -v /project-path-to-zokrates/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
  ```  

Code & Test Contracts
 ```
 truffle test './test/TestERC721Mintable.js'
 truffle test './test/TestSquareVerifier.js'
 truffle test './test/TestSolnSquareVerifier.js'
 ``` 

Compile and Deploy 
 Create file .secret with mnemonic then:

  ``` 
  truffle compile
  truffle migrate --reset --network rinkeby
  ``` 
  ``` 
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        6024276
   > block timestamp:     1582504641
   > account:             0x458EB4b70d1F7E1c47b8a74d2BE482d6A3f9E19F
   > balance:             2.907390045
   > gas used:            248741
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000497482 ETH

   -------------------------------------
   > Total cost:         0.000497482 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        6024278
   > block timestamp:     1582504645
   > account:             0x458EB4b70d1F7E1c47b8a74d2BE482d6A3f9E19F
   > balance:             2.904904809
   > gas used:            1215595
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.00243119 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        6024279
   > block timestamp:     1582504652
   > account:             0x458EB4b70d1F7E1c47b8a74d2BE482d6A3f9E19F
   > balance:             2.896663117
   > gas used:            4120846
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.008241692 ETH

   -------------------------------------
   > Total cost:         0.010672882 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.011170364 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x98705c


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xe68d3969ac0109df5248f157b813bff2d0e82013cf9eee04fcb50fe8b4c52d7e
   > Blocks: 0            Seconds: 8
   > contract address:    0xEBb2a69b383719B449518c11A194db7a64446f85
   > block number:        6024277
   > block timestamp:     1582504669
   > account:             0x458EB4b70d1F7E1c47b8a74d2BE482d6A3f9E19F
   > balance:             2.903382787
   > gas used:            225237
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00450474 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00450474 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x7883724608b53a3db944cceba93822dffe92ffd9e0940567ee3a598f0e4f5add
   > Blocks: 0            Seconds: 8
   > contract address:    0xfC9859801313f233653b1dA9Cc822CcBef2EA726
   > block number:        6024279
   > block timestamp:     1582504699
   > account:             0x458EB4b70d1F7E1c47b8a74d2BE482d6A3f9E19F
   > balance:             2.882682107
   > gas used:            992671
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01985342 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x7ef6c04d628a374b1f93140645417efd00a2502532f9af1db4f041974cf214dc
   > Blocks: 0            Seconds: 8
   > contract address:    0x4653f1B19e513592D273a7050fb7bDEF999697fF
   > block number:        6024280
   > block timestamp:     1582504714
   > account:             0x458EB4b70d1F7E1c47b8a74d2BE482d6A3f9E19F
   > balance:             2.812626947
   > gas used:            3502758
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.07005516 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08990858 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.09441332 ETH

  ``` 

# Mint Token
Minting tokens using MEW : https://myetherwallet.com/interface/interact-with-contract
SolnSquareVerifier address:  0x4653f1B19e513592D273a7050fb7bDEF999697fF
ABI from build/contracts:
 ```
 [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        }
      ],
      "name": "AddedSolution",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Notpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferredOwnership",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "tokenApproved",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "notpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "addSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "mintNewToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
 ```

# Open Sea assets - minting 10 tokens -
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/21
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/22
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/23
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/24
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/25
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/26
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/27
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/28
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/29
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/30

# OpenSea store
https://rinkeby.opensea.io/assets/real-state-ownership-token

# Tokens bought with different address
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/22
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/23
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/24
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/25
https://rinkeby.opensea.io/assets/0x4653f1b19e513592d273a7050fb7bdef999697ff/26


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
