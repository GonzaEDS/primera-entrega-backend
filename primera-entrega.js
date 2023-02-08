class ProductManager {
  constructor() {
    this.products = []
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    const newProduct = { title, description, price, thumbnail, code, stock }
    if (this.products.length > 0) {
      newProduct.id = [...this.products].pop().id + 1
    } else {
      newProduct.id = 1
    }
    this.products.push(newProduct)
  }

  getProducts() {
    return this.products
  }
  getProductById(id) {
    if (this.products.find(prod => prod.id === id)) {
      console.log(
        'Requested product:',
        this.products.find(prod => prod.id === id)
      )
    } else {
      console.log('Product not found')
    }
  }
}

const products = new ProductManager()

console.log('1', products.getProducts())

products.addProduct('pencil', 'lorem ipsum', 'pencil.svg', 10, 'A1', 100)

console.log('2', products.getProducts())

products.addProduct('rule', 'lorem ipsum', 'rule.svg', 3.55, 'A2', 50)

console.log('3', products.getProducts())

products.getProductById(3)

// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)
