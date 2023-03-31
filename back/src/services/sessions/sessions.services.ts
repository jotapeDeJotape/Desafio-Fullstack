import { compare, compareSync } from "bcryptjs"
import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities";
import { AppError } from "../../errors/AppError"
import jwt from 'jsonwebtoken'

const createSessionService = async({email, password}) => {

    const clientRepository = AppDataSource.getRepository(Clients)

    const clientEmail = await clientRepository.findOneBy({
        email: email,
    })

    
    if(!clientEmail ){
        throw new AppError("Seu Email Ou Sua Senha estão Invalidos", 403)
    }
    const passwordMatch = await compare(password, clientEmail.password)
    
    if(!passwordMatch){
        throw new AppError("Seu Email Ou Sua Senha estão Invalidos", 403)
    }

    if(!clientEmail.isActive){
        throw new AppError("Cliente Não está Ativo", 400)
    }

    const token = jwt.sign({}, process.env.SECRET_KEY, {
        subject: clientEmail.id,
        expiresIn: '24h'
    })

    return {token, user: clientEmail.fullName, id: clientEmail.id}
}


export {createSessionService}