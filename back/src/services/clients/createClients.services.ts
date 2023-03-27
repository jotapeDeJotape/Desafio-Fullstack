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

    const verifyTelephone = await clientRepository.findOneBy({
        telephone: clientData.telephone
    })

    const verifyPassword = await clientRepository.findOneBy({
        telephone: clientData.password
    })

    if(verifyEmail){
        throw new AppError("Este Email Já Está Em Uso",401)
    }
    if (verifyTelephone){
        throw new AppError("Este Telephone Já Está Em Uso",401)
    }
    if (verifyPassword){
        throw new AppError("Está Senha Já Está Em Uso",401)
    }


    await clientRepository.save(client)

    const clientWithoutPassword = await clientWithoutPasswordSerializer.validate(client,{
        stripUnknown:true
    })

    return clientWithoutPassword

}

export {createClientsService}