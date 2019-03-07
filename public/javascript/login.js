
	function login(){
		var loginCarNum = document.getElementById("Carnumber").value;
	  var password = document.getElementById("password").value;

		//테스트용으로 임시 -> 수정 필요
	 if(loginCarNum.toString()=="admin"){
			 location.href="admin";
		 }
		//validate 필요
		location.href="parking?Carnumber=" + loginCarNum;
	}
