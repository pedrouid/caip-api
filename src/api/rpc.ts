import Axios from 'axios';
import { formatJsonRpcRequest, JsonRpcRequest } from '@json-rpc-tools/utils';

import { api } from './shared';

import { Ethereum, getChainConfig } from '../helpers';

export const apiSendTransaction = async (
  txParams: any,
  chainId: string
): Promise<number> => {
  const { rpcUrl } = getChainConfig(chainId);

  if (!rpcUrl && typeof rpcUrl !== 'string') {
    throw new Error('Invalid or missing rpc url');
  }

  const request = formatJsonRpcRequest('eth_sendTransaction', [txParams]);
  const response = await Axios.post(rpcUrl, request);

  const result = response.data.result;
  return result;
};

export const apiGetGasPrices = async (): Promise<Ethereum.GasPrices> => {
  const response = await api.get(`/gas-prices`);
  const { result } = response.data;
  return result;
};

export const apiGetBlockNumber = async (
  chainId: string
): Promise<Ethereum.GasPrices> => {
  const response = await api.get(`/block-number?chainId=${chainId}`);
  const { result } = response.data;
  return result;
};

export const apiGetCustomRequest = async (
  chainId: string,
  customRpc: Partial<JsonRpcRequest>
): Promise<any> => {
  const response = await api.post(
    `config-request?chainId=${chainId}`,
    customRpc
  );
  const { result } = response.data;
  return result;
};
