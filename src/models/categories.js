import mongoose from '../configs/mongoDb'

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ownerId: { type: Number, required: true },
});

const categoryModel = mongoose.model('Category', categorySchema)

class Category {
  constructor(title, description, price, category, ownerId) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.errors = []
  }

  async register() {
    await this.categoryExists()

    if (this.errors.length > 0) return

    await categoryModel.create({
      title: this.title,
      description: this.description,
      ownerId: this.ownerId,
    });
  }

  async categoryExists() {
    const existingCategory = await categoryModel.findOne({ category: this.category })
    if (existingCategory) this.errors.push('Categoria já existe.');
  }
}

export { Category, categoryModel }
