import { ReactNode } from "react"

export interface ILogin{
    email: string
    password: string
}
export interface IProviderProps {
    children: ReactNode
}

export interface IRegister {
    fullName: string
    email: string
    password:string
    telephone: string
}