import { createProduct } from "./api/createProducts.js"

const products = document.querySelector('.products')
const createProducts = document.querySelector('.createProducts')
const createButton = document.querySelector('.createButton12')

const createButtons = document.querySelectorAll('.createButton')

createButtons.forEach(element => {
    element.onclick = () => {
        products.style.display = 'none'
        createProducts.style.display = 'block'
    }
})

createButton.onclick = () => {
    const title = document.querySelector('#title').value
    const category = document.querySelector('#category').value
    const description = document.querySelector('#description').value
    const price = document.querySelector('#price').value

    createProduct(title, category, description, price, '')
}
