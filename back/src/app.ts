import "reflect-metadata"
import express from "express"
import 'express-async-errors'
import { handleError } from "./errors/handleError"
import clientsRoutes from "./routes/clients.routes"
import { sessionRoutes } from "./routes/sessions.routes"
import { contactRoutes } from "./routes/contacts.routes"


const app = express()
app.use(express.json())

app.use('/clients/', clientsRoutes)
app.use('/contacts/', contactRoutes)
app.use('/login/', sessionRoutes)

app.use(handleError)

export default app