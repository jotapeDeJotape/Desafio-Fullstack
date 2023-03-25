import AppDataSource from "../../data-source"
import { Contacts } from "../../entities/contacts.entities"
import { AppError } from "../../errors/AppError"
import { returnContactsSerializers } from "../../schemas/contacts.schemas"


const retriveContactsServices = async (contactID:string) => {
    const contactRepository =  AppDataSource.getRepository(Contacts)
    const contact = await contactRepository.findOneBy({
        id: contactID
    })

    if(!contact){
        throw new AppError("Contact Doesn't Exists", 404)
    }

    const validate = returnContactsSerializers.validate(contact, {
        stripUnknown:true
    })

    return validate
}

export {retriveContactsServices}