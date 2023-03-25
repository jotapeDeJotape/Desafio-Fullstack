export interface ICreateClient {
    fullName:string
    email:string
    password:string
    telephone: string
    createdAt: Date
}

export interface IClientResponse {
    id: string
    fullName:string
    email:string
    telephone: string
    createdAt: Date
    isActive: boolean
}

