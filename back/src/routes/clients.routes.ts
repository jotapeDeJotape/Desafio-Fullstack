import { Router } from "express";
import { createClientsControllers, listClientsControllers } from "../controllers/clients.controller";

const clientsRoutes = Router()

clientsRoutes.post('', createClientsControllers)
clientsRoutes.get('', listClientsControllers)

export default clientsRoutes