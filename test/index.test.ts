import * as blockchain from '../src';
import { getChainJsonRpcSchemas } from '../src';

const TEST_ETHEREUM_CHAINID = 'eip155:1';
const TEST_COSMOS_CHAINID = 'cosmos:cosmoshub-3';
const TEST_POLKADOT_CHAINID = 'polkadot:91b171bb158e2d3848fa23a9f1c25182';

describe('getChainConfig', () => {
  it('Ethereum', async () => {
    const chain = blockchain.getChainConfig(TEST_ETHEREUM_CHAINID);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual('Ethereum Mainnet');
    expect(chain.chainId).toEqual(TEST_ETHEREUM_CHAINID);
    expect(chain.derivationPath).toEqual("m/44'/60'/0'/0");
    expect(chain.nativeAsset.symbol).toEqual('ETH');
  });
  it('Cosmos', async () => {
    const chain = blockchain.getChainConfig(TEST_COSMOS_CHAINID);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual('Cosmos Hub');
    expect(chain.chainId).toEqual(TEST_COSMOS_CHAINID);
    expect(chain.derivationPath).toEqual("m/44'/118'/0'/0");
    expect(chain.nativeAsset.symbol).toEqual('ATOM');
  });
  it('Polkadot', async () => {
    const chain = blockchain.getChainConfig(TEST_POLKADOT_CHAINID);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual('Polkadot');
    expect(chain.chainId).toEqual(TEST_POLKADOT_CHAINID);
    expect(chain.derivationPath).toEqual("m/44'/354'/0'/0");
    expect(chain.nativeAsset.symbol).toEqual('DOT');
  });
});

describe('getChainJsonRpcSchemas', () => {
  it('Ethereum', async () => {
    const schemas = getChainJsonRpcSchemas('eip155:1');
    expect(Object.keys(schemas)).toEqual([
      'eth_chainId',
      'eth_accounts',
      'eth_sign',
      'eth_signTypedData',
      'eth_signTransaction',
      'eth_sendTransaction',
      'personal_sign',
    ]);
  });
  it('Cosmos', async () => {
    const schemas = getChainJsonRpcSchemas('cosmos:cosmoshub-3');
    expect(Object.keys(schemas)).toEqual([]);
  });
  it('Polkadot', async () => {
    const schemas = getChainJsonRpcSchemas(
      'polkadot:91b171bb158e2d3848fa23a9f1c25182'
    );
    expect(Object.keys(schemas)).toEqual([]);
  });
});

describe('getSupportedChains', () => {
  it('All', async () => {
    const chains = blockchain.getSupportedChains();
    expect(Object.keys(chains)).toEqual([
      'cosmos:cosmoshub-3',
      'cosmos:kava-4',
      'eip155:1',
      'eip155:5',
      'eip155:100',
      'polkadot:91b171bb158e2d3848fa23a9f1c25182',
      'polkadot:b0a8d493285c2df73290dfb7e61f870f',
    ]);
  });
  it('Ethereum', async () => {
    const chains = blockchain.getSupportedChains('eip155');
    expect(Object.keys(chains)).toEqual(['eip155:1', 'eip155:5', 'eip155:100']);
  });
  it('Cosmos', async () => {
    const chains = blockchain.getSupportedChains('cosmos');
    expect(Object.keys(chains)).toEqual([
      'cosmos:cosmoshub-3',
      'cosmos:kava-4',
    ]);
  });
  it('Polkadot', async () => {
    const chains = blockchain.getSupportedChains('polkadot');
    expect(Object.keys(chains)).toEqual([
      'polkadot:91b171bb158e2d3848fa23a9f1c25182',
      'polkadot:b0a8d493285c2df73290dfb7e61f870f',
    ]);
  });
});
