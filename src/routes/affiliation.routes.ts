import { Router } from 'express'
import * as affiliationController from '../controllers/affiliation.controller'
import multer from '../libs/multer'

const router = Router();

// const cpUpload = multer.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// router.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })

//http://localhost:4000/afiliacion
router.post('/', multer.single('cedula_frontal' ),affiliationController.creatAffiliation)

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