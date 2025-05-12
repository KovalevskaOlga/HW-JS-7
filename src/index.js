import products from "./data-base/products.json"
import createList from "./templates/products.hbs"
console.log(createList({products}))
console.log("test")
const body = document.querySelector("body")
body.innerHTML = createList(products);