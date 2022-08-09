const express=require('express');
const app=express();
const router=express.Router();
const Web3=require('web3');
//const web3=new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
const  web3 = new Web3("https://muddy-billowing-leaf.bsc.discover.quiknode.pro/9ccb6dc19526d6aa489fa34d0e54f4aca172cf52");
// console.log(web3);
const db=require('../db/index');
var log4js = require('log4js');//加载log4js模块
// app.use('/',express.static('../../public'));
const privateKey="92fdb04849389857d73a8241d14a90c1fd3d7856b32ce94570e65439b8c2d0b1";
const UsdtRewardPri="0xaec339f908cb2b09b0599ad7e351a18959512941d469ba18112ad825e54fd57b";

log4js.configure({ 
  appenders: {
    out: { type: 'console' }, 
    task: { type: 'dateFile', filename: 'logs/task',"pattern":"-dd.log", alwaysIncludePattern:true }, 
    result: { type: 'dateFile', filename: 'logs/result',"pattern":"-dd.log", alwaysIncludePattern:true}, 
    error: { type: 'dateFile', filename: 'logs/error', "pattern":"-dd.log",alwaysIncludePattern:true}, 
    default: { type: 'dateFile', filename: 'logs/default', "pattern":"-dd.log",alwaysIncludePattern:true}, 
    rate: { type: 'dateFile', filename: 'logs/rate', "pattern":"-dd.log",alwaysIncludePattern:true} 
  },
  categories: {
    default: { appenders: ['out','default'], level: 'info' },
    task: { appenders: ['task'], level: 'info'},
    result: { appenders: ['result'], level: 'info' },
    error: { appenders: ['error'], level: 'error' },
    rate: { appenders: ['rate'], level: 'info' }
  }
});
var logger =log4js.getLogger('custom-appender');
const ContractAbi=[
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AddIdonum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "AddNftNum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "AddrIndex",
		"outputs": [
			{
				"internalType": "address",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "BuyUsdtNum",
		"outputs": [
			{
				"internalType": "uint256",
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
		"inputs": [],
		"name": "ForAdd",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "InviterNum",
		"outputs": [
			{
				"internalType": "uint256",
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
				"internalType": "address",
				"name": "addr1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "addr2",
				"type": "address"
			}
		],
		"name": "JudgeRepeat",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "NftNum",
		"outputs": [
			{
				"internalType": "uint256",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "ReleasedNum",
		"outputs": [
			{
				"internalType": "uint256",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "SortNum",
		"outputs": [
			{
				"internalType": "uint256",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_balances",
		"outputs": [
			{
				"internalType": "uint256",
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
		"inputs": [],
		"name": "_decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_name",
		"outputs": [
			{
				"internalType": "string",
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
		"inputs": [],
		"name": "_symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "addr2",
				"type": "address"
			}
		],
		"name": "addInvitNum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addUsdtNum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "addressIndexes",
		"outputs": [
			{
				"internalType": "address",
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "forUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
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
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "record",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "releaseToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "removeNftNum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "removeUserUsdt",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "showMax",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "showRecord",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "showSortAmount",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
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
				"internalType": "uint256[]",
				"name": "SortAmount",
				"type": "uint256[]"
			}
		],
		"name": "sortAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sortAmount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "subNftNum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
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
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const UsdtAbi=[
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_name",
		"outputs": [
			{
				"internalType": "string",
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
		"inputs": [],
		"name": "_symbol",
		"outputs": [
			{
				"internalType": "string",
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
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
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
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
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const ContractAddress='0x995FC7a1B32EC94AfF52763DF28FCBD5E614fCa5';
const UsdtAddress='0x55d398326f99059fF775485246999027B3197955';
const MyContract=new web3.eth.Contract(ContractAbi,ContractAddress);
const UsdtContract=new web3.eth.Contract(UsdtAbi,UsdtAddress);
//暂存地址3
async function AddIdonum(addr,num){
	let functionEncode=await MyContract.methods.AddIdonum(addr,num).encodeABI();
	 var sign = await web3.eth.accounts.signTransaction({
		    gas: 300000,
		    to: ContractAddress,
		    data: functionEncode,
		   }, privateKey);
		   var result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
			//console.log(result);
}
const BigNumber=require('bignumber.js');
//let amount=new BigNumber(10*10**18);
let nonceNum=1;
let gasNumber=600000;
//邀请奖励的usdt
async function RewardTrans(addr,amount){
	let num=new BigNumber(amount*10**18);
	let functionEncode=await UsdtContract.methods.transfer(addr,num).encodeABI();
	var number = web3.eth.getTransactionCount('0x4066347f3FBf20fC903b00A0E77e378bebf13B0D');
	let sign = await web3.eth.accounts.signTransaction({
			    gas: 300000,
			    to: UsdtAddress,
			    data: functionEncode,
			    nonce:number+1
			   }, UsdtRewardPri,(err,result)=>{
		if(err){
			logger.error(error);
		}		   
			   });
    var result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
}
//添加的邀请人数
async function addInvitNum(addr1,addr2){
	//console.log('触发了邀请');
	let functionEncode=await MyContract.methods.addInvitNum(addr1,addr2).encodeABI();
	let sign = await web3.eth.accounts.signTransaction({
			    gas: 300000,
			    to: ContractAddress,
			    data: functionEncode,
			   }, privateKey);
    var result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
}
//获得可提取余额
async function getIdoBal(addr){
	const bal=await MyContract.methods.record(addr).call();
	return bal;
}

router.post('/test',(req,res)=>{
	AddIdonum('0xaEF61ED05EaDF436404e81D60900EcCa4b37281d',200);
	res.end();
})
router.post('/getBal',(req,res)=>{
	const userinfo=req.body;
	getIdoBal(userinfo.address).then(resolve=>{
		const a=resolve.toString();
		res.send(a);
	})
})

//获得可提取余额
async function getRelease(addr){
	const bal=await MyContract.methods.balanceOf(addr).call();
	return bal;
}
//获得邀请人数
async function getInviterNum(addr){
	const bal=await MyContract.methods.InviterNum(addr).call();
	return bal;
}
//获得用户的购买usdt数量
async function getBuyUsdt(addr){
	const UsdtNum=await MyContract.methods.BuyUsdtNum(addr).call();
	return UsdtNum;
}
//添加USDT数量
async function addUsdt(addr,amount){
	let functionEncode=await MyContract.methods.addUsdtNum(addr,amount).encodeABI();
	let sign = await web3.eth.accounts.signTransaction({
			    gas: 300000,
			    to: ContractAddress,
			    data: functionEncode,
			   }, privateKey);
    var result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
}
//添加nft数量
async function addNftNum(addr){
	let functionEncode=await MyContract.methods.AddNftNum(addr).encodeABI();
	let sign = await web3.eth.accounts.signTransaction({
			    gas: 300000,
			    to: ContractAddress,
			    data: functionEncode,
			   }, privateKey);
    var result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
}
//减少nft数量
async function subNftNum(addr){
	let functionEncode=await MyContract.methods.subNftNum(addr).encodeABI();
	let sign = await web3.eth.accounts.signTransaction({
			     gas: 300000,
			    to: ContractAddress,
			    data: functionEncode,
			   }, privateKey);
    var result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
}
router.post('/subNftNum',(req,res)=>{
	const userinfo=req.body;
	subNftNum(userinfo.address);
	res.send('success');
})
//添加购买的数量进数据库
function addAmount(address,amount){
	const FindUser=`select * from buyamount where address = ?`;
	db.query(FindUser,address,(err,results)=>{
		if(results.length>0){
			//console.log('查询成功',results[0].num);
			let num=results[0].amount;
			num=parseInt(num)+parseInt(amount);
			const UpdateUser=`update buyamount set amount=? where address=?`;
			db.query(UpdateUser,[num,address],(err,results)=>{
				if(err){
					return console.log(err.message);
				}
				if(results.affectedRows!==1){
					console.log('更新失败');
				}else{
					console.log('更新成功');
				}
			})
		}else{
			//console.log('查询失败');
			const InsertSql=`insert into buyamount(address,amount) values(?,?)`;
			db.query(InsertSql,[address,amount],(err,results)=>{
				if(err){
					return console.log(err.message);
				}
				if(results.affectedRows!==1){
					console.log('插入失败');
				}else{
					console.log('插入成功');
				}
			})
		}
	})
}

//添加打开的nft数量进数据库
function addNftAmount(address){
	const FindUser=`select * from opennftnum where address = ?`;
	db.query(FindUser,address,(err,results)=>{
		if(results.length>0){
			//console.log('查询成功',results[0].num);
			let num=results[0].opennum;
			num=parseInt(num)+parseInt(1);
			const UpdateUser=`update opennftnum set opennum=? where address=?`;
			db.query(UpdateUser,[num,address],(err,results)=>{
				if(err){
					return console.log(err.message);
				}
				if(results.affectedRows!==1){
					console.log('更新失败');
				}else{
					console.log('更新成功');
				}
			})
		}else{
			//console.log('查询失败');
			const InsertSql=`insert into opennftnum(address,opennum) values(?,?)`;
			let amount=1;
			db.query(InsertSql,[address,amount],(err,results)=>{
				if(err){
					return console.log(err.message);
				}
				if(results.affectedRows!==1){
					console.log('插入失败');
				}else{
					console.log('插入成功');
				}
			})
		}
	})
}

router.post('/OpenNftNum',(req,res)=>{
	const userinfo=req.body;
	console.log('添加nft',userinfo.address);
	addNftAmount(userinfo.address);
})
router.post('/GetOpenNftNum',(req,res)=>{
	const userinfo=req.body;
	const FindUser=`select * from opennftnum where address = ?`;
	db.query(FindUser,userinfo.address,(err,results)=>{
		if(results.length>0){
			//console.log('成功')
			res.send(results);
		}
	})
	//res.send('查询失败');
})

let SortArr=[];
router.post('/Ranking',(req,res)=>{
	//let sum=SortValue();
	//console.log('sum的值',sum);
	let SortSql=`select * from buyamount order by amount DESC`;
	db.query(SortSql,(error,results)=>{
		//console.log(results);
		res.send(results);
	})
	//res.send(SortValue());
})
//除了记录用户Usdt还有记录币量和记录nft数量
router.post('/addUsdt',(req,res)=>{
	const userinfo=req.body;
	let amount;
	//let num=userinfo.num;
	// addUsdt(userinfo.address,userinfo.num);
	if(userinfo.num==50){
		amount=5000;
	}else if(userinfo.num==118){
		amount=11800;
	}else if(userinfo.num==200){
		//console.log('触发到这里')
		amount=20000;
	}else{
		amount=0
	}
	addUsdt(userinfo.address,userinfo.num).then(resolve=>{
			AddIdonum(userinfo.address,amount).then(()=>{
				addNftNum(userinfo.address).then(()=>{
					RewardTrans('0x3678785180bF312e17563b5218e3F5Dd22205D86',userinfo.num/2).then(()=>{
						addAmount(userinfo.address,userinfo.num);
						let regexp_1=/0x/g;
						
						if(regexp_1.test(userinfo.TopAddress)){
							getBuyUsdt(userinfo.TopAddress).then((sum)=>{
								let BuyUsdtAmount=sum;
								let RewardAmount=userinfo.num*40/100;
								let BackPool=userinfo.num*10/100;
								getRepeat(userinfo.TopAddress,userinfo.address).then((IsRepeat)=>{					
									if(BuyUsdtAmount>=200 && !IsRepeat){

										RewardTrans(userinfo.TopAddress,RewardAmount).then(()=>{
												RewardTrans('0x0542B2AB248F1f5BB9Ac5d95520380c0ea05ec56',BackPool).then(()=>{
													addInvitNum(userinfo.TopAddress,userinfo.address);
												})
										})
									}
							})
							})
						}else{
						}
					})
				})
			})
	})
	
	res.send('success');
})
router.post('/getInviterNum',(req,res)=>{
	const userinfo=req.body;
	// console.log('userinfo的值',userinfo);
	getInviterNum(userinfo.address).then(resolve=>{
		const a=resolve.toString();
		res.send(a);
	})
})
//获得nft数量
async function getNftNum(addr){
	const bal=await MyContract.methods.NftNum(addr).call();
	return bal;
}
//获得非重复的邀请映射
async function getRepeat(addr1,addr2){
	const IsRepeat=await MyContract.methods.JudgeRepeat(addr1,addr2).call();
	return IsRepeat;
}

router.post('/getNftNum',(req,res)=>{
	const userinfo=req.body;
	getNftNum(userinfo.address).then(resolve=>{
		const a=resolve.toString();
		res.send(a);
	})
})
router.post('/getRelease',(req,res)=>{
	const userinfo=req.body;
	getRelease(userinfo.address).then(resolve=>{
		const a=resolve.toString();
		res.send(a);
	})
})


router.post('/getBuyUsdtNum',(req,res)=>{
	const userinfo=req.body;
	getBuyUsdt(userinfo.address).then((resolve=>{
		const a=resolve.toString();
		res.send(a);
	}))
})




module.exports={router,logger};