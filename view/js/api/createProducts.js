import { rootUrl } from './rootUrl.js'

export async function createProduct(title, category, content, price, img) {
    const url = rootUrl + '/api/manager/product'

    const data = {
        title: title,
        category: category,
        content: content,
        price: price,
        img: 'test'
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

        alert(serverData.message)
    }

    catch (err) {
        console.log(err)
    }
}