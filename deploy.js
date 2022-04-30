require('dotenv').config();
const { abi, evm } = require('./compile');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const mnemonic = process.env.MNEMONIC;
const infuraURL = process.env.INFURA_URL;
let provider;
provider = new HDWalletProvider(
    mnemonic,
    infuraURL
)

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ['This is a new message'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed', result._address);
    provider.engine.stop();
}
deploy()