const fs = require('fs');
const path = require('path');
const solc = require('solc');
const filePath = path.join(__dirname, 'contracts', 'Lottery.sol');
const fileData = fs.readFileSync(filePath, 'utf-8');
var input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol': {
            content: fileData
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};
// console.log("compiled", solc.compile(JSON.stringify(input)));
// console.log("here-->", JSON.parse(solc.compile(JSON.stringify(input))).contracts[
//     'Lottery.sol'
// ].Lottery)
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Lottery.sol'
].Lottery;