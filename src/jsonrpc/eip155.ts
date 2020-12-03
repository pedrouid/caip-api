import { JsonRpcSchemas } from '@json-rpc-tools/utils';

export const EIP155JsonRpc: JsonRpcSchemas = {
  schemas: {
    eth_accounts: {
      name: 'eth_accounts',
      description: 'Get account addresses',
      params: {
        type: 'array',
        items: {},
      },
      result: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    eth_chainId: {
      name: 'eth_chainId',
      description: 'Get EIP-155 chain id',
      params: {
        type: 'array',
        items: {},
      },
      result: {
        type: 'string',
      },
    },
    eth_sendTransaction: {
      name: 'eth_sendTransaction',
      description: 'Creates, signs, and sends a new transaction to the network',
      params: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            from: { type: 'string', required: true },
            to: { type: 'string' },
            gas: { type: 'string' },
            gasPrice: { type: 'string' },
            value: { type: 'string' },
            data: { type: 'string' },
            nonce: { type: 'string' },
          },
        },
      },
      result: {
        type: 'string',
      },
    },
    personal_sign: {
      name: 'personal_sign',
      description: 'Sign arbitrary message',
      params: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      result: {
        type: 'string',
      },
    },
    eth_signTypedData: {
      name: 'eth_signTypedData',
      description: 'Sign type data message',
      params: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      result: {
        type: 'string',
      },
    },
  },
};
