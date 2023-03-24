import { Request,Response } from "express";
import { ICreateClient } from "../interfaces/clients";
import { createClientsService } from "../services/clients/createClients.services";
import { listClientsServices } from "../services/clients/listClients.services";

 const  createClientsControllers = async(req: Request,res: Response) => {
    const clientData: ICreateClient  = req.body
    const newClient = await createClientsService(clientData)
    return res.status(201).json(newClient)
}

 const  listClientsControllers = async(req: Request,res: Response) => {
    const ListClient = await listClientsServices()
    return res.status(201).json(ListClient)
}

export {createClientsControllers, listClientsControllers}