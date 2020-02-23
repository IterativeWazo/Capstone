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





# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
