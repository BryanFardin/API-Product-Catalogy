import { Router } from 'express'
import productController from '../controllers/products'

const router = new Router()

router.post('/store', productController.store)
// router.get('/view/:id', productController.view)
// router.get('/list', productController.list)
router.put('/update/:id', productController.update)
router.delete('/delete/:id', productController.delete)

export default router
