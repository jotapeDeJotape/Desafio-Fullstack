import {BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import { Clients } from "./clients.entities"


@Entity("contacts")
class Contacts{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({length: 150})
    fullName:string

    @Column({length: 150})
    email:string

    @Column({length: 11})
    telephone: string

    @Column({default:true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Clients, clients => clients.contacts, {eager:true})
    client: Clients

}


export {Contacts}