import { Router } from 'express'
import categoryController from '../controllers/categories'

const router = new Router()

router.post('/store', categoryController.store)
router.get('/view/:id', categoryController.view)
router.get('/list', categoryController.list)
router.put('/update/:id', categoryController.update)
router.delete('/delete/:id', categoryController.delete)

export default router
