  function registerSpace(){
    var parkLocation = document.getElementById("ParkLocation").value;
    var LocationType = document.getElementById("LocationType").value;

    var account = "0xef10b59a1c2911f10e7f5a213c1d6c0f350ed23e";

    if(web3.personal.unlockAccount(account,"ACC1")){
        Parking.registerParkSpace(parkLocation,LocationType,{from:account , gas: 2000000},function(err,result){if (!err) alert("트랜잭션이 성공적으로 전송되었습니다." + result)});
    }
  }
