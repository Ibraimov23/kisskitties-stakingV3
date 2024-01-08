import { InjectedConnector } from "@web3-react/injected-connector";

export const injectedMetaMask = new InjectedConnector({
    supportedChainIds: [1],
    rpcUrls: {
        1: "https://rpc.ankr.com/eth",
    },
});
//  export const injectedMetaMask = new InjectedConnector({
//      supportedChainIds: [ 1, 97 ],
//       rpcUrls: {
//          97: "https://data-seed-prebsc-1-s1.binance.org:8545"
//       },
//  });
