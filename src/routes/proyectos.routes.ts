import { Router } from 'express'
import * as proyectsController from '../controllers/proyectos.controller'

const router = Router();

//http://localhost:4000/proyectos
router.post('/', proyectsController.creatProyects)

//http://localhost:4000/proyectos
router.get('/', proyectsController.findAllProyects)

//http://localhost:4000/proyectos
router.get('/:id', proyectsController.findOneProyect)

//http://localhost:4000/proyectos
router.put('/:id', proyectsController.updateProyect)

//http://localhost:4000/proyectos
router.delete('/:id', proyectsController.deleteProyect)

export default router;