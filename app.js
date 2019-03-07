var express = require('express');
var app = express();
var router = require('./router/main')(app);

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

//---------------------------------------socket---------------------------------------
var coap = require('coap') // or coap
var dgram = require('dgram');

// IPv6 주소와 PORT 설정
var HOST = 'aaaa::3';
var PORT = 5680;

// Create Server socket
var server = dgram.createSocket('udp6');

// Bind
server.bind(PORT, HOST);

/*client로부터 데이터를 받아 처리한다.*/
server.on('message', function(data, info){

   console.log(data)
   var idx = data.indexOf('ff', 'hex')
   buf = Buffer.alloc(5)
   buf[0] = data[idx+1]
   buf[1] = data[idx+2]
   console.log(buf[1])
   if(buf[1].toString() != 45)
	   return;
   buf[2] = data[idx+3]
   buf[3] = data[idx+4]
   buf[4] = data[idx+5]
   console.log(buf.toString())

	console.log(buf[0]-'0'-48, buf[2] - '0'-48,buf[4] - '0'-48)
	parking(buf[0]-'0'-48, buf[2] - '0'-48,buf[4] - '0'-48);

})

var req = coap.request({hostname: 'bbbb::1415:9200:17:9e2b', port: 5683, pathname : 'team', method: 'PUT'})
			req.write('N2')
			console.log(req)
			req.end()

Parking.unlockMote().watch(function(error, result) {
	console.log(result.args.parkLoc);

	  if(!error){
		console.log(result.args.parkLoc.toNumber());
		if(result.args.parkLoc.toNumber() == 1){
			var req = coap.request({hostname: 'bbbb::1415:9200:17:9e2a', port: 5683, pathname : 'team', method: 'PUT'})
			req.write('N1')
			req.end()
		}
		else if (result.args.parkLoc.toNumber() == 2){
			console.log('hit!')
			var req = coap.request({hostname: 'bbbb::1415:9200:17:9e2b', port: 5683, pathname : 'team', method: 'PUT'})
			req.write('N2')
			req.end()
		}
		else{
			var req = coap.request({hostname: 'bbbb::1415:9200:13:e139', port: 5683, pathname : 'team', method: 'PUT'})
			req.write('N3')
			req.end()
		}
	  }
});

Parking.newSpace().watch({}, '', function(error, result) {
	console.log(result.args.parkLoc);
	if(!error){
		var mote, message;
		if(result.args.parkLoc.toNumber() == 1)
			mote = '17:9e2a';
		else if (result.args.parkLoc.toNumber() == 2)
			mote = '17:9e2b';
		else
			mote = '13:e139';

		if(result.args.spaceType.toNumber() == 1)
			message = 'C'+mote.toString()+'N';
		else if (result.args.spaceType.toNumber() == 2)
			message = 'C'+mote.toString()+'D';
		else
			message = 'C'+mote.toString()+'C';

		  var req = coap.request({hostname: 'bbbb::1415:9200:'+mote, port: 5683, pathname : 'team', method: 'PUT'})
			req.write(message)
			req.end()
	}
});

function sendMessage(mote, message){
  var req = coap.request({hostname: 'bbbb::1415:9200:'+mote, port: 5683, pathname : 'team', method: 'PUT'})
  req.write(message)
  req.end()
}

//------------------------------------------------------------------------------

function parking(parkLoc,CarNumber,SpaceType){
	var account = "0xef10b59a1c2911f10e7f5a213c1d6c0f350ed23e";
	var CurrentTime = new Date();
	var EnterTime = CurrentTime.toString();

	if(web3.personal.unlockAccount(account,"ACC1")){
			Parking.carSensed(parkLoc,EnterTime,CarNumber,{from:account , gas: 2000000},function(err,result){if (!err) console.log("트랜잭션이 성공적으로 전송되었습니다." + result)});
	}
}

app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

var server = app.listen(3000, function(){
  console.log("Express server has started on port 3000")
})


app.use(express.static('public'));
