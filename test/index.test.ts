import {
  apiGetChainData,
  apiGetChainNamespace,
  apiGetChainJsonRpc,
  ChainData,
} from '../src';

const TEST_CHAIN_NAMESPACE = 'eip155';
const TEST_CHAIN_REFERENCE = '1';
const TEST_CHAIN_ID = TEST_CHAIN_NAMESPACE + ':' + TEST_CHAIN_REFERENCE;

function expectEthereumMainnet(chain: ChainData) {
  expect(chain.name).toBe('Ethereum Mainnet');
  expect(chain.id).toBe(TEST_CHAIN_ID);
  expect(chain.slip44).toBe(60);
  expect(chain.testnet).toBe(false);
}

describe('caip-api', () => {
  describe('eip155', () => {
    it('apiGetChainData', async () => {
      const result = await apiGetChainData(TEST_CHAIN_ID);
      expect(result).toBeTruthy();
      expectEthereumMainnet(result);
    });
    it('apiGetChainNamespace', async () => {
      const result = await apiGetChainNamespace(TEST_CHAIN_NAMESPACE);
      expect(result).toBeTruthy();
      expect(Object.keys(result).length).toBeGreaterThan(1);
      const chain = result[TEST_CHAIN_REFERENCE];
      expectEthereumMainnet(chain);
    });
    it('apiGetChainJsonRpc', async () => {
      const result = await apiGetChainJsonRpc(TEST_CHAIN_NAMESPACE);
      expect(result).toBeTruthy();
      expect(result.methods).toBeTruthy();
      expect(result.methods.chain).toBeTruthy();
      expect(Array.isArray(result.methods.chain)).toBeTruthy();
      expect(result.methods.accounts).toBeTruthy();
      expect(Array.isArray(result.methods.accounts)).toBeTruthy();
      expect(result.methods.request).toBeTruthy();
      expect(Array.isArray(result.methods.request)).toBeTruthy();
      expect(result.methods.sign).toBeTruthy();
      expect(Array.isArray(result.methods.sign)).toBeTruthy();
    });
  });
});
