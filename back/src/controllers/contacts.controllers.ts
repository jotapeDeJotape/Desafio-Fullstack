import { Request,Response } from "express";
import { ICreateContact } from "../interfaces/contacts";
import { createContactServices } from "../services/contacts/createContacts.services";
import { deleteContactsServices } from "../services/contacts/deleteContacts.services";
import { listContactsService } from "../services/contacts/listAllContacts.services";
import { listContactsByClientService } from "../services/contacts/listContactsByClient.services";
import { retriveContactsServices } from "../services/contacts/retriveContact.services";

const  createContactsControllers = async(req: Request,res: Response) => {
    const contactData: ICreateContact = req.body
    const clientID:string = req.client.id
    const newContact = await createContactServices(contactData,clientID)
    return res.status(201).json(newContact)
}

const listContactsControllers = async(req: Request, res: Response) => {
    const listContacts = await listContactsService()
    return res.status(200).json(listContacts)
}

const listContactsByClientControllers = async(req: Request, res: Response) => {
    const clientID:string = req.params.id
    const listContacts = await listContactsByClientService(clientID)
    return res.status(200).json(listContacts)
}

const retriveContactsControllers = async(req:Request, res: Response) => {
    const contactID:string = req.params.id
    const contact = await retriveContactsServices(contactID)
    return res.status(200).json(contact)
}

const deleteContactsControllers = async(req:Request, res: Response) => {
    const contactID:string = req.params.id
    const deleteContacts = await deleteContactsServices(contactID)
    return res.status(204).json(deleteContacts)
}

export {createContactsControllers, listContactsControllers, listContactsByClientControllers,retriveContactsControllers, deleteContactsControllers}