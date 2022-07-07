if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import affiliationRoutes from './routes/affiliation.routes'
import loginRoutes from './routes/login.routes'
import proyectRoutes from './routes/proyectos.routes'
import path, { dirname } from 'path'
import multer from 'multer'
import bodyParser  from 'body-parser'
import './databases'


const app = express()






//settings
app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(app.get('port'))
console.log('Server on port', app.get('port'))

//middlewares


//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome' })
})


app.use('/login', loginRoutes)
app.use('/afiliacion', affiliationRoutes)
app.use('/proyectos', proyectRoutes)



export default app;
