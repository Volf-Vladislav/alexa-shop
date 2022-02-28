import { registration } from "./api/postReg.js"

window.onload = function () {
    const loginButton = document.querySelector('#loginButton')

    loginButton.onclick = function () {
        const name = document.querySelector('#name').value
        const mail = document.querySelector('#mail').value
        const phone = document.querySelector('#phone').value
        const loginValue = document.querySelector('#login').value
        const password = document.querySelector('#password').value

        registration(name, mail, phone, loginValue, password)
    }
}