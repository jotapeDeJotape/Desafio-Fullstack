import {BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { hashSync } from "bcryptjs"
import { Contacts } from "./contacts.entities"

@Entity("clients")
class Clients{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({length: 150})
    fullName: string

    @Column({length: 150})
    email:string

    @Column({length: 150})
    password: string

    @Column({length: 11})
    telephone: string

    @Column({default:true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contacts, contactsToClients => contactsToClients.client)
    contacts: Contacts[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

}

export {Clients}