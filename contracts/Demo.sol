// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <=0.9.0;

contract Demo {
    string message;
    uint256 public number;

    constructor(string memory newMessage) {
        message = newMessage;
    }

    function getString() public view returns (string memory, uint256) {
        return (message, number);
    }

    function setValue(string memory newMessage, uint newNumber) public{
        message = newMessage;
        number = newNumber;
    }
}
