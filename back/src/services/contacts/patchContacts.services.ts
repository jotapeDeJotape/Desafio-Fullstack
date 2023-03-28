import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { IContact, IContactPatch } from "../../interfaces/contacts";
import { returnContactsSerializers } from "../../schemas/contacts.schemas";


const patchContactService = async (contactDataPatched: IContactPatch, contactData: IContact, contactID: string) => {

    const contactRepository = AppDataSource.getRepository(Contacts)

    const contact = await contactRepository.findOneBy({
        id: contactID
    })

    

    const contactUpdated = await contactRepository.create({
        ...contactData,
        ...contactDataPatched
    })

    contactUpdated.isActive = contactData.isActive
    await contactRepository.save(contactUpdated)


    const validate = await returnContactsSerializers.validate(contactUpdated, {
        stripUnknown:true
    })

    
    
    return validate

}

export {patchContactService}