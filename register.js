function sendCredentials() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("user", username);
    localStorage.setItem("password", password);

}