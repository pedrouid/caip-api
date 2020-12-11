import { NamespaceConfig } from '../helpers';

export const PolkadotConfig: NamespaceConfig = {
  // eslint-disable-next-line no-useless-computed-key
  ['91b171bb158e2d3848fa23a9f1c25182']: {
    name: 'Polkadot',
    chainId: 'polkadot:91b171bb158e2d3848fa23a9f1c25182',
    rpcUrl: 'rpc.polkadot.io',
    derivationPath: "m/44'/354'/0'/0",
    nativeAsset: {
      symbol: 'DOT',
      name: 'DOT',
      decimals: '18',
    },
  },
  // eslint-disable-next-line no-useless-computed-key
  ['b0a8d493285c2df73290dfb7e61f870f']: {
    name: 'Kusama',
    chainId: 'polkadot:b0a8d493285c2df73290dfb7e61f870f',
    rpcUrl: 'kusama-rpc.polkadot.io',
    derivationPath: "m/44'/434'/0'/0",
    nativeAsset: {
      symbol: 'KSM',
      name: 'KSM',
      decimals: '18',
    },
  },
};
