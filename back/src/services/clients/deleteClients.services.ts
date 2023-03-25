import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { AppError } from "../../errors/AppError"

const deleteClientServices = async (clientID) => {
    const clientRepository = AppDataSource.getRepository(Clients)
    const client = await clientRepository.findOneBy({
        id: clientID
    })

    if(!client.isActive){
        throw new AppError('Client is Already Inactive', 404)
    }

    client.isActive = false

    await clientRepository.save(client)


    return {}
}

export {deleteClientServices}