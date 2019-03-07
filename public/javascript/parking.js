//파라미터 가져오기(현재 페이지를 이용하고 있는 이용자의 차량 번호)
function getQuerystring(paramName){
	var _tempUrl = window.location.search.substring(1); //url에서 처음부터 '?'까지 삭제
	var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기
	for(var i = 0; _tempArray.length; i++) {
		var _keyValuePair = _tempArray[i].split('='); // '=' 을 기준으로 분리하기
			if(_keyValuePair[0] == paramName){ // _keyValuePair[0] : 파라미터 명
				return _keyValuePair[1]; } // _keyValuePair[1] : 파라미터 값
		}
	}

	function OutCar(){
		var AdminAccount = "0xef10b59a1c2911f10e7f5a213c1d6c0f350ed23e";
		var Carnumber = getQuerystring('Carnumber');
		var Carowner = Parking.getCarOwner(Carnumber);

		var OutTime = new Date();
		var OutTimestring = OutTime.toString();
		var OutTimestamp = new Date(OutTime).getTime();

		var EnterTime = Parking.getSensedTime(Carnumber);
		var EnterTimestamp = new Date(EnterTime).getTime();

    var UsingTime = OutTimestamp - EnterTimestamp;

		var ParkingLocation = Parking.getParkLocation(Carnumber); //parkLoc
		var SpaceType = Parking.getSpaceType(ParkingLocation); //spaceType
		var CarType = Parking.getCarType(Carnumber); //Cartype

		var fee;

		if(CarType == 1)    // Disabled
          fee = 1;
    else if (SpaceType == 1) // Other Cars in Disabled park space
          fee = 10;
    else if (CarType == 2)  // Van
          fee = 3;
    else if (SpaceType == 0) // Normal in Normal park space
          fee = 2;
    else // Normal in Van park space
          fee = 3;

		var price = UsingTime/1000 * fee;
		alert(price);

		if(web3.personal.unlockAccount(Carowner,"ACC1")){
				Parking.carOut(OutTimestring,UsingTime,Carnumber,{from:Carowner , gas: 2000000},function(err,result){if (!err) alert("트랜잭션이 성공적으로 전송되었습니다." + result)});
				var txHash = web3.eth.sendTransaction({
					from: Carowner,
					to: AdminAccount,
					value: web3.toWei(parseInt(price),"ether")
				});
		}
	}

	/** 현금 -> 이더 **/
	function Buycoin(){
		var account = "0xef10b59a1c2911f10e7f5a213c1d6c0f350ed23e";
		var Carnumber = getQuerystring('Carnumber');
		var Carowner = Parking.getCarOwner(Carnumber);
		var BuyAmount = document.getElementById("Buyamount").value;

		if(web3.personal.unlockAccount(account,"ACC1")){
			var txHash = web3.eth.sendTransaction({
				from: account,
				to: Carowner,
				value: web3.toWei(BuyAmount,"ether")
			});
			alert(txHash);
		}
	}
