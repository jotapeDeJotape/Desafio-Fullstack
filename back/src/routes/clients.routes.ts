import { Router } from "express";
import { createClientsControllers, deleteClientsControllers, listClientsControllers, retriveClientsControllers } from "../controllers/clients.controller";

const clientsRoutes = Router()

clientsRoutes.post('', createClientsControllers)
clientsRoutes.delete('/:id', deleteClientsControllers)
clientsRoutes.get('', listClientsControllers)
clientsRoutes.get('/:id', retriveClientsControllers)

export default clientsRoutes