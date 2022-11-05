// Email Error Msg


var emailField=document.getElementById("email");
var button=document.getElementById("submit");
var emailError=document.getElementById("error-msg");
emailField.addEventListener("blur",validateEmail)
function validateEmail(event){
    event.preventDefault();
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.style.display="block";
        return false;
    }
    emailError.style.display="none";
    return true;
   }
button.addEventListener("click",sub)
function sub(event){
    event.preventDefault();
    if(emailField.value=='' && !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.style.display="block";
                }
    else if(emailField.value!='' && emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        popup();
}
}
function popup(){
    alert("massage sent");
}
