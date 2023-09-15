import express, { json } from 'express' // require -> commonJS
import { createRegisterRouter } from './routes/register.js'
import { corsMiddleware } from './middlewares/cors.js'

import { RegisterModel } from './models/mysql/registro.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/register', createRegisterRouter({ RegisterModel }))

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
