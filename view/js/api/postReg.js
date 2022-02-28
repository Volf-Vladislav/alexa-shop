import { rootUrl } from './rootUrl.js'
import { changeColor } from '../validation.js'

export async function registration(name, mail, phone, login, password) {
    const url = rootUrl + '/api/auth/registration'

    const data = {
        username: name,
        mail: mail,
        phone: phone,
        login: login,
        password: password
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const serverData = await response.json()

        if (serverData.isSucsess == 'true') {
            location.href = '/auth'
        }
        else {
            const items = document.querySelectorAll('input')
            changeColor('#ff4e4e', items)
        }

    }

    catch (err) {
        console.log(err)
    }
}