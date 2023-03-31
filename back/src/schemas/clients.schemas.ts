import * as yup from 'yup'
import {SchemaOf} from 'yup'
import { IClientPatch, IClientResponse, ICreateClient } from '../interfaces/clients'

const clientWithoutPasswordSerializer: SchemaOf<IClientResponse> = yup.object().shape({
    isActive: yup.boolean().required(),
    createdAt: yup.date().required(),
    telephone: yup.string().required(),
    email:yup.string().email().required(),
    fullName: yup.string().required(),
    id: yup.string().required()
})

const ListSchemaSerializer: SchemaOf<IClientResponse> = yup.object().shape({
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    telephone: yup.string().notRequired(),
    email:yup.string().email().notRequired(),
    fullName: yup.string().notRequired(),
    id: yup.string().notRequired()
})

const PatchclientPasswordSerializer: SchemaOf<IClientPatch> = yup.object().shape({
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    telephone: yup.string().notRequired(),
    password: yup.string().notRequired(),
    email:yup.string().email().notRequired(),
    fullName: yup.string().notRequired(),
    id: yup.string().notRequired()
})

const listArraySerializer = yup.array(ListSchemaSerializer).nullable()

export {clientWithoutPasswordSerializer, listArraySerializer, PatchclientPasswordSerializer}    