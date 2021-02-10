import { JsonRpcSchemaMap } from '@json-rpc-tools/types';
import { ChainID } from 'caip';

import * as blockchain from '../';
import { ChainConfig, NamespaceConfig, SupportedChains } from './types';

export function getNamespaceProperty<T = any>(
  chainId: string,
  property: string
): T {
  const { namespace } = ChainID.parse(chainId);
  const res = blockchain[property][namespace];
  if (!res) {
    throw new Error(`Missing ${property} for chainId: ${chainId}`);
  }
  return res;
}

export function getChainJsonRpcSchemas(chainId: string): JsonRpcSchemaMap {
  return getNamespaceProperty<JsonRpcSchemaMap>(chainId, 'jsonrpc');
}

export function getChainConfig(chainId: string): ChainConfig {
  const namespace = getNamespaceProperty<NamespaceConfig>(chainId, 'config');
  const { reference } = ChainID.parse(chainId);
  const chain = namespace[reference];
  if (!chain) {
    throw new Error(`Missing chain for chainId: ${chainId}`);
  }
  return chain;
}

export function getSupportedChains(targetNamespace?: string): SupportedChains {
  const chains: SupportedChains = {};
  Object.keys(blockchain.config).forEach((namespace: string) => {
    if (typeof targetNamespace !== 'undefined' && namespace !== targetNamespace)
      return;
    Object.keys(blockchain.config[namespace]).forEach((reference: string) => {
      const chainId = ChainID.format({ namespace, reference });
      chains[chainId] = getChainConfig(chainId);
    });
  });
  return chains;
}
