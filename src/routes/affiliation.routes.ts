import { Router } from 'express'
import * as affiliationController from '../controllers/affiliation.controller'
import multer from '../libs/multer'

const router = Router();

//http://localhost:4000/afiliacion
router.post('/', multer.array('cedula_frontal', 4),affiliationController.creatAffiliation)

//http://localhost:4000/afiliacion
router.get('/', affiliationController.findAllAffiliation)

//http://localhost:4000/afiliacion
router.get('/:id', affiliationController.findOneAffiliation)

//http://localhost:4000/afiliacion
router.put('/:id', affiliationController.updateAffiliation)

router.put('/estado/:id', affiliationController.updateEstado)


//http://localhost:4000/afiliacion
router.delete('/:id', affiliationController.deleteAffiliation)

export default router;