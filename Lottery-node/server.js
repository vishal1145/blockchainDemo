const express = require('express')
var app = express()
var cors = require('cors');
app.use(cors())
const { abi, evm } = require('./compile');
let { networkAddress, accounts, result } = require('./deploy')
const path = require('path');
// console.log(accounts, result);
const port = process.env.PORT || 3001;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/all-accounts', async (req, res) => {
    let accountsRes = await accounts()
    let networkAddr = await networkAddress()
    res.send({ accountsRes: accountsRes, networkAddr: networkAddr, abi: abi, evm: evm })
})
networkAddress().then(() => {
    console.log('app listening');
    app.listen(port, () => {
        console.log(`Listening to ${port}`);
    })
}) 