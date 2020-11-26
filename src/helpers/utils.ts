import { ChainID } from 'caip';

import * as blockchain from '../';
import {
  ChainAuthenticator,
  ChainConfig,
  ChainSigner,
  NamespaceConfig,
  SupportedChains,
} from './types';

export function getChainProperty<T>(chainId: string, property: string): T {
  const { namespace } = ChainID.parse(chainId);
  const config = blockchain[property][namespace];

  if (!config) {
    throw new Error(`No matching ${property} for chainId: ${chainId}`);
  }
  return config;
}

export function getChainConfig(chainId: string): ChainConfig {
  const { reference } = ChainID.parse(chainId);
  const chain = getChainProperty<NamespaceConfig>(chainId, 'config')[reference];
  if (!chain) {
    throw new Error(`Invalid or unsupported chainId: ${chainId}`);
  }
  return chain;
}

export function getChainSigner(chainId: string): ChainSigner {
  return getChainProperty<ChainSigner>(chainId, 'signer');
}

export function getChainAuthenticator(chainId: string): ChainAuthenticator {
  return getChainProperty<ChainAuthenticator>(chainId, 'authenticator');
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
