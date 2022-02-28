import { getProducts } from "./api/getProduct.js"

function template(category, description, price, id) {
    return (
        `
        <div class="row">
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src="../assets/png/home2.jpg">
                    <span class="card-title">${category}</span>
                </div>
                <div class="card-content">
                    <p>${description}</p>
                </div>
                <div class="card-action">
                    <a href="#">${price}</a>
                </div>
            </div>
        </div>
    </div>
        `
    )
}

export function renderProducts(data) {
    const mainContent = document.querySelector('.mainContent')

    let id = 1

    data.product.forEach(element => {
        mainContent.innerHTML += template(element.category, element.content, element.price, id)
        id++
    })
}

getProducts()