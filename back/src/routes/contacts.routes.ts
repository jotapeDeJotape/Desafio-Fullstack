import { Router } from "express";
import { listClientsControllers } from "../controllers/clients.controller";
import { createContactsControllers, deleteContactsControllers, listContactsControllers, patchContactsControllers, retriveContactsControllers } from "../controllers/contacts.controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsContactOwner } from "../middlewares/ensureIsContactOwner.middleware";


const contactRoutes = Router()

contactRoutes.post('', ensureAuthMiddleware, createContactsControllers)
contactRoutes.patch('/:id', ensureAuthMiddleware, ensureIsContactOwner, patchContactsControllers )
contactRoutes.delete('/:id', ensureAuthMiddleware, ensureIsContactOwner, deleteContactsControllers)
contactRoutes.get('', listContactsControllers)
contactRoutes.get('/:id', retriveContactsControllers)

export {contactRoutes}