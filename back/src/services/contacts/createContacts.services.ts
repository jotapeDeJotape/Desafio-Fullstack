import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { Contacts } from "../../entities/contacts.entities"
import { AppError } from "../../errors/AppError"
import { ICreateContact } from "../../interfaces/contacts"
import { clientWithoutPasswordSerializer } from "../../schemas/clients.schemas"
import { returnContactsSerializers } from "../../schemas/contacts.schemas"




const createContactServices = async (contactData:ICreateContact, clientID:string) => {
    const contactRepository = AppDataSource.getRepository(Contacts)
    const clientsRepositoyry = AppDataSource.getRepository(Clients)
    const contact =  contactRepository.create(contactData)

    const client = await clientsRepositoyry.findOneBy({
        id: clientID
    })

    const contactEmail = await contactRepository.findOneBy({
        email:  contactData.email
    })
    
    const contactTelephone = await contactRepository.findOneBy({
        telephone: contactData.telephone
    })

    if(contactEmail){
        throw new AppError("Email Already Been Used",401)
    }
    if(contactTelephone){
        throw new AppError ("Telephone Already Been Used",401)
    }

    contact.client = client
    
    await contactRepository.save(contact)

    const validate = returnContactsSerializers.validate(contact, {
        stripUnknown:true
    })

    return validate

}

export {createContactServices}