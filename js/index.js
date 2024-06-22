var userName = document.getElementById("usernameInput");
var userEmail = document.getElementById("userEmailInput");
var userPass = document.getElementById("userPasswordInput");

//sign up
var userInfo;
if (localStorage.getItem("users") === null) {
    userInfo = [];
} else {
    userInfo = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
    validation();
    isExsit();
    if (validation() === true && isExsit() === false) {
        var user = {
            name: userName.value,
            email: userEmail.value,
            pass: userPass.value
        };
        userInfo.push(user);
        localStorage.setItem("users", JSON.stringify(userInfo));

        var confirm = document.getElementById("confirmMsg");
        confirm.classList.replace("d-none", "d-block");
        var signIn = document.getElementById("signin");
        signIn.classList.replace("d-none", "d-block");
    }
    else {
        var tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block")
    }
}

function userNameValidation() {
    var usernameAlert = document.getElementById("usernameAlert");
    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if (regex.test(userName.value) == true && userName.value != "") {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");
        return false;
    }
}

function userPassValidation() {
    var userPasswordAlert = document.getElementById("userPasswordAlert");
    var regex = /^.{5,15}$/;
    if (regex.test(userPass.value) == true && userPass.value != "") {
        userPass.classList.add("is-valid");
        userPass.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        userPass.classList.add("is-invalid");
        userPass.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");
        return false;
    }

}

function userEmailValidation() {
    var userEmailAlert = document.getElementById("userEmailAlert");
    var regex = /@[a-z]{5,10}(\.com)$/;
    if (regex.test(userEmail.value) == true && userEmail.value != "") {
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-block", "d-none");
        return false;
    }

}
function validation() {
    userNameValidation();
    userEmailValidation();
    userPassValidation();
    if (userNameValidation() == true && userPassValidation() == true && userEmailValidation() == true) {
        return true;
    } else {
        return false;
    }
}

function isExsit() {
    var accountExistMsg = document.getElementById("accountExistMsg");
    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].name.toLowerCase() == userName.value.toLowerCase() ||
            userInfo[i].email.toLowerCase() == userEmail.value.toLowerCase()) {
            userName.classList.remove("is-valid");
            userEmail.classList.remove("is-valid");
            accountExistMsg.classList.replace("d-none", "d-block");
            return true;
        }
        else {
            return false;
        }
    }
}

//html.index ==login
var username=localStorage.getItem("sessionUsername");
function login() {
    var loginBtn = document.getElementById("loginBtn");
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var wrongMsg = document.getElementById("wrongMsg");
    if (loginEmail.value == "" || loginPassword.value == "") {
        var fillMsg = document.getElementById("fillMsg")
        fillMsg.classList.replace("d-none", "d-block");
        return false;
    }

    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() &&
            userInfo[i].pass.toLowerCase() == loginPassword.value.toLowerCase()
        ) 
        {
            localStorage.setItem("sessionUsername", userInfo[i].name);
            loginBtn.setAttribute("href", "Welcom.html");
        }
        else{
              wrongMsg.classList.replace("d-none","d-block")
        }
    }

}
function displayWelcomeUser(){
    document.getElementById("username").innerHTML= "Welcom "+ username ;
}

function logout(){
    localStorage.remove("username");
}