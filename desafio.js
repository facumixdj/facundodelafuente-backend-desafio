// aqui creo mi clase con las funciones de agregar obtener por id y por completo
class ProductManager {
    constructor() {
        this.products = []
    }
    // con la condicion de que si ya se enceuntra el "producto"
    // se lo identifica por numero de serie o code en este casi
    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)
        if (prod) {
            console.log("Producto ya encontrado")
        } else {
            this.products.push(product)
        }
    }
    getProducts() {
        console.log(this.products)
    }
    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)
        if (prod) {
            console.log(prod)
        } else {
            console.log("Producto no encontrado")
        }
    }
}
// aqui estoy diciendo como va a ser mi producto (como esqueleto)
class Product {
    constructor(title, description, size, price, code, stock, thumbnail) {
        this.title = title
        this.description = description
        this.size = size //talle
        this.price = price
        this.code = code
        this.stock = stock
        this.thumbnail = thumbnail
        this.id = Product.incrementarId() 
    }
    static incrementarId() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}
// creo los "prductos"
const producto1 = new Product("Zapatilla", "Jordan 1 Corta", 40, 28000, "11001 EUR", "5", []);
const producto2 = new Product("Zapatilla", "Addidas x BudBuuny", 40, 40000, "11004 EUR", "15", []);
const prodcuto3 = new Product("Zapatilla", "Jordan Clasic Rojo", 41, 32000, "11005 EUR", "35", []);
const productManager = new ProductManager()
//agrego los productos
productManager.addProduct(producto2)
productManager.addProduct(prodcuto3)
productManager.addProduct(producto1)
console.log("Prueba de que no se pueden repetir los productos") // esto sirve para avitar redundancias
productManager.addProduct(producto1)// 
/* console.log(producto1)
console.log(producto2)
console.log(prodcuto3)
 */
console.log("ahora muestro todos los productos")
productManager.getProducts()
console.log("y Busco la zapatilla numero con id 2")
productManager.getProductById(2)