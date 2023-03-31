import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { Contacts } from "../../entities/contacts.entities"
import { listContactsSerializers } from "../../schemas/contacts.schemas"


const listContactsByClientService = async (clientID:string) => {
    const clientRepository = AppDataSource.getRepository(Clients)
    const contactsRepository = AppDataSource.getRepository(Contacts)

    const client = await clientRepository.findOneBy({
        id: clientID
    })

    const contacts = await contactsRepository.findBy({
        client: {
            id: client.id
        },
        isActive: true
    })

    

    const listContacts = listContactsSerializers.validate(contacts, {
        stripUnknown:true
    })

    return listContacts
}


export {listContactsByClientService}