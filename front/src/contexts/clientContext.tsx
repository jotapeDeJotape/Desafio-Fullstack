import { IPatch, IProviderProps } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import nookies, { setCookie } from "nookies"
import api from "@/services/api";
import { Box, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface ClientProviderData {
    DoPatch: (clientDataPatch: IPatch) => void
    DoDelete: () => void
    client: null
}


const clientContext = createContext<ClientProviderData>({} as ClientProviderData)


export const ClientContextProvider = ({children}:IProviderProps) => {
    const toast = useToast()
    const router = useRouter()
    const clientID = nookies.get()
    const [client, setClient] = useState(null)
    
    
    const DoPatch = async (clientPatchData: IPatch) => {
        const token = clientID['stars.token']
        const PatchResolve = {}
        for(const key in clientPatchData){
            if(clientPatchData[key] != ''){
                PatchResolve[key] = clientPatchData[key]
            }
        }
        
        if(token){
            
            api.defaults.headers.authorization = `Bearer ${token}`
            await api.patch(`/clients/${clientID["stars.id"]}`, PatchResolve)
            .then((response) => {
                
                setCookie(null, "stars.user", response.data.fullName, {maxAge: 60*30, path: '/'})
                toast({title: "success", variant: "solid", position: "bottom-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Cliente Atualizado com Sucesso!
                </Box>)})
                router.reload()
                
            }).catch((error) => {
                
                toast({title: "success", variant: "solid", position: "bottom-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Algo De Errado Aconteceu
                </Box>)})
            })
        }        
    }


    const DoDelete = async () => {
        const token = clientID['stars.token']
        if(token){
            api.defaults.headers.authorization = `Bearer ${token}`
            await api.delete(`/clients/${clientID["stars.id"]}`)
            .then((response) => {
                toast({title: "success", variant: "solid", position: "bottom-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Cliente Deletado Com Sucesso!
                </Box>)})
            })
            .catch((error) => {
                toast({title: "success", variant: "solid", position: "bottom-right", isClosable: true,
                render: () => (
                     <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Algo De Errado Aconteceu
                </Box>)})
            })
        }
    }

    const GetUser = async () => {
        await api.get(`/clients/${clientID['stars.id']}`)
        .then((response) => {
            setClient(response.data)
            
        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <clientContext.Provider value={{DoPatch, client, DoDelete}}>
            {children}
        </clientContext.Provider>
    )
}


export const useClient = () => useContext(clientContext)