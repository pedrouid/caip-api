import { NamespaceConfig } from '../helpers';

export const EIP155Config: NamespaceConfig = {
  '1': {
    name: 'Ethereum Mainnet',
    chainId: 'eip155:1',
    rpcUrl: 'rpc.slock.it/mainnet',
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: {
      symbol: 'ETH',
      name: 'Ether',
      decimals: '18',
    },
  },
  '5': {
    name: 'Goerli',
    chainId: 'eip155:5',
    rpcUrl: 'rpc.slock.it/goerli',
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: {
      symbol: 'ETH',
      name: 'Ether',
      decimals: '18',
    },
  },
  '100': {
    name: 'xDAI',
    chainId: 'eip155:100',
    rpcUrl: 'dai.poa.network',
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: {
      symbol: 'xDAI',
      name: 'xDAI',
      decimals: '18',
    },
  },
};
