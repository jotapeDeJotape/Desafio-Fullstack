export interface ICreateClient {
    fullName:string
    email:string
    password:string
    telephone: string
    createdAt: Date
}

export interface ILoginClient {
    email:string
    password:string
}

export interface IClientResponse {
    id: string
    fullName:string
    email:string
    telephone: string
    createdAt: Date
    isActive: boolean
}

export interface IClientPatch {
    id?: string
    fullName?:string
    password?: string
    email?:string
    telephone?: string
}

