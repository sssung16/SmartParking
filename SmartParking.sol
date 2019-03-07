pragma solidity ^0.4.11;

contract SmartParking {

   event unlockMote(uint parkLoc);
   event newSpace(uint parkLoc, uint spaceType);
   struct CarInfo{
      uint carNumber;
      uint carType;
   }

   struct ParkInfo {
      uint parkLoc;    //Where car is parked
      uint paidFee;    //Any Fee Paid
      string inTime;    //When car was sensed
      string outTime;
      uint usingTime;
      uint price;
   }
   
   struct ParkSpace {
      uint spaceType;
      uint sensedTime; //Latest sensed time
      uint sensedCarNumber;
   }
   
   mapping (address => CarInfo) carInfos;
   mapping (uint => address) driverAddr;
   mapping (address => ParkInfo) parkInfos;
   mapping (uint => ParkSpace) parkingLot;

   address controller;
   event wrongType();
   event insufficientFee();
   event sufficientFee();
   
   constructor() {
      controller = msg.sender;
   }
   
   function parkFee(uint carType, uint spaceType) constant returns (uint) {
       if(carType == 1)    // Disabled
           return 1;
       else if (spaceType == 1) // Other Cars in Disabled park space
           return 10;
       else if (carType == 2)  // Van
           return 3;
       else if (spaceType == 0) // Normal in Normal park space
           return 2;
       else // Normal in Van park space
           return 3;
   }
   
   function registerCar(uint myCarNumber, uint myCarType) {
      require(driverAddr[myCarNumber] == 0); // Check if car is already registered
   
      driverAddr[myCarNumber] = msg.sender;
      carInfos[msg.sender] = CarInfo({carNumber: myCarNumber, carType: myCarType});
   }

   function registerParkSpace(uint parkLoc, uint thisSpaceType) {
      require(msg.sender == controller);
      
      parkingLot[parkLoc].spaceType = thisSpaceType;
	  emit newSpace(parkLoc, thisSpaceType);
   }
   
   function carSensed(uint parkLoc, string curTime, uint carNumber) {
      require(msg.sender == controller);
      
      //carNumber 등록 안된경우 예외 처리 추가해야함

      parkInfos[driverAddr[carNumber]] = ParkInfo({parkLoc: parkLoc, paidFee: 0,inTime: curTime,outTime: "",usingTime: 0,price:0});
      
      if(parkingLot[parkLoc].spaceType != carInfos[driverAddr[carNumber]].carType)
         emit wrongType();   //in case spaceType does not match
   }
   
   function carOut(string OutTime,uint UsingTime,uint carNumber) returns (uint) {
      require(parkInfos[msg.sender].parkLoc != 0);   // Check if car is parked
      //require(curTime >= block.timestamp); // Check if curTime is valid
      
      parkInfos[driverAddr[carNumber]].outTime = OutTime;
      parkInfos[driverAddr[carNumber]].usingTime = UsingTime;
      
      uint usedSec = UsingTime / 1000;
      
      uint Price = usedSec * parkFee(carInfos[msg.sender].carType, parkingLot[ parkInfos[msg.sender].parkLoc].spaceType) ;
      
      parkInfos[driverAddr[carNumber]].price = Price;
      emit unlockMote(parkInfos[driverAddr[carNumber]].parkLoc);
      return Price;
   }
   
   function payFee() {
      require(parkInfos[msg.sender].parkLoc != 0);  // Check if car is parked
      
      parkInfos[msg.sender].paidFee += msg.value;
   }
   
   
   function getRegisterCar(address User) constant returns (uint, uint){
       return (carInfos[User].carNumber,carInfos[User].carType);
   }
   
   function getParkLocation(uint myCarNumber) constant returns (uint){
       return (parkInfos[driverAddr[myCarNumber]].parkLoc);
   }
  
    function getCarType(uint myCarNumber)constant returns (uint){
        return carInfos[driverAddr[myCarNumber]].carType;
    }

   function getCarOwner(uint myCarNumber)constant returns (address){
       return driverAddr[myCarNumber];
   }
   
   function getSensedTime(uint myCarNumber)constant returns(string){
       return parkInfos[driverAddr[myCarNumber]].inTime;
   }
   
   function getOutTime(uint myCarNumber)constant returns(string){
       return parkInfos[driverAddr[myCarNumber]].outTime;
   }
   
   function getUsingTime(uint myCarNumber)constant returns(uint){
       return parkInfos[driverAddr[myCarNumber]].usingTime;
   }
   
   function getPrice(uint myCarNumber)constant returns(uint){
        return parkInfos[driverAddr[myCarNumber]].price;
   }
   
   function getSpaceType(uint parkLoc)constant returns(uint){
        return parkingLot[parkLoc].spaceType;
   }
   
   function killContract() {
        if(controller == msg.sender)
            selfdestruct(controller);
    }
}
