function likeButton(element) {
    document.querySelector(element).innerText++
}

function remove(element) {
    element.remove();
}

function login(element) {
    if (document.querySelector(element).innerText == "Login") {
        document.querySelector(element).innerText = "Logout"
    }
    else {
        document.querySelector(element).innerText = "Login"
    }
}