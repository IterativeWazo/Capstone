pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./Verifier.sol";
import "./ERC721Mintable.sol";


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is RealStateOwnershipToken{

 Verifier verifierContract;

// TODO define a solutions struct that can hold an index & an address
   struct Solution {
        uint index;
        address resolver;
    }

// TODO define an array of the above struct
 Solution[] private solutions;


// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => Solution) private storeUniqueSolutions;


// TODO Create an event to emit when a solution is added
event AddedSolution(uint index, address resolver);


// TODO Create a function to add the solutions to the array and emit the event
function addSolution(
        uint index,
        address resolver,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
         ) public {
        Solution memory solution = Solution(index, resolver);
        solutions.push(solution);
        bytes32 hashSolution = keccak256(abi.encodePacked(a, b, c, input));
        storeUniqueSolutions[hashSolution] = solution;

        emit AddedSolution(index, resolver);
}


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly


 function mintNewToken
    (
        address to,
        uint tokenId,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public
    returns (bool)
    {
        bytes32 hashSolution = keccak256(abi.encodePacked(a, b, c, input));
        bool verifiedContract = verifierContract.verifyTx(a, b, c, input);
        require(verifiedContract, "Zero Knowledge Proof Check - Solution is not verified");
        require(storeUniqueSolutions[hashSolution].resolver == address(0), "Solution is not unique");
        addSolution(tokenId, to, a, b, c, input);
        return mint(to, tokenId);
    }
}  


























