var ERC721MintableComplete = artifacts.require('RealStateOwnershipToken');

contract('TestERC721Mintable', accounts => {

    const acc1 = accounts[0];
    const acc2 = accounts[1];
    const acc3 = accounts[3];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: acc1});

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

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 10);
            
        })

        it('should get token balance', async function () { 
            const balance = await this.contract.balanceOf(acc2);
            assert.equal(balance, 10); 
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const uri = await this.contract.tokenURI(1)
            assert.equal( uri,'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1');      
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom( acc2,acc3, 1, { from: acc2}  )

            assert.equal(await this.contract.ownerOf(1),acc3);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: acc1});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(acc2, 1, { from: acc2 })
              } catch (e) {
                assert(e.message.includes('Only owner'))
              } 
        })

        it('should return contract owner', async function () { 
            assert.equal(await this.contract.owner.call(), acc1)
        })

    });
})