import api from "@/services/api";
import { IContact, IProviderProps } from "@/types";
import { Box, useToast } from "@chakra-ui/react";
import nookies from "nookies"
import { createContext, useContext, useEffect, useState } from "react";


interface ListProviderData {
    clientsContacts: IContact[]
}

const ListsContext = createContext<ListProviderData>({} as ListProviderData)

export const ListsProvider = ({children}: IProviderProps) => {
    const [clientsContacts, setClientsContacts] = useState([])
    const [allContacts, setAllContacts] = useState([])
    
    const toast = useToast()

    const clientID = nookies.get(null, "stars.id")
    
    const  ListClientContacts = async () => {
        await api.get(`/clients/${clientID["stars.id"]}/contacts`)
        .then((response) => {
                setClientsContacts(response.data)
                
            })
            .catch((error) => {
                console.log(error)
            })
        }
    // useEffect(() => {
    //         if(clientID['stars.id']){
    //             ListClientContacts()
    //         }
    //     },)


    useEffect(() => {
        const ListAllClients = async () => {
            api.get(`/contacts/`)
            .then((response) => {
                setAllContacts(allContacts)
            })
            .catch((error) => {
                toast({title: "failed", variant: "solid", position: "top-left", isClosable: true,
            render: () => (
                 <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Algo Deu Errado Na Listagem. Por Favor Tente Novamente
            </Box>)})
            })
        }

         ListAllClients()
    }, )

    return (
        <ListsContext.Provider value={{clientsContacts}}>
            {children}
        </ListsContext.Provider>
    )
}


export const useList = () => useContext(ListsContext)