import * as blockchain from '../src';
import {
  POLKADOT_JSONRPC_SCHEMAS,
  POLKADOT_NAMESPACE,
  POLKADOT_SUPPORTED_CHAINS,
  TEST_POLKADOT_CHAIN,
} from './shared';

describe('Polkadot', () => {
  it('getChainConfig', async () => {
    const chain = blockchain.getChainConfig(TEST_POLKADOT_CHAIN.chainId);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual(TEST_POLKADOT_CHAIN.name);
    expect(chain.chainId).toEqual(TEST_POLKADOT_CHAIN.chainId);
    expect(chain.rpcUrl).toEqual(TEST_POLKADOT_CHAIN.rpcUrl);
    expect(chain.testNet).toEqual(TEST_POLKADOT_CHAIN.testNet);
    expect(chain.derivationPath).toEqual(TEST_POLKADOT_CHAIN.derivationPath);
    expect(chain.nativeAsset).toEqual(TEST_POLKADOT_CHAIN.nativeAsset);
  });
  it('getChainJsonRpcSchemas', async () => {
    const schemas = blockchain.getChainJsonRpcSchemas(
      TEST_POLKADOT_CHAIN.chainId
    );
    expect(Object.keys(schemas)).toEqual(POLKADOT_JSONRPC_SCHEMAS);
  });
  it('getSupportedChains', async () => {
    const chains = blockchain.getSupportedChains(POLKADOT_NAMESPACE);
    expect(Object.keys(chains)).toEqual(POLKADOT_SUPPORTED_CHAINS);
  });
});
