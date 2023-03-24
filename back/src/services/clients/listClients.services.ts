import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { listArraySerializer } from "../../schemas/clients.schemas"

const listClientsServices = async () => {
    const clientRepository =  AppDataSource.getRepository(Clients)

    const client = await clientRepository.find()
    

    const validate = listArraySerializer.validate(client)

    return validate

}

export {listClientsServices}