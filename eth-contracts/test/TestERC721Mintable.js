var ERC721MintableComplete = artifacts.require('RealStateOwnershipToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            const tk1 = await this.contract.mint(account_two, 1);
            const tk2 = await this.contract.mint(account_two, 2);
            const tk3 = await this.contract.mint(account_two, 3);
            const tk4 = await this.contract.mint(account_two, 4);
            const tk5 = await this.contract.mint(account_two, 5);
            const tk6 = await this.contract.mint(account_two, 6);
            const tk7 = await this.contract.mint(account_two, 7);
            const tk8 = await this.contract.mint(account_two, 8);
            const tk9 = await this.contract.mint(account_two, 9);
            const tk10 = await this.contract.mint(account_two, 10);
         
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 10);
            
        })

        it('should get token balance', async function () { 
            
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            
        })

        it('should transfer token from one owner to another', async function () { 
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
        })

        it('should return contract owner', async function () { 
            
        })

    });
})