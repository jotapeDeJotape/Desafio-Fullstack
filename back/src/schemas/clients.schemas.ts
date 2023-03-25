import * as yup from 'yup'
import {SchemaOf} from 'yup'
import { IClientResponse, ICreateClient } from '../interfaces/clients'

const clientWithoutPasswordSerializer: SchemaOf<IClientResponse> = yup.object().shape({
    isActive: yup.boolean().required(),
    createdAt: yup.date().required(),
    telephone: yup.string().required(),
    email:yup.string().email().required(),
    fullName: yup.string().required(),
    id: yup.string().required()
})

const listArraySerializer = yup.array(clientWithoutPasswordSerializer).nullable()

export {clientWithoutPasswordSerializer, listArraySerializer}    