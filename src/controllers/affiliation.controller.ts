import Affiliation from '../models/Affiliation'
import {request, Request, response, Response} from 'express';


//Creacion de una afiliacion 
export async function creatAffiliation(req: Request, res: Response): Promise<Response> {
   
   
    const {cedula, nombre,apellido, genero, fecha_nacimiento,
        direccion, correo, celular, telefono, nombre_emergencia,
        celular_emergencia,  fecha_ingreso, examen_ingreso, salario,
        cargo, curso_alturas, rut, eps, arl, fondo_pensiones, caja_compensacion,
        estado, numero_cuenta, entidad_bancaria, aux_admin_revision} = req.body

        console.log(req.files)
        const newAffiliation = {
            cedula: cedula, nombre: nombre, apellido: apellido, genero: genero, fecha_nacimiento: fecha_nacimiento,
            direccion: direccion, correo: correo, celular:celular, telefono: telefono, nombre_emergencia: nombre_emergencia,
            celular_emergencia: celular_emergencia, fecha_ingreso: fecha_ingreso, examen_ingreso: examen_ingreso, salario: salario,
            cargo: cargo, curso_alturas: curso_alturas, rut:rut, eps:eps, arl: arl, fondo_pensiones: fondo_pensiones, caja_compensacion: caja_compensacion,
            estado: estado, numero_cuenta: numero_cuenta, entidad_bancaria: entidad_bancaria, aux_admin_revision: aux_admin_revision, 
            
            cedula_frontal: req.file?.path, cedula_posterior: req.file?.path


            
        }

        const affiliation = new Affiliation(newAffiliation)
        await affiliation.save()

        return res.json({
            message: 'Affiliation successfuly saved',
            affiliation
        });
}

// Buscar todas las afiliaciones

export async function findAllAffiliation(req: Request, res: Response): Promise<Response> {
    const affiliation = await Affiliation.find()
    return res.json(affiliation)
}

//Buscar afiliacion por id

export async function findOneAffiliation(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const affiliation = await Affiliation.findById(id)

    return res.json(affiliation)
}

//Actualizar por id 

export async function updateAffiliation(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { estado } = req.body
    const updatedAffiliation = await Affiliation.findByIdAndUpdate(id, {
        estado
    })

    return res.json({
        message: 'Succesfully update',
        updatedAffiliation
    })
}

//Borrar afiliacion por id 

export async function deleteAffiliation(req: Request, res: Response) : Promise<Response>{
   const { id } = req.params
   const afiliacion = await Affiliation.findByIdAndDelete(id)
   return res.json({
    message: 'Affiliation delete succesfully',
    afiliacion
   })
}

