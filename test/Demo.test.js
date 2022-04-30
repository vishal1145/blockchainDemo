const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('./compile');
// console.log("interface", interface);
// console.log("bytecode", bytecode);
let accounts;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts()
})


describe('Demo', () => {
    it('Deploys a contract', () => {

    })
})


// class Car {
//     park() {
//         return "Stopped";
//     }
//     start() {
//         return "Vroom";
//     }
// }
// let car;
// beforeEach(() => {
//     car = new Car()
// })
// describe('Car', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'Stopped')
//     })

//     it('can not park', () => {
//         assert.equal(car.start(), 'Vroom')
//     })
// })