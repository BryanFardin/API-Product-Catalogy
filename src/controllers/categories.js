import { Category, categoryModel } from '../models/categories'

class CategoryController {
  async store(req, res) {
    const {
      title, description, ownerId,
    } = req.body
    try {
      const newCategory = new Category();
      newCategory.title = title;
      newCategory.description = description;
      newCategory.ownerId = ownerId;

      // Chame o método register() do modelo Category
      await newCategory.register();

      return res.json(newCategory);
    } catch (e) {
      console.error('Erro ao registrar o produto:', e);
      return res.status(400).json(e)
    }
  }

  async view(req, res) {
    const { id } = req.params
    try {
      const categories = await categoryModel.findOne({ _id: id })
      return res.json(categories)
    } catch (e) {
      console.error('Erro ao buscar os produtos:', e);
      return res.status(400).json(e)
    }
  }

  async list(req, res) {
    try {
      const categories = await categoryModel.find()
      return res.json(categories)
    } catch (e) {
      console.error('Erro ao buscar os produtos:', e);
      return res.status(400).json(e)
    }
  }

  async update(req, res) {
    const { id } = req.params
    const {
      title, description,
    } = req.body
    try {
      await categoryModel.findByIdAndUpdate({ _id: id }, {
        title, description,
      })
      return res.json({ msg: `${title} atualizado com sucesso!` });
    } catch (e) {
      console.error('Erro ao atualizar produtos:', e);
      return res.status(400).json(e)
    }
  }

  async delete(req, res) {
    const { id } = req.params
    try {
      await categoryModel.findByIdAndDelete({ _id: id })
      return res.json({ msg: `Exclusão do item de ID ${id} feita com sucesso!` })
    } catch (e) {
      console.error('Erro ao deletar o produto:', e);
      return res.status(400).json(e)
    }
  }
}

export default new CategoryController()
