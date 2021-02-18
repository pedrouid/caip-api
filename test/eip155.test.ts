import * as blockchain from '../src';
import {
  EIP155_JSONRPC_SCHEMAS,
  EIP155_NAMESPACE,
  EIP155_SUPPORTED_CHAINS,
  TEST_EIP155_CHAIN,
} from './shared';

describe('EIP155', () => {
  it('getChainConfig', async () => {
    const chain = blockchain.getChainConfig(TEST_EIP155_CHAIN.chainId);
    expect(chain).toBeTruthy();
    expect(chain.name).toEqual(TEST_EIP155_CHAIN.name);
    expect(chain.chainId).toEqual(TEST_EIP155_CHAIN.chainId);
    expect(chain.rpcUrl).toEqual(TEST_EIP155_CHAIN.rpcUrl);
    expect(chain.derivationPath).toEqual(TEST_EIP155_CHAIN.derivationPath);
    expect(chain.nativeAsset).toEqual(TEST_EIP155_CHAIN.nativeAsset);
  });
  it('getChainJsonRpcSchemas', async () => {
    const schemas = blockchain.getChainJsonRpcSchemas(
      TEST_EIP155_CHAIN.chainId
    );
    expect(Object.keys(schemas)).toEqual(EIP155_JSONRPC_SCHEMAS);
  });
  it('getSupportedChains', async () => {
    const chains = blockchain.getSupportedChains(EIP155_NAMESPACE);
    expect(Object.keys(chains)).toEqual(EIP155_SUPPORTED_CHAINS);
  });
});
