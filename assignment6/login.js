window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	 var username = document.forms["myLogin"]["username"].value;
    var password = document.forms["myLogin"]["password"].value;

	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);

	const registeredUsername = urlParams.get('username');
	const registeredPasswond = urlParams.get('password');

	

	if (username == registeredUsername && password == registeredPasswond) {
		alert("Login สำเร็จ");	
		return false;
	}
	else{
		alert("login ไม่สำเร็จ");
		return false;
	} 

}

			