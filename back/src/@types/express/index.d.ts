import * as express from 'express'
import { IClientResponse } from '../../interfaces/clients'
import { IContactPatch } from '../../interfaces/contacts'

declare global{
    namespace Express{
        interface Request{
                client: IClientResponse
                contact: IContact
        }
    }
}