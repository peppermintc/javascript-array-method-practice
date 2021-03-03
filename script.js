// const items = [
//     { name: 'Bike',     price: 100},
//     { name: 'TV',       price: 200},
//     { name: 'Album',    price: 10},
//     { name: 'Book',     price: 5},
//     { name: 'Phone',    price: 500},
//     { name: 'Computer', price: 1000},
//     { name: 'Keyboard', price: 25},
// ]

// does not change old array and create new one
// const filteredItems = items.filter((item) => {
//     return item.price <= 100
// })
// does not change old array and create new one
// const itemPrices = items.map((item) => {
//     return item.price
// })
// const foundItem = items.find((item) => {
//     return item.name === 'Book'
// })
// items.forEach((item) => {
//     console.log(item.name)
// })
// const hasInexprensiveItems = items.some((item) => {
//     return item.price <= 100
// })
// const hasInexprensiveItems = items.every((item) => {
//     return item.price <= 1000
// })
// const total = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal
// }, 0)

const items = [1, 2, 3, 4, 5]
const includesTwo = items.includes(2)

console.log(includesTwo)