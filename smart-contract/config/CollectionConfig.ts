import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'GlitchGenesis',
  tokenName: 'GlitchGenesis',
  tokenSymbol: 'GTC',
  hiddenMetadataUri: 'ipfs://QmVdx73bjehNSSczPfAm7puDjBGDjrYnAPwsxkHLpHjxns/Hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x6Bbacc2cF1a94768a7786c08fd3252ec0b30595E",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
