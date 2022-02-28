export function changeColor(color, items) {
    items.forEach(item => {
        item.style.borderBottom = `1px solid ${color}`
    })

    setTimeout(() => {
        items.forEach(item => {
            item.style.borderBottom = '1px solid #9e9e9e'
        })
    }, 2000)
}