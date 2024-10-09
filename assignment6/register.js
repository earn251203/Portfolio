window.onload = pageLoad;
function pageLoad(){
    var forms = document.getElementById("myRegister");
    forms.onsubmit = validateForm;
	
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let forms = document.forms["myRegister"];

    var firstname = forms["firstname"];
    var lastname = forms["lastname"];
    var gender = forms["gender"];
    var birthday = forms["bday"];
    var email = forms["email"];
    var username = forms["username"];
    var password = forms["password"][0];
    var retypePassword = forms["password"][1];

    let errormsg = document.getElementById("errormsg");

    if (firstname.value=="" || lastname.value=="" || gender.value=="" || birthday.value=="" || email.value=="" || username.value=="" || password.value=="" || retypePassword.value==""  ) {
        errormsg.innerHTML = "ข้อมูลไม่ครบถ้วน";
        return false;
    }

    if (password.value != retypePassword.value) {
        document.getElementById("errormsg").innerHTML ="รหัสไม่ตรงกัน";
        return false;

    }

}    
