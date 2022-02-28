import { rootUrl } from './rootUrl.js'
import { changeColor } from '../validation.js'

export async function login(login, password) {
    const url = rootUrl + '/api/auth/login'

    const data = {
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

        if (serverData.token != null) {
            document.cookie = `token=${serverData.token}`
            location.href = '/dashboard'
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