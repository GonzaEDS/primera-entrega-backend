class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.code = code
    this.stock = stock
  }
}

class ProductManager {
  constructor() {
    this.products = []
  }
  addProduct(product) {
    if (this.products.length > 0) {
      product.id = this.products.pop().id + 1
    } else {
      product.id = 1
    }
    this.products.push(product)
  }
  getProducts() {
    return this.products
  }
}

const products = new ProductManager()

const product1 = new Product(
  'pencil',
  'lorem ipsum',
  'pencil.svg',
  10,
  'A1',
  100
)

const product2 = new Product('rule', 'lorem ipsum', 'rule.svg', 3.55, 'A2', 50)

console.log('1', products.getProducts())

products.addProduct(product1)

console.log('2', products.getProducts())

products.addProduct(product2)

console.log('3', products.getProducts())

console.log(products.getProducts.length)

// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)
