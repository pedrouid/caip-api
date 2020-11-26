import { NamespaceConfig } from '../helpers';

export const CosmosConfig: NamespaceConfig = {
  'cosmoshub-3': {
    name: 'Cosmos Hub',
    chainId: 'cosmos:cosmoshub-3',
    rpcUrl: 'stargate.cosmos.network',
    derivationPath: "m/44'/118'/0'/0",
    nativeAsset: {
      symbol: 'ATOM',
      name: 'Atom',
      decimals: '18',
    },
  },
  'kava-4': {
    name: 'Kava',
    chainId: 'cosmos:kava-4',
    rpcUrl: 'kava4.data.kava.io',
    derivationPath: "m/44'/459'/0'/0",
    nativeAsset: {
      symbol: 'KAVA',
      name: 'Kava',
      decimals: '18',
    },
  },
};
