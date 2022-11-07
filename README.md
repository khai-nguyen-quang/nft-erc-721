# Instruction

## Installation the required packages
```
npm init -y
npm install --save-dev hardhat
npx hardhat

npm install @openzeppelin/contracts
npm install dotenv --save
``` 
## Create required accounts
```
Install MetaMask wallet
Create account on Alchemy
Create dapp on Alchemy
```

## Create .env file
```
API_URL = "https://eth-goerli.alchemyapi.io/v2/your-api-key"
PRIVATE_KEY = "your-metamask-private-key"
```

## Deploy the contract
```
npx hardhat run scripts/deploys --network goerli
```