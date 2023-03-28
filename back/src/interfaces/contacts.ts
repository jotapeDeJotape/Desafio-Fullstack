import { IClientResponse } from "./clients"

export interface IContact{
    fullName:string
    email:string
    telephone: string
    createdAt: Date
    isActive: boolean
    client: IClientResponse
}

export interface ICreateContact{
    fullName:string
    email:string
    telephone: string
    client: object
}

export interface IContactPatch {
    fullName?:string
    email?:string
    telephone?: string
}