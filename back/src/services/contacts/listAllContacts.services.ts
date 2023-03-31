import AppDataSource from "../../data-source"
import { Contacts } from "../../entities/contacts.entities"
import { listContactsSerializers } from "../../schemas/contacts.schemas"

const listContactsService = async () => {
    const contactsRepository = AppDataSource.getRepository(Contacts)

    const contacts = await contactsRepository.find({
        relations: {
            client:true
        },
        where: {
            client: {
                isActive: true
            }
        }
    })


    const listContacts = listContactsSerializers.validate(contacts, {
        stripUnknown:true
    })

    return listContacts
}

export {listContactsService}