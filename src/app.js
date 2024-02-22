import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import homeRoute from './routes/home'
import categoriesRoute from './routes/categories'
import productsRoute from './routes/products'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/', homeRoute)
    this.app.use('/category/', categoriesRoute)
    this.app.use('/product/', productsRoute)
  }
}

export default new App().app
