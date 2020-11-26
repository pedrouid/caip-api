import * as blockchain from '../src';

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
