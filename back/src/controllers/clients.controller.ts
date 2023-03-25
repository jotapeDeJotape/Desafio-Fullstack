import { Request,Response } from "express";
import { ICreateClient } from "../interfaces/clients";
import { createClientsService } from "../services/clients/createClients.services";
import { deleteClientServices } from "../services/clients/deleteClients.services";
import { listClientsServices } from "../services/clients/listClients.services";
import { retriveClientServices } from "../services/clients/retriveClients.services";

 const  createClientsControllers = async(req: Request,res: Response) => {
    const clientData: ICreateClient  = req.body
    const newClient = await createClientsService(clientData)
    return res.status(201).json(newClient)
}

 const  listClientsControllers = async(req: Request,res: Response) => {
    const ListClient = await listClientsServices()
    return res.status(200).json(ListClient)
}

const retriveClientsControllers = async(req:Request, res: Response) => {
    const clientID = req.params.id
    const retriveClient = await retriveClientServices(clientID)
    return res.status(200).json(retriveClient)
}

const deleteClientsControllers = async(req:Request, res: Response) => {
    const clientID = req.params.id
    const deleteClient = await deleteClientServices(clientID)
    return res.status(204).json(deleteClient)
}

export {createClientsControllers, listClientsControllers, retriveClientsControllers, deleteClientsControllers}