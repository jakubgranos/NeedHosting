let myForm = document.forms.myForm;

let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirm");


myForm.onsubmit = function() {
  if(password.value.length <=5 && passwordConfirm.value.length <=5) {
    alert("password must have min 5 chars")
    return false;
  }
  else if(password.value != passwordConfirm.value){
    alert("password is not good");
    return false;
  }else if(password.value == passwordConfirm.value) {
    alert("Gratulation! Your registration has been successful");
    return true;
  }
}