import { Request, Response } from "express";
import { ILoginClient } from "../interfaces/clients";
import { createSessionService } from "../services/sessions/sessions.services";


const createSessionController = async (req: Request, res: Response) => {
    const clientBody: ILoginClient = req.body
    const token = await createSessionService(clientBody)
    return res.status(200).json({Token: token})
}


export {createSessionController}