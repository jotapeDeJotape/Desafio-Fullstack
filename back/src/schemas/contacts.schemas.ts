import * as yup from 'yup'
import {SchemaOf} from 'yup'
import { IContact, ICreateContact } from '../interfaces/contacts'


const returnContactsSerializers: SchemaOf<IContact> = yup.object().shape({
    client: yup.object({
        isActive: yup.boolean().required(),
        createdAt: yup.date().required(),
        telephone: yup.string().required(),
        email:yup.string().email().required(),
        fullName: yup.string().required(),
        id: yup.string().required(),
    }).required(),
    isActive: yup.boolean().required(),
    createdAt: yup.date().required(),
    telephone: yup.string().required(),
    email:yup.string().email().required(),
    fullName: yup.string().required(),
    id: yup.string().required()
})

const listContactsSerializers = yup.array(returnContactsSerializers)

export {returnContactsSerializers, listContactsSerializers}