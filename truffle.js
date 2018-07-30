require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("truffle-hdwallet-provider");
const deployConfig = require('./config.js');

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*', // Match any network id
            gas: 12000000,
            gasPrice: 1
        },
        test: {
            provider() {
                return new HDWalletProvider(deployConfig.mnemonic, `https://ropsten.infura.io/${deployConfig.infuraKey}`)
            },
            network_id: 3
        }
    },
    mocha: {
        // grep: ''
    }
};
