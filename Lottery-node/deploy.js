require('dotenv').config();
const { abi, evm } = require('./compile');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const Module = require('ganache-cli');
const mnemonic = process.env.MNEMONIC || 'harbor deal moon dinner actual shiver salmon leaf step height life kingdom';
const infuraURL = process.env.INFURA_URL || 'https://rinkeby.infura.io/v3/81fab705c04d40b398f1160139f648d6';
let provider;
provider = new HDWalletProvider(
    mnemonic,
    infuraURL
)

const web3 = new Web3('HTTP://127.0.0.1:7545');//provider   'HTTP://127.0.0.1:7545'

console.log("abi==>", abi);
var result = '';
const networkAddress = async () => {
    let accountsTemp = await web3.eth.getAccounts();
    result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object })
        .send({ gas: '1000000', from: accountsTemp[0] });
    console.log('result._address==>', result._address);
    // provider.engine.stop();
    return result._address;
}

const accounts = async () => {
    return await web3.eth.getAccounts();
}

module.exports = {
    networkAddress: networkAddress,
    accounts: accounts,
    result: result
}