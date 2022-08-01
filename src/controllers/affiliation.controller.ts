import Affiliation from '../models/Affiliation'
import {request, Request, response, Response} from 'express'


import twilio from "twilio"

const accountSid = 'AC9d1223165fa11744114017feeccf978f'
const authToken = 'f4f4d012416b7b43b754154fb278d309'

const client =  twilio(accountSid , authToken)



//Creacion de una afiliacion 
export async function creatAffiliation(req: Request , res: Response): Promise<Response> {

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
            telegram: telegram, archivos: req.files 
            
          
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
    
    const affiliation = await Affiliation.find().sort('-createdAt')
    return res.json(affiliation)
}

//Buscar afiliacion por cedula
export async function findOneAffiliation(req: Request, res: Response): Promise<Response> {
    //const { id } = req.params
    const affiliation = await Affiliation.find({cedula: req.params.cedula})

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


export async function SMS(req: Request, res: Response) {
    const celular = req.params.celular
    const nombre = req.params.nombre

    console.log('aca esta', celular, nombre);
    


    client.messages.create({
        body: `Hola, ${nombre} ya te encuentras listo para comenzar a trabajar con la empresa OHA, presentate el dia sabado a las 8:00 AM`,
        //to: process.env.NUMBER_PHONE,
        to: `+57${celular}`,
        from: '+19283994209'
    }).then((message) => console.log(message.sid))
    
    res.json({
        message: 'OK'
    })


   
}
