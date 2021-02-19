import * as blockchain from '../src';
import {
  COSMOS_JSONRPC_SCHEMAS,
  COSMOS_NAMESPACE,
  COSMOS_SUPPORTED_CHAINS,
  TEST_COSMOS_CHAIN,
} from './shared';

describe('Cosmos', () => {
  it('getChainConfig', async () => {
    const chain = blockchain.getChainConfig(TEST_COSMOS_CHAIN.chainId);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual(TEST_COSMOS_CHAIN.name);
    expect(chain.chainId).toEqual(TEST_COSMOS_CHAIN.chainId);
    expect(chain.rpcUrl).toEqual(TEST_COSMOS_CHAIN.rpcUrl);
    expect(chain.testNet).toEqual(TEST_COSMOS_CHAIN.testNet);
    expect(chain.derivationPath).toEqual(TEST_COSMOS_CHAIN.derivationPath);
    expect(chain.nativeAsset).toEqual(TEST_COSMOS_CHAIN.nativeAsset);
  });
  it('getChainJsonRpcSchemas', async () => {
    const schemas = blockchain.getChainJsonRpcSchemas(
      TEST_COSMOS_CHAIN.chainId
    );
    expect(Object.keys(schemas)).toEqual(COSMOS_JSONRPC_SCHEMAS);
  });
  it('getSupportedChains', async () => {
    const chains = blockchain.getSupportedChains(COSMOS_NAMESPACE);
    expect(Object.keys(chains)).toEqual(COSMOS_SUPPORTED_CHAINS);
  });
});
