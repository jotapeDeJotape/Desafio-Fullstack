import { hashSync } from "bcryptjs"
import { object } from "yup"
import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities"
import { IClientPatch, IClientResponse } from "../../interfaces/clients"
import { clientWithoutPasswordSerializer, PatchclientPasswordSerializer } from "../../schemas/clients.schemas"


const patchClientsService = async (clientDataPatch: IClientPatch, clientData:IClientResponse, ClientID:string) => {

    
    
    const clientRepository = AppDataSource.getRepository(Clients)
    const clientParam = await clientRepository.findOneBy({
        id: ClientID
    })
    
    const clientPatch = clientDataPatch
    if(clientPatch.password){
        clientPatch.password = hashSync(clientPatch.password, 10)
    }
    if(!clientPatch.password){
        clientPatch.password = clientParam.password
    }

    const patchClient = clientRepository.create({
        ...clientData,
        ...clientPatch
    })

    patchClient.isActive = clientData.isActive
    const clientPatched = await clientRepository.save(patchClient)
     

    const validateReturn = await PatchclientPasswordSerializer.validate(clientPatched, {
        stripUnknown:true
    })


    return validateReturn
}


export {patchClientsService}