import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { AppError } from "../../errors/AppError"
import { clientWithoutPasswordSerializer } from "../../schemas/clients.schemas"

const retriveClientServices = async (clientID) => {
    const clientRepository = AppDataSource.getRepository(Clients)
    const client = await clientRepository.findOneBy({
        id: clientID
    })
    
    if(!client){
        throw new AppError("Client Doesn't Exists",404)
    }

    const clientWithoutPassword = await clientWithoutPasswordSerializer.validate(client,{
        stripUnknown:true
    })

    return clientWithoutPassword
}

export {retriveClientServices}