import { NextFunction, Response, Request } from "express"
import AppDataSource from "../data-source"
import { Clients } from "../entities/clients.entities"
import { Contacts } from "../entities/contacts.entities"
import { AppError } from "../errors/AppError"

const ensureIsContactOwner = async(req:Request, res: Response, next: NextFunction) => {
    const contactRepository = AppDataSource.getRepository(Contacts)


    const ensureIsContactOwner = await contactRepository.findOneBy({
        id: req.params.id,
        client: {
            id: req.client.id
        }
    })

    req.contact = ensureIsContactOwner

    if(ensureIsContactOwner){
        return next()
    }



    throw new AppError("Você não é o Dono Deste Contato", 403)
}

export {ensureIsContactOwner}