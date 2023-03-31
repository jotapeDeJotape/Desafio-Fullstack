import api from "@/services/api";
import { IContactPatch, IContactRegister, IProviderProps } from "@/types";
import { createContext, useContext } from "react";
import nookies from "nookies"
import { Box, useToast } from "@chakra-ui/react";

interface ContactProviderData {
    DoCreateContact: (contactData: IContactRegister) => void
    DoDeleteContact: (contactID:string) => void
    DoEditContact: (contactID:string, contactDataPatched: IContactPatch) => void
}

const contactContext = createContext<ContactProviderData>({} as ContactProviderData)

export const ContactProviderContext = ({children}: IProviderProps) => {

    const toast = useToast()
    const clientID = nookies.get()
    

    const DoCreateContact = async (contactData: IContactRegister) => {
        console.log(contactData)
        if(clientID['stars.token']){
            api.defaults.headers.authorization = `Bearer ${clientID['stars.token']}`
            await api.post('/contacts/', contactData)
            .then((response) => {
                toast({title: "success", variant: "solid", position: "top-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Conta Criada Com o Sucesso!
                </Box>)})
            })
            .catch((error) => {
                console.log(error)
                toast({title: "failed", variant: "solid", position: "top-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    {error.response.data.message}
                </Box>)})
            })
        }
    }

    const DoDeleteContact = async (contactID:string) => {
        if(clientID['stars.token']){
            api.defaults.headers.authorization = `Bearer ${clientID['stars.token']}`
            await api.delete(`/contacts/${contactID}/`)
            .then((response) => {
                toast({title: "success", variant: "solid", position: "top-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Contato Deletado Com Sucesso!
                </Box>)})
            })
            .catch((error) => {
                console.log(error)
                toast({title: "failed", variant: "solid", position: "top-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Algo Deu Errado, Por Favor Tente Novamente!
                </Box>)})
            })
        }
}

    const DoEditContact = async (contactID:string, contactDataPatched: IContactPatch ) => {

        const attContact = {}

        for(const key in contactDataPatched){
            if(contactDataPatched[key] !== ''){
                attContact[key] = contactDataPatched[key]
            }
        }

        if(clientID['stars.token']){
            api.defaults.headers.authorization = `Bearer ${clientID['stars.token']}`
            await api.patch(`/contacts/${contactID}/`, attContact)
            .then((response) => {
                toast({title: "success", variant: "solid", position: "top-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Contato Editado Com Sucesso!
                </Box>)})
            })
            .catch((error) => {
                console.log(error)
                toast({title: "failed", variant: "solid", position: "top-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Algo Deu Errado, Por Favor Tente Novamente!
                </Box>)})
            })
        }
    }

    return (
        <contactContext.Provider value={{DoCreateContact,DoDeleteContact, DoEditContact}}>
            {children}
        </contactContext.Provider>
    )

}


export const useContact = () => useContext(contactContext)