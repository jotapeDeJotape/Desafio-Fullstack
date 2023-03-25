import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { Contacts } from "../../entities/contacts.entities"
import { AppError } from "../../errors/AppError"




const createContactServices = async (contactData, clientID) => {
    const contactRepository = AppDataSource.getRepository(Contacts)
    const clientsRepositoyry = AppDataSource.getRepository(Clients)

    const client = clientsRepositoyry.findOneBy({
        id: clientID
    })

    const contactEmail = contactRepository.findOneBy({
        email:  contactData.email
    })

    const contactTelephone = contactRepository.findOneBy({
        telephone: contactData.telephone
    })

    if(contactEmail){
        throw new AppError("Email Already Been Used")
    }
    if(contactTelephone){
        throw new AppError ("Telephone Already Been Used")
    }

    contactData.client = client
    
    await contactRepository.save(contactData)

    return contactData

}