export interface ChainData {
  name: string;
  id: string;
  rpc: string[];
  slip44: number;
  testnet: boolean;
}

export interface ChainsMap {
  [reference: string]: ChainData;
}

export interface ChainJsonRpc {
  methods: {
    chain: string[];
    accounts: string[];
    request: string[];
    sign: string[];
    [scope: string]: string[];
  };
}
