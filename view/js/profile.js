import { getProfile } from "./api/getProfile.js"

function profileTemplate(name, mail, phone) {
    return (
        `
            <p class="title">Данные Профиля</p>
            <div class="userData">
                <p>Имя ${name}</p>
                <p>Почта ${mail}</p>
                <p>Телефон ${phone}</p>
            </div>
        `
    )
}

export function renderProfile(data) {
    const profile = document.querySelector('.profile')

    profile.innerHTML = profileTemplate(data.name, data.mail, data.phone)
}

const exitButton = document.querySelector('#exitButton')

exitButton.onclick = () => {
    document.cookie = 'token' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    location.href = '/'
}

getProfile()