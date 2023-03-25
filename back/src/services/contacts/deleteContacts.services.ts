import AppDataSource from "../../data-source"
import { Contacts } from "../../entities/contacts.entities"
import { AppError } from "../../errors/AppError"

const deleteContactsServices = async (contactID:string) => {
    const contactRepository = AppDataSource.getRepository(Contacts)
    const contact = await contactRepository.findOneBy({
        id: contactID
    })

    if(!contact){
        throw new AppError("Contact Doesn't Exists", 404)
    }
    if(!contact.isActive){
        throw new AppError("Contact Is Already Inactive", 401)
    }

    contact.isActive = false

    await contactRepository.save(contact)

    return {}

}

export {deleteContactsServices}