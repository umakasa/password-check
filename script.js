function checkpassword(){
let password = document.getElementById("password").value
let conformpassword = document.getElementById("conform-password").value
console.log(password,conformpassword)
let message = document.getElementById("message")

if(password.length !=0){
    if(password == conformpassword){
        message.textContent = "Password match"
        message.style.color="green"

    }
    else{
        message.textContent = "Password don't match"
        message.style.color = "red"

    }
}
}