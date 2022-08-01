import { Router } from 'express'
import * as loginController from '../controllers/login.controller'

const router = Router();

//http://localhost:4000/auth/signup
router.post('/signup', loginController.signUp)

//http://localhost:4000/auth/singin
router.post('/singin', loginController.signIn)

//http://localhost:4000/auth/
router.get('/', loginController.findAllUsers)

//http://localhost:4000/auth/id
router.get('/:correo', loginController.findOneUser)

//http://localhost:4000/auth/id
router.delete('/:id', loginController.deleteUser)

//http://localhost:4000/auth/proyectos/id
router.put('/proyectos/:id', loginController.updateCampoProyect)


export default router;