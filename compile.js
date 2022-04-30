const fs = require('fs');
const path = require('path');
const solc = require('solc');
const filePath = path.join(__dirname, 'contracts', 'Demo.sol');
const fileData = fs.readFileSync(filePath, 'utf-8');
var input = {
    language: 'Solidity',
    sources: {
        'Demo.sol': {
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
//     'Demo.sol'
// ].Demo);
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Demo.sol'
].Demo;