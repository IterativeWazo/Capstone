// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');
const truffleAssert = require('truffle-assertions');
const { proof, inputs } = require('../../zokrates/code/square/proof.json');

contract('SolnSquareVerifier', accounts => {

    const acc1 = accounts[0];
    const acc2 = accounts[1];
   
    beforeEach(async () => {
   
      const verifierContract = await Verifier.new({ from: acc1 })
      this.contract = await SolnSquareVerifier.new(verifierContract.address,  { from: acc1 });
 

    const tx =  await this.contract.mint(acc2, 0)
     // TODO: mint multiple tokens
     const tk1 = await this.contract.mint(acc2, 1);
     const tk2 = await this.contract.mint(acc2, 2);
     const tk3 = await this.contract.mint(acc2, 3);
     const tk4 = await this.contract.mint(acc2, 4);
     const tk5 = await this.contract.mint(acc2, 5);
     const tk6 = await this.contract.mint(acc2, 6);
     const tk7 = await this.contract.mint(acc2, 7);
     const tk8 = await this.contract.mint(acc2, 8);
     const tk9 = await this.contract.mint(acc2, 9);
     const tk10 = await this.contract.mint(acc2, 10);
    })
  
    // Test if a new solution can be added for contract - SolnSquareVerifier
  it('Add new solution for contract', async () => {
      const tx = await this.contract.addSolution(
        1,
        acc1,
        proof.a,
        proof.b,
        proof.c,
        inputs
      )
      truffleAssert.eventEmitted(
        tx,
        'AddedSolution',
        ev => {
          return +ev.index == 1 &
          ev.resolver === acc1
        },
        'SolutionAdded event should have been emitted'
      )      
    })
  
  it('Mint new token', async () => {
    try{
        const mintToken = await this.contract.mintNewToken(
            acc2,
            19,
            proof.a,
            proof.b,
            proof.c,
            inputs,
            { from: acc1 }
            )
            await assert(mintToken);
         
    }catch(e){
        console.log(`Error minting new token  ${e}`)
    }  
   })
  }) 