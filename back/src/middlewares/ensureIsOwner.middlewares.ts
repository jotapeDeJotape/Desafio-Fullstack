import { Request, Response, NextFunction } from 'express'
import { AnySchema } from 'yup'
import AppDataSource from '../data-source'
import { Clients } from '../entities/clients.entities'
import { AppError } from '../errors/AppError'




const ensureIsOwner = async(req:Request, res: Response, next: NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Clients)

    const ensureIsOwner = await clientRepository.findOneBy({
        id: req.client.id
    })

    if(ensureIsOwner.id === req.params.id){
        return next()
    }

    throw new AppError("Você não é o Dono Desta Conta", 403)
}

export {ensureIsOwner}


// const ensureIsAdmOrUser = async(req: Request, res: Response, next: NextFunction) => {

//         const userRepository = AppDataSource.getRepository(Users)

//         const ensureAdmOrUser = await userRepository.findOneBy({
//             id: req.user.id
//         })

//         if(ensureAdmOrUser.id === req.params.id){
//             return next()
//         }


//         if(!ensureAdmOrUser.isAdm){
//             throw new AppError("User Must Be Adm", 403)
//         }
        
//         return next()
// }

// export default ensureIsAdmOrUser