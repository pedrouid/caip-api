import { AssetMetadata, NamespaceConfig } from '../helpers';

export const ATOM: AssetMetadata = {
  symbol: 'ATOM',
  name: 'Atom',
  decimals: '18',
};

export const IRIS: AssetMetadata = {
  symbol: 'IRIS',
  name: 'Iris',
  decimals: '18',
};

export const KAVA: AssetMetadata = {
  symbol: 'KAVA',
  name: 'Kava',
  decimals: '18',
};

export const CosmosConfig: NamespaceConfig = {
  'cosmoshub-4': {
    name: 'Cosmos Hub',
    chainId: 'cosmos:cosmoshub-4',
    rpcUrl: 'rpc.cosmos.network',
    derivationPath: "m/44'/118'/0'/0",
    nativeAsset: ATOM,
  },
  'irishub-1': {
    name: 'Irisnet',
    chainId: 'cosmos:irishub-1',
    rpcUrl: 'rpc.irisnet.org',
    derivationPath: "m/44'/566'/0'/0",
    nativeAsset: IRIS,
  },
  'kava-4': {
    name: 'Kava',
    chainId: 'cosmos:kava-4',
    rpcUrl: 'kava4.data.kava.io',
    derivationPath: "m/44'/459'/0'/0",
    nativeAsset: KAVA,
  },
};
