import { Product, productModel } from '../models/products'

class ProductController {
  async store(req, res) {
    const {
      title, description, price, category, ownerId,
    } = req.body
    try {
      const newProduct = new Product();
      newProduct.title = title;
      newProduct.description = description;
      newProduct.price = price;
      newProduct.category = category;
      newProduct.ownerId = ownerId;

      // Chame o método register() do modelo Product
      await newProduct.register();

      return res.json(newProduct);
    } catch (e) {
      console.error('Erro ao registrar o produto:', e);
      return res.status(400).json(e)
    }
  }

  /*
  async view(req, res) {
    const { id } = req.params
    try {
      const products = await productModel.findOne({ _id: id })
      return res.json(products)
    } catch (e) {
      console.error('Erro ao buscar os produtos:', e);
      return res.status(400).json(e)
    }
  }

  async list(req, res) {
    try {
      const products = await productModel.find()
      return res.json(products)
    } catch (e) {
      console.error('Erro ao buscar os produtos:', e);
      return res.status(400).json(e)
    }
  }
  */

  async update(req, res) {
    const { id } = req.params
    const {
      title, description, price, category,
    } = req.body
    try {
      await productModel.findByIdAndUpdate({ _id: id }, {
        title, description, price, category,
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
      await productModel.findByIdAndDelete({ _id: id })
      return res.json({ msg: `Exclusão do item de ID ${id} feita com sucesso!` })
    } catch (e) {
      console.error('Erro ao deletar o produto:', e);
      return res.status(400).json(e)
    }
  }
}

export default new ProductController()
