import Users from "models/Users";
import mongoose from "mongoose";

mongoose.connect('http://localhost:4000/afiliaciones')

var users =[
    new Users ({
        nombre: 'Oscar',
        apellido: 'Gonzalez Adarve',
        correo: 'oscar16gonzalez@gmail.com',
        password: '12Oscar34',
        celular: 3128502119,
        direccion: 'Carrera 23 # 56-45',
        estado: true,
        roles: 'Super Admin',
        proyectos: '',

    }),

    new Users ({
        nombre: 'Milton Ricardo',
        apellido: 'Herrera Posada',
        correo: 'miltonherrera@hotmail.com',
        password: 'miltonherrera',
        celular: 3187759021,
        direccion: 'Cra 24 #22-02',
        estado: true,
        roles: 'Super Admin',
        proyectos: '',

    }),

    new Users ({
        nombre: 'Carolina',
        apellido: 'Cuartas Ortiz',
        correo: 'asistenterhmanizales@hotmail.com',
        password: 'asistenterh',
        celular: 3207810820,
        direccion: 'Cra 24 #22-02',
        estado: true,
        roles: 'Aux Admin',
        proyectos: '',

    }),

    new Users ({
        nombre: 'Alejandro',
        apellido: 'Arbeales Serna',
        correo: 'consorcio.oha@gmail.com',
        password: 'consorcio.oha',
        celular: 3116353306,
        direccion: 'Cra 24 #22-02',
        estado: true,
        roles: 'Residente',
        proyectos: '',

    }),

    
]

var done = 0;
for (var i = 0; i <users.length; i++) {
    users[i].save(function(err, result) {
        done++;
        if(done === users.length) {
            exit();
        }
    })
}


function exit() {
    mongoose.disconnect()
}