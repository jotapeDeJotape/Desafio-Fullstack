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

    @Column({length: 150})
    password: string

    @Column({length: 10})
    telephone: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Clients, clients => clients.contacts, {eager:true})
    client: Clients

}


export {Contacts}