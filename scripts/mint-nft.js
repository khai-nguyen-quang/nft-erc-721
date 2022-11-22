require('dotenv').config()
const ethers = require('ethers');

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', process.env.API_KEY);

// Create a signer
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const abi = contract.abi;
const contractAddress = process.env.CONTRACT_ADDR;

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)



// NFT Metadata IPFS URL
const tokenURI = "https://gateway.pinata.cloud/ipfs/QmWvrvvMbeAhSkG3kDpgiDxvYhQchYbLbxXZZTZkccAZf5"


// Function to mint NFT
const minNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenURI);
    await nftTxn.wait();

    console.log(`NFT is minted! Check it out at : https://goerli.etherscan.io/tx/${nftTxn.hash}`);
    console.log(`Goto https://testnets.opensea.io and search for Contract address`);
}

minNFT()
.then(
    () => process.exit(0)
)
.catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
);

