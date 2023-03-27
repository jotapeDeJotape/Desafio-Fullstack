import {NextFunction,Request,Response } from "express";
import 'dotenv/config'
import jwt from 'jsonwebtoken'


export const ensureAuthMiddleware = async (req:Request,res:Response,next: NextFunction) => {

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (error,decoded : any) => {
        if(error){
            return res.status(401).json({
                message: error.message
            })
        }
        req.client = {
            id:decoded.sub as string,
        }
        
        return next()
    })

}