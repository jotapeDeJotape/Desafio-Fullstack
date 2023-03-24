import AppDataSource from "../../data-source";
import { Clients } from "../../entities/clients.entities";
import { AppError } from "../../errors/AppError";
import { ICreateClient } from "../../interfaces/clients";
import { clientWithoutPasswordSerializer } from "../../schemas/clients.schemas";

const createClientsService = async (clientData: ICreateClient) => {

    const clientRepository = AppDataSource.getRepository(Clients)
    const client = clientRepository.create(clientData)

    const verifyEmail = await clientRepository.findOneBy({
        email: clientData.email
    })

    if(verifyEmail){
        throw new AppError("Email Already Exists")
    }

    await clientRepository.save(client)

    const clientWithoutPassword = await clientWithoutPasswordSerializer.validate(client,{
        stripUnknown:true
    })

    return clientWithoutPassword

}

export {createClientsService}