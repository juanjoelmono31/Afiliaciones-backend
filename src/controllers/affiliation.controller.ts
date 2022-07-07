import Affiliation from '../models/Affiliation'
import {request, Request, response, Response} from 'express';
import multer from '../libs/multer'
import path from 'path';
import { stringify } from 'querystring';
import xContentTypeOptions from 'helmet/dist/types/middlewares/x-content-type-options';


//Creacion de una afiliacion 
export async function creatAffiliation(req: Request , res: Response): Promise<Response> {

    // console.log("ACA LLEGA ", req.files);
    
   
    // console.log(req.files); // UPLOADED FILE DESCRIPTION RECEIVED
    // res.send({
    //   status: "success",
    //   message: "Files uploaded successfully",
    //   data: req.files,
    // });

    // const data = req.files;
    console.log(req.files)


    const {cedula, nombre,apellido, genero, fecha_nacimiento,
        direccion, correo, celular, telefono, nombre_emergencia,
        celular_emergencia,  fecha_ingreso, examen_ingreso, salario,
        cargo, curso_alturas, rut, eps, arl, fondo_pensiones, fondo_cesantias, caja_compensacion,
        estado, numero_cuenta, entidad_bancaria, aux_admin_revision, whatsapp,telegram,} = req.body
        
        
        const newAffiliation = {
            
            cedula: cedula, nombre: nombre, apellido: apellido, genero: genero, fecha_nacimiento: fecha_nacimiento,
            direccion: direccion, correo: correo, celular:celular, telefono: telefono, nombre_emergencia: nombre_emergencia,
            celular_emergencia: celular_emergencia, fecha_ingreso: fecha_ingreso, examen_ingreso: examen_ingreso, salario: salario,
            cargo: cargo, curso_alturas: curso_alturas, rut:rut, eps:eps, arl: arl, fondo_pensiones: fondo_pensiones, fondo_cesantias: fondo_cesantias, caja_compensacion: caja_compensacion,
            estado: estado, numero_cuenta: numero_cuenta, entidad_bancaria: entidad_bancaria, aux_admin_revision: aux_admin_revision, whatsapp: whatsapp,
            telegram: telegram, 
            cedula_frontal: req.files , //cedula_posterior: `http://localhost:4000/${req.file?.filename}`,
           
            
            // req.file.forEach( element => {

            //    cedula_frontal.push( element.path), cedula_posterior.push (element.path)

            // });
            
           
          
        }
        
        
        const affiliation = new Affiliation(newAffiliation)
        // for(let i=0; i<req.file?.length; i++) {
        //     affiliation.cedula_frontal.push(req.file[i]?.path), affiliation.cedula_posterior.push (req.file[i]?.path)
        // } 
        await affiliation.save()

        return res.json({
            message: 'Affiliation successfuly saved',
            affiliation
        });
}

// Buscar todas las afiliaciones
export async function findAllAffiliation(req: Request, res: Response): Promise<Response> {
    
    const affiliation = await Affiliation.find().sort('-createdAt')
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
    const { correo, rut, curso_alturas, examen_ingreso, eps, arl,fondo_pensiones,
        fondo_cesantias, caja_compensacion, entidad_bancaria, numero_cuenta } = req.body

    const updatedAffiliation = await Affiliation.findByIdAndUpdate(id, {
        correo, rut, curso_alturas, examen_ingreso, eps, arl,fondo_pensiones,
        fondo_cesantias, caja_compensacion, entidad_bancaria, numero_cuenta
    })

    return res.json({
        message: 'Succesfully update',
        updatedAffiliation
    })
}

//Actualizar estado
export async function updateEstado(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { estado  } = req.body
    const updatedEstado = await Affiliation.findByIdAndUpdate(id, {
        estado
    })

    return res.json({
        message: 'Succesfully update',
        updatedEstado
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

