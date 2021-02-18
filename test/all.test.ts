import * as blockchain from '../src';
import { ALL_SUPPORTED_CHAINS } from './shared';

describe('All', () => {
  it('getSupportedChains', async () => {
    const chains = blockchain.getSupportedChains();
    expect(Object.keys(chains)).toEqual(ALL_SUPPORTED_CHAINS);
  });
});
