import { AssetMetadata, NamespaceConfig } from '../helpers';

export const ETH: AssetMetadata = {
  symbol: 'ETH',
  name: 'Ether',
  decimals: '18',
};

export const xDAI: AssetMetadata = {
  symbol: 'xDAI',
  name: 'xDAI',
  decimals: '18',
};

export const MATIC: AssetMetadata = {
  symbol: 'MATIC',
  name: 'Matic',
  decimals: '18',
};

export const EIP155Config: NamespaceConfig = {
  '1': {
    name: 'Ethereum Mainnet',
    chainId: 'eip155:1',
    rpcUrl: 'rpc.slock.it/mainnet',
    testNet: false,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: ETH,
  },
  '5': {
    name: 'Ethereum Goerli',
    chainId: 'eip155:5',
    rpcUrl: 'rpc.slock.it/goerli',
    testNet: true,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: ETH,
  },
  '10': {
    name: 'Optimism Mainnet',
    chainId: 'eip155:10',
    rpcUrl: 'mainnet.optimism.io',
    testNet: false,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: ETH,
  },
  '69': {
    name: 'Optimism Kovan',
    chainId: 'eip155:69',
    rpcUrl: 'kovan.optimism.io',
    testNet: true,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: ETH,
  },
  '100': {
    name: 'xDAI',
    chainId: 'eip155:100',
    rpcUrl: 'dai.poa.network',
    testNet: false,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: xDAI,
  },
  '137': {
    name: 'Matic Mainnet',
    chainId: 'eip155:137',
    rpcUrl: 'rpc-mainnet.matic.network',
    testNet: false,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: MATIC,
  },
  '420': {
    name: 'Optimism Goerli',
    chainId: 'eip155:420',
    rpcUrl: 'goerli.optimism.io',
    testNet: true,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: ETH,
  },
  '80001': {
    name: 'Matic Mumbai',
    chainId: 'eip155:80001',
    rpcUrl: 'rpc-mumbai.matic.today',
    testNet: true,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: MATIC,
  },
  '79377087078960': {
    name: 'Arbitrum Kovan',
    chainId: 'eip155:79377087078960',
    rpcUrl: 'kovan3.arbitrum.io/rpc',
    testNet: true,
    derivationPath: "m/44'/60'/0'/0",
    nativeAsset: ETH,
  },
};
