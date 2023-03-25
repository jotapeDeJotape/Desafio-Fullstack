import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { clientWithoutPasswordSerializer } from "../../schemas/clients.schemas"

const retriveClientServices = async (clientID) => {
    const clientRepository = AppDataSource.getRepository(Clients)
    const client = await clientRepository.findOneBy({
        id: clientID
    })

    const clientWithoutPassword = await clientWithoutPasswordSerializer.validate(client,{
        stripUnknown:true
    })

    return clientWithoutPassword
}

export {retriveClientServices}