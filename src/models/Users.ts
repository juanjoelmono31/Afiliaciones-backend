import { Schema, model, Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';




const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    roles: {
        type: String,
        required: true
    },
    
    proyectos: {
        type: String,
    }
   

}, {
    versionKey: false,
    timestamps: true
})

export interface IUser extends Document{
    nombre: string ;
    apellido: string;
    correo: string;
    password: string ;
    direccion: string;
    estado: boolean;
    roles: string;
    proyectos: string;
    encryptPassword(password: string): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
   
}


userSchema.methods.encryptPassword = async function (password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
}


export default model<IUser>('Users', userSchema)