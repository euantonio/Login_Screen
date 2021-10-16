function clicar() {
    window.alert("Este é apenas um site teste. Este botão não está funcionando.")
}

const passwordInput = document.querySelector('.password')
const olho = document.querySelector('#olho')

function eyeClick() {
    let inputTypeIsPassword = passwordInput.type == "password"

    if (inputTypeIsPassword) {
        showPassword()
    } else {
        hidePassword()
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text")
    olho.setAttribute("src", "eye-off.svg")
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
    olho.setAttribute("src", "eye.svg")
}