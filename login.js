function checkCredentials() {

    if (checkUsername() && checkPassword() == true) {
        document.getElementById("login-result").innerHTML = "Login OK";
    } else {
        document.getElementById("login-result").innerHTML = "Login FAILED";
    }
}

function checkUsername() {

    if (document.getElementById("username").value === localStorage.getItem("username")) {
        return true;
    }
}

function checkPassword() {

    if (document.getElementById("password").value === localStorage.getItem("password")) {
        return true;
    }
}
