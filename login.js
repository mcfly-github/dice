function storeCredentials() {

    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

}

function checkCredentials() {

    if (checkUsername() && checkPassword() == true) {
        document.getElementById("login-result").innerHTML = "Login OK";
        location.href = "dice.html"
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
