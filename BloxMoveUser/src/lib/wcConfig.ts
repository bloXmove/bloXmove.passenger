import {IProviderMetadata} from '@walletconnect/modal-react-native';

export const projectId = 
export const providerMetadata: IProviderMetadata = {
  name: 'bloXmoveNG',
  description: 'Decentralized ride hailing platform for riders',
  url: 'https://...../',
  icons: [
    'https://..../wp-content/uploads/....',
  ],
  redirect: {
    native: 'rnbloxmove://',
  },
};
export const sessionParams = {
  namespaces: {
    eip155: {
      methods: [
        'eth_sendTransaction',
        'eth_signTransaction',
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
        'eth_signTypedData_v4',
      ],
      chains: ['eip155:42220'],
      // chains: ['eip155:1', 'eip155:42220', 'eip155:44787'],
      events: [
        'accountsChanged',
        'chainChanged',
        'connect',
        'disconnect',
        'message',
      ],
      rpcMap: {},
    },
  },
};
