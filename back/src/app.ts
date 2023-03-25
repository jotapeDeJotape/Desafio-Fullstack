import "reflect-metadata"
import express from "express"
import 'express-async-errors'
import { handleError } from "./errors/handleError"
import clientsRoutes from "./routes/clients.routes"
import contactsRoutes from "./routes/contacts.routes"
import { sessionRoutes } from "./routes/sessions.routes"


const app = express()
app.use(express.json())

app.use('/clients/', clientsRoutes)
app.use('/contatcs/', contactsRoutes)
app.use('/login/', sessionRoutes)

app.use(handleError)

export default app