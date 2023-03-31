import {NextFunction,Request,Response } from "express";
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import AppDataSource from "../data-source";
import { Clients } from "../entities/clients.entities";
import { clientWithoutPasswordSerializer } from "../schemas/clients.schemas";


export const ensureAuthMiddleware = async (req:Request,res:Response,next: NextFunction) => {

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, async (error,decoded : any) => {
        if(error){
            return res.status(401).json({
                message: error.message
            })
        }
        const clientRepo = AppDataSource.getRepository(Clients)
        const client = await clientRepo.findOneBy({
            id: decoded.sub as string
        })
        if(!client){
            return res.status(401).json({ message: "Invalid token" })
        }
        const validatedClient = await clientWithoutPasswordSerializer.validate(client, {
            stripUnknown:true
        })
        req.client = validatedClient
        
        return next()
    })

}