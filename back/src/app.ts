import "reflect-metadata"
import express from "express"
import 'express-async-errors'
import { handleError } from "./errors/handleError"
import clientsRoutes from "./routes/clients.routes"


const app = express()
app.use(express.json())

app.use('/clients/', clientsRoutes)

app.use(handleError)

export default app