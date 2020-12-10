export const GENERIC_SUCCESS_RESPONSE_SCHEMA = {
  type: 'object',
  description: 'Successful Response',
  properties: {
    success: { type: 'boolean' },
  },
};

export const GENERIC_FAILURE_RESPONSE_SCHEMA = {
  type: 'object',
  description: 'Server Error Message',
  properties: {
    message: { type: 'string' },
  },
};

export const JSON_RPC_REQUEST_SCHEMA = {
  type: 'object',
  description: 'JSON-RPC Request',
  properties: {
    id: { type: 'number' },
    jsonrpc: { type: 'string' },
    method: { type: 'string' },
    params: { type: 'object' },
  },
};

export const BLOCKCHAIN_API_SCHEMAS = {
  get: {
    hello: {
      url: '/hello',
      description: 'Get test message response',
      opts: {
        schema: {
          response: {
            200: { type: 'string' },
          },
        },
      },
    },
  },
  post: {
    rpc: {
      url: '/rpc',
      description: 'Send RPC Requests to a target blockchain',
      opts: {
        schema: {
          body: {
            type: 'object',
            properties: {
              chainId: { type: 'string' },
              request: JSON_RPC_REQUEST_SCHEMA,
            },
          },
          response: {
            200: GENERIC_SUCCESS_RESPONSE_SCHEMA,
            500: GENERIC_FAILURE_RESPONSE_SCHEMA,
          },
        },
      },
    },
  },
};
