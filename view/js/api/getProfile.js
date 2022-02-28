import { renderProfile } from "../profile.js"
import { rootUrl } from './rootUrl.js'

export async function getProfile() {
    const url = rootUrl + '/api/data'

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const serverData = await response.json()
        renderProfile(serverData)
    }

    catch (err) {
        console.log(err)
    }
}