import  Users, { IUser } from '../models/Users'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req: Request, res: Response) => {
    const user: IUser = new Users({
        nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo,
        password: req.body.password, celular: req.body.celular, direccion: req.body.direccion,
        estado: req.body.estado, roles: req.body.roles, proyectos: req.body.proyectos
    })
    user.password = await user.encryptPassword(user.password)
    const saveUser = await user.save()

    const token: string = jwt.sign({_id: saveUser._id}, process.env.TOKEN_SECRET || 'x-access')

    res.header('token', token).json(saveUser)
    
}

//Iniciar sesion
export const signIn = async (req: Request, res: Response) => {
    const user = await Users.findOne({correo: req.body.correo})

    if (!user) return res.status(400).json('Email or Password is wrong')

    const correctPassword: boolean = await user.comparePassword(req.body.password)
    if (!correctPassword) return res.status(400).json('Invalid Password')
    res.json('Successfuly')
}

//buscar todos los usuarios
export async function findAllUsers(req: Request, res: Response): Promise<Response> {
    const users = await Users.find()
    return res.json(users)
}

//Buscar afiliacion por id
export async function findOneUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const users = await Users.findById(id)

    return res.json(users)
}

//Borrar afiliacion por id 
export async function deleteUser(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const users = await Users.findByIdAndDelete(id)
    return res.json({
     message: 'User delete succesfully',
     users
    })
 }


 // actualizar por id el campo estado 
 export async function updateUser(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const { estado } = req.body
    const updatedUser = await Users.findByIdAndUpdate(id, {
        estado
    })

    return res.json({
        message: 'Succesfully Update',
        updatedUser
    })
 }