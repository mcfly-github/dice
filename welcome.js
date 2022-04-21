function storeCredentials() {

    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    statusCheck()
    document.getElementById("sign-result").innerHTML = "Registration is succesful, please sign in!";
    document.getElementById("login").hidden = false;
}


function checkCredentials() {

    if (checkUsername() && checkPassword() == true) {
        console.log("Login OK")
        location.href = "dice.html"
    } else {
        document.getElementById("sign-result").innerHTML = "Wrong username and/or password.";
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


function statusCheck() {

    if (localStorage.getItem("username") != null) {
        document.getElementById("title").innerHTML = "Login"
        document.getElementById("register").hidden = true;
    } else {
        document.getElementById("login").hidden = true;
    }
}


function validateRegistration() {

    if (document.getElementById("reg-username").value == "") {
        document.getElementById("sign-result").innerHTML = alert("Username field can't be empty.");
        location.href = "welcome.html"
    } else if (document.getElementById("reg-password").value == "") {
        document.getElementById("sign-result").innerHTML = alert("Password field can't be empty.");
        location.href = "welcome.html"
    } else {
        storeCredentials()
    }

}


function validateLogin() {

    if (document.getElementById("username").value == "") {
        document.getElementById("sign-result").innerHTML = alert("Username field can't be empty.");
        location.href = "welcome.html"
    } else if (document.getElementById("password").value == "") {
        document.getElementById("sign-result").innerHTML = alert("Password field can't be empty.");
        location.href = "welcome.html"
    } else {
        checkCredentials()
    }
}


function resetLocalStorage() {

    localStorage.clear()
    location.reload()
}
