import { api } from './shared';

import { Ethereum } from '../helpers';

export async function apiGetAccountAssets(
  address: string,
  chainId: string
): Promise<Ethereum.AssetData[]> {
  const response = await api.get(
    `/account/assets?address=${address}&chainId=${chainId}`
  );
  const { result } = response.data;
  return result;
}

export async function apiGetAccountTransactions(
  address: string,
  chainId: string
): Promise<Ethereum.Transaction[]> {
  const response = await api.get(
    `/account/transactions?address=${address}&chainId=${chainId}`
  );
  const { result } = response.data;
  return result;
}

export const apiGetAccountNonce = async (
  address: string,
  chainId: string
): Promise<string> => {
  const response = await api.get(
    `/account/nonce?address=${address}&chainId=${chainId}`
  );
  const { result } = response.data;
  return result;
};
