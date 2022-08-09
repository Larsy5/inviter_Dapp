
let contractAbi=[
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
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
]
let myContract;
let ContractAddress;
let web3;
ContractAddress='0x55d398326f99059fF775485246999027B3197955';
let account; 
let addr

function UsdtBalance(){
	//console.log('获取usdt触发了');
	web3.eth.getAccounts(function(error,accounts){
		myContract.methods.balanceOf(accounts[0]).call(function(err,result){
			document.querySelector('#UsdtBalance').innerHTML=result/(10**18);
		})
	})
}
let idoBal=document.getElementById('idoBal');
let addr2;
//获得可提取量
function initBal(){
	//获取已购买的ido余额
	web3.eth.getAccounts(function(error,accounts){
	addr2=accounts[0];
	axios.post('http://fero.link/getBal',{
		address:accounts[0]
	}).then((res)=>{
		idoBal.innerText=res.data;
		// console.log('res.data',res.data);
		// console.log('res.data',res.data);
	})
	})
}
//获得邀请的数量
let ido_renshu=document.getElementById('ido_renshu');
function showInviteNum(){
	//获取已购买的ido余额
	web3.eth.getAccounts(function(error,accounts){
	addr2=accounts[0];
	axios.post('http://fero.link/getInviterNum',{
		address:accounts[0]
	}).then((res)=>{
		//console.log('数值',res.data);
		ido_renshu.innerText=res.data;
		// console.log('res.data',res.data);
		// console.log('res.data',res.data);
	})
	})
}
//获得已释放量
let RelBal=document.getElementById('RelBal');
// console.log(RelBal)
function Release(){
	web3.eth.getAccounts(function(error,accounts){
	addr2=accounts[0];
	axios.post('http://fero.link/getRelease',{
		address:accounts[0]
	}).then((res)=>{
		RelBal.innerText=res.data/(10**18);
		//console.log('res.data',res.data/(10**18));
		// console.log('res.data',res.data);
	})
	})
}
//获得nft数量并且渲染
let nftBox=document.getElementById('nftBox');
function getNftNum(){
	web3.eth.getAccounts(function(error,accounts){
	addr2=accounts[0];
	axios.post('http://fero.link/getNftNum',{
		address:accounts[0]
	}).then((res)=>{
		//console.log(ido_renshu.innerText);
		InviterNum=ido_renshu.innerText;
		let count=0;
		let InvitEle='<div id="Inv"><img src="./img/盲盒.png" alt=""><button class="custom-btn btn-9">打开盒子</button></div>'
		let labeIn='<div><img src="./img/盲盒.png" alt=""><button class="custom-btn btn-9">打开盒子</button></div>'
		for(let i=0;i<res.data;i++){
			nftBox.innerHTML+=labeIn;
		}
		
		while(parseInt(InviterNum)!=0){
			InviterNum=parseInt(InviterNum/10);
			count++;
		}
		for(let i=0;i<count-1;i++){
			nftBox.innerHTML+=InvitEle;
		}
		let NftChild=nftBox.children;
		axios.post('http://fero.link/GetOpenNftNum',{
			address:accounts[0]
		}).then(resolve=>{
			 console.log(resolve,'查询的结果');
			for(let i=0;i<NftChild.length;i++){
				imgLable=NftChild[i].firstElementChild;
				nftBtn=NftChild[i].lastElementChild;
				if(NftChild[i].id='Inv'){
					for(let j=0;j<resolve.data[0].opennum;j++){
						imgLable.src="./img/InviterNft.png";
						nftBtn.style="display:none";
					}
				}
			}
		})
		for(let i=0;i<NftChild.length;i++){
			NftChild[i].lastElementChild.onclick=function(){
				imgLable=NftChild[i].firstElementChild;
				if(NftChild[i].id=='Inv'){
					imgLable.src="./img/InviterNft.png";
					this.style="display:none";
					axios.post('http://fero.link/OpenNftNum',{
						address:accounts[0]
					})
					//break;
					//alert(i);
				}else{
					axios.post('http://fero.link/subNftNum',{
						address:accounts[0]
					})
					alert('你没开出nft');
					imgLable.style="display:none";
					this.style="display:none";
				}
			}
		}
	})
	})
}

// console.log(addr2);
let InvUrl=document.getElementById('InvUrl');


//是否有邀请链接
function InviteUrl(){
	web3.eth.getAccounts(function(error,accounts){
	InvUrl.innerHTML='测试'
	let Idobalance;
	let Rel;
	axios.post('http://fero.link/getBuyUsdtNum',{
		address:accounts[0]
	}).then((res)=>{
		Idobalance=res.data;
		//console.log(Idobalance);
		if(Idobalance>=200){
			InvUrl.value='http://fero.link/user' +  '/' + accounts[0];
		}else{
			axios.post('http://fero.link/getRelease',{
				address:accounts[0]
			}).then((res)=>{
				Rel=res.data/(10**18);
				if(Rel>=200){
					InvUrl.value='http://fero.link/user' +  '/' + accounts[0];
				}
			})
		}
	})
	})
}
//排序
function Sort(){
	let leaderBoard=document.querySelector('.leaderboard__profiles');
	console.log(leaderBoard);
	axios.post('http://fero.link/Ranking',{}).then(resolve=>{
		let article='';
		let lengthSat=resolve.data.length;
		if(resolve.data.length>=30){
			lengthSat=30
		}
		for(let i=0;i<lengthSat;i++){
			article+='<article class="leaderboard__profile">' +
		+ '<span class="leaderboard__name">' + resolve.data[i].address + '</span>'
			 +  		      '<span class="leaderboard__value">' + resolve.data[i].amount  +  '</span>'
			   		  +  '</article>'
		}
		leaderBoard.innerHTML=article;
	})
}
 let urlText = window.location.href;
 let regexp_1=/user/g;
 var n=urlText.indexOf("0");
 let str=urlText.slice(n,64);
function UsdtTransfer(){
	let amount;
	let transferNum;
	let buyAmount=document.getElementById('buyAmount');
	transferNum=buyAmount.value;
	amount=buyAmount.value;
	let num=new BigNumber(amount*10**18);
	//console.log(amount);
	if(amount!=50 && amount !=118 && amount !=200){
		alert('你只能购买三档的数量，50u，118u和200u');
		return;
	}
	console.log('调用了');
	web3.eth.getAccounts(function(error,accounts){
		console.log('这里有触发');
		myContract.methods.transfer('0x4066347f3FBf20fC903b00A0E77e378bebf13B0D',num.toFixed()).send({from:accounts[0]},function (err,result){
		     console.log('成功',result)
			if(result){
				console.log('结果这里')
				axios.post('http://fero.link/addUsdt',{
					address:accounts[0],
					num:transferNum,
					TopAddress:str
				})
			}else{
				alert('交易失败');	
			}
		})
	})
}
function connectTo(){
	onConnect().then(()=>{
			web3=new Web3(provider);
			myContract = new web3.eth.Contract(contractAbi, ContractAddress);
			initBal();
			InviteUrl();
			UsdtBalance();
			Release();
			showInviteNum();
			getNftNum();
	})
}
Sort();
