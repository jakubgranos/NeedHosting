let myForm = document.forms.myForm;
let messeage = document.getElementById("messeage");
let button  = myForm.button;
function validation()  {
  let passwordConfirm = document.getElementById("password-confirm")
  if(myForm.username.value == "") {
    messeage.innerHTML = "Error! Username is missing!";
  }else if(myForm.email.value == "") {
    messeage.innerHTML = "Error! Email is missing";
  }else if(myForm.password.value || passwordConfirm.value == "") {
    messeage.innerHTML= "Error! password is missing";
  }else {
    alert("fuk");
  }
}
button.onclick = function() {
  validation();
}