import mongoose from '../configs/mongoDb'

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  ownerId: { type: Number, required: true },
});

const productModel = mongoose.model('Product', productSchema)

class Product {
  constructor(title, description, price, category, ownerId) {
    this.title = title
    this.description = description
    this.price = price
    this.category = category
    this.ownerId = ownerId
    this.errors = []
  }

  async register() {
    await this.productExists()
    await this.categoryExists()

    if (this.errors.length > 0) return

    await productModel.create({
      title: this.title,
      description: this.description,
      price: this.price,
      category: this.category,
      ownerId: this.ownerId,
    });
  }

  async productExists() {
    const existingProduct = await productModel.findOne({ title: this.title })
    if (existingProduct) this.errors.push('Produto já existe.');
  }

  async categoryExists() {
    const existingCategory = await productModel.findOne({ category: this.category })
    if (!existingCategory) this.errors.push('Categoria não existe.');
  }
}

export { Product, productModel }
