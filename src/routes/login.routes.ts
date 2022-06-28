import { Router } from 'express'
import * as loginController from '../controllers/login.controller'

const router = Router();

//http://localhost:4000/login/signup
router.post('/signup', loginController.signUp)

//http://localhost:4000/login/singin
router.post('/singin', loginController.signIn)

//http://localhost:4000/login/
router.get('/', loginController.findAllUsers)

//http://localhost:4000/login/id
router.get('/:id', loginController.findOneUser)

//http://localhost:4000/login/id
router.delete('/:id', loginController.deleteUser)


export default router;