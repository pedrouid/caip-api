import axios, { AxiosInstance } from 'axios';

import { ChainData, ChainsMap, ChainJsonRpc } from './types';

const api: AxiosInstance = axios.create({
  baseURL: 'https://blockchain-api.xyz',
  timeout: 30000, // 30 secs
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export async function apiGetChainData(chainId: string): Promise<ChainData> {
  const { data } = await api.get(`/api/chain/${chainId}`);
  return data;
}

export async function apiGetChainNamespace(
  namespace: string
): Promise<ChainsMap> {
  const { data } = await api.get(`/api/namespace/${namespace}`);
  return data;
}

export async function apiGetChainJsonRpc(
  chainId: string
): Promise<ChainJsonRpc> {
  const { data } = await api.get(`/api/jsonrpc/${chainId}`);
  return data;
}
