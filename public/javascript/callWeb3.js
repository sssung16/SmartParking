var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var Parking = web3.eth.contract([
{
  "anonymous": false,
  "inputs": [],
  "name": "sufficientFee",
  "type": "event"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "OutTime",
      "type": "string"
    },
    {
      "name": "UsingTime",
      "type": "uint256"
    },
    {
      "name": "carNumber",
      "type": "uint256"
    }
  ],
  "name": "carOut",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "parkLoc",
      "type": "uint256"
    },
    {
      "name": "curTime",
      "type": "string"
    },
    {
      "name": "carNumber",
      "type": "uint256"
    }
  ],
  "name": "carSensed",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "killContract",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "anonymous": false,
  "inputs": [],
  "name": "wrongType",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [],
  "name": "insufficientFee",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "parkLoc",
      "type": "uint256"
    }
  ],
  "name": "unlockMote",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "parkLoc",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "spaceType",
      "type": "uint256"
    }
  ],
  "name": "newSpace",
  "type": "event"
},
{
  "constant": false,
  "inputs": [],
  "name": "payFee",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    },
    {
      "name": "myCarType",
      "type": "uint256"
    }
  ],
  "name": "registerCar",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "parkLoc",
      "type": "uint256"
    },
    {
      "name": "thisSpaceType",
      "type": "uint256"
    }
  ],
  "name": "registerParkSpace",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    }
  ],
  "name": "getCarOwner",
  "outputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    }
  ],
  "name": "getCarType",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    }
  ],
  "name": "getOutTime",
  "outputs": [
    {
      "name": "",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    }
  ],
  "name": "getParkLocation",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    }
  ],
  "name": "getPrice",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "User",
      "type": "address"
    }
  ],
  "name": "getRegisterCar",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    },
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    }
  ],
  "name": "getSensedTime",
  "outputs": [
    {
      "name": "",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "parkLoc",
      "type": "uint256"
    }
  ],
  "name": "getSpaceType",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "myCarNumber",
      "type": "uint256"
    }
  ],
  "name": "getUsingTime",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "carType",
      "type": "uint256"
    },
    {
      "name": "spaceType",
      "type": "uint256"
    }
  ],
  "name": "parkFee",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}
]).at("0xa0aa0df855dcc76ae922d33fd98f7224586458ee");
