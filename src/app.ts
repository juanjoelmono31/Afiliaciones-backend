import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import affiliationRoutes from './routes/affiliation.routes'
import loginRoutes from './routes/login.routes'
import proyectRoutes from './routes/proyectos.routes'
// import UserRoutes from './routes/users.routes'
// import ProyectRoutesPruebas from './routes/proyectosPruebas.routes'
// import ProyectRoutes from './routes/proyectos.routes'
// import authRoutes from './routes/auth.routes'
import path, { dirname } from 'path'
import multer from 'multer'


const app = express()
//createRole();





//settings
app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

//middlewares


//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome' })
})

app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/login', loginRoutes)
app.use('/afiliacion', affiliationRoutes)
app.use('/proyectos', proyectRoutes)
// app.use('/auth', authRoutes)
// app.use('/proyectosprueba', ProyectRoutesPruebas)
// app.use('/proyectos', ProyectRoutes)



export default app;
