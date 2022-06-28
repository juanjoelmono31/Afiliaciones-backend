import Proyect from '../models/Proyectos'
import {request, Request, response, Response} from 'express';


//Creacion de un proyecto 
export async function creatProyects(req: Request, res: Response): Promise<Response> {
    const { contrato, objeto_contrato, contratista, nit, nombre_rep_legal, cedula_rep_legal,
        plazo_ejecucion, valor_contrato, departamento, municipio, usuarios, } = req.body
    

    const newProyect = {
            contrato: contrato, objeto_contrato: objeto_contrato, contratista: contratista, nit: nit,
            nombre_rep_legal: nombre_rep_legal, cedula_rep_legal: cedula_rep_legal, plazo_ejecucion: plazo_ejecucion,
            valor_contrato: valor_contrato, departamento: departamento, municipio: municipio, usuarios:usuarios
    }

    const proyects = new Proyect(newProyect)
    await proyects.save()

    return res.json({
        message: 'Proyect successfuly saved',
        proyects
    })


}


//Buscar todos los proyectos 
export async function findAllProyects(req: Request, res: Response): Promise<Response> {
    const proyects = await Proyect.find()
    return res.json(proyects)

}

//Buscar proyectos por id 
export async function findOneProyect(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const proyects = await Proyect.findById(id)

    return res.json(proyects)
}

//Actualizar por id 
export async function updateProyect(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { estado } = req.body
    const updatedProyect = await Proyect.findByIdAndUpdate(id, {
        estado
    })

    return res.json({
        message: 'Succesfully update',
        updatedProyect
    })
}

//Borrar por id 
export async function deleteProyect(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const proyects = await Proyect.findByIdAndDelete(id)
    return res.json({
     message: 'Affiliation delete succesfully',
     proyects
    })
 }
    

