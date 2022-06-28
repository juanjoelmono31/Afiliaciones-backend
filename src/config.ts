import { config } from 'dotenv'
config();

export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb:localhost/afiliaciones',
    SECRET: 'afiliaciones-api'
}
