import { rootUrl } from './rootUrl.js'
import { renderProducts } from './../product.js'

export async function getProducts() {
    const url = rootUrl + '/api/products'

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const serverData = await response.json()
        renderProducts(serverData)
    }

    catch (err) {
        console.log(err)
    }
}