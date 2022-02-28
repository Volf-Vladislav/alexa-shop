import { login } from './api/postLogin.js'

window.onload = function () {
    const loginButton = document.querySelector('#loginButton')

    loginButton.onclick = function () {
        const loginValue = document.querySelector('#login').value
        const password = document.querySelector('#password').value

        login(loginValue, password)
    }
}