import { JsonRpcConfig } from '@json-rpc-tools/utils';

export interface AssetMetadata {
  symbol: string;
  name: string;
  decimals: string;
}

export interface ChainConfig {
  name: string;
  chainId: string;
  rpcUrl: string;
  derivationPath: string;
  nativeAsset: AssetMetadata;
}

export type ChainJsonRpc = JsonRpcConfig;

export interface NamespaceConfig {
  [reference: string]: ChainConfig;
}

export interface SupportedChains {
  [chainId: string]: ChainConfig;
}

export declare namespace Ethereum {
  export interface AssetData {
    symbol: string;
    name: string;
    decimals: string;
    contractAddress: string;
    balance?: string;
  }

  export interface Transaction {
    timestamp: string;
    hash: string;
    from: string;
    to: string;
    nonce: string;
    gasPrice: string;
    gasUsed: string;
    fee: string;
    value: string;
    input: string;
    error: boolean;
    asset: AssetData;
    operations: Operation[];
  }

  export interface Operation {
    asset: AssetData;
    value: string;
    from: string;
    to: string;
    functionName: string;
  }

  export interface GasPrice {
    time: number;
    price: number;
  }

  export interface GasPrices {
    timestamp: number;
    slow: GasPrice;
    average: GasPrice;
    fast: GasPrice;
  }

  export interface GasGuzzler {
    address: string;
    pct: number;
    gasused: number;
    id: string;
  }

  export interface MethodArgument {
    type: string;
  }

  export interface Method {
    signature: string;
    name: string;
    args: MethodArgument[];
  }
}
