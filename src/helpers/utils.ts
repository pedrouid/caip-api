import { ChainID } from 'caip';

import * as blockchain from '../';
import { ChainConfig, SupportedChains } from './types';

export function getChainConfig(chainId: string): ChainConfig {
  const { namespace, reference } = ChainID.parse(chainId);
  const chain = blockchain.config[namespace][reference];
  if (!chain) {
    throw new Error(`Invalid or unsupported chainId: ${chainId}`);
  }
  return chain;
}

export function getSupportedChains(): SupportedChains {
  const chains: SupportedChains = {};
  Object.keys(blockchain.config).forEach((namespace: string) => {
    Object.keys(blockchain.config[namespace]).forEach((reference: string) => {
      const chainId = ChainID.format({ namespace, reference });
      chains[chainId] = getChainConfig(chainId);
    });
  });
  return chains;
}
