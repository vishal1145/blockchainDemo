// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const { abi, evm } = require('../compile')
// // const web3 = Web3.setProvider(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
// const web3 = new Web3('HTTP://127.0.0.1:7545');//ganache.provider() || 
// let lottery;
// let accounts;

// beforeEach(async () => {
//     accounts = await web3.eth.getAccounts();
//     lottery = await new web3.eth.Contract(abi)
//         .deploy({ data: evm.bytecode.object })
//         .send({ gas: '1000000', from: accounts[0] })
//     console.log("accounts-->", accounts);
//     console.log("lottery-->", lottery);
// })
// describe("Lottery Contact", () => {
//     it("Deploys a contract", () => {
//         assert.ok(lottery.options.address)
//     })
//     it('allows one account to enter', async () => {
//         await lottery.methods.enter().send({
//             from: accounts[0],
//             value: web3.utils.toWei('0.02', 'ether')
//         })
//         const players = await lottery.methods.getPlayers().call({
//             from: accounts[0]
//         })
//         assert.equal(accounts[0], players[0]);
//         assert.equal(1, players.length)
//     })
// })

