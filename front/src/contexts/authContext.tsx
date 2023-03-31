import api from "@/services/api";
import { ILogin, IProviderProps, IRegister } from "@/types";
import { Box, Toast, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { createContext, useContext } from "react";

interface AuthProviderData {
    DoLogin: (userData:ILogin) => void
    DoRegister: (userData:IRegister) => void
}

const authContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}:IProviderProps ) => {
    const router = useRouter()
    const toast = useToast()
    

    const DoLogin = (userData: ILogin) => {

        api.post("/login/", userData)
        .then((response) => {
            
            setCookie(null, "stars.token", response.data.Token.token, {maxAge: 60*30, path: '/'})
            setCookie(null, "stars.user", response.data.Token.user, {maxAge: 60*30, path: '/'})
            setCookie(null, "stars.id", response.data.Token.id, {maxAge: 60*30, path: '/'})
            toast({title: "success", variant: "solid", position: "bottom-right", isClosable: true,
            render: () => (
                 <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Login Realizado com Sucesso
            </Box>)})
            router.push("/dashboard")

        }).catch((error) => {
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                 <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    {error.response.data.message}
            </Box>)})
            console.log(error)
        })
    }

    const DoRegister = (userData: IRegister) => {
        api.post("/clients/", userData)
        .then((response) => {
            toast({title: "success", variant: "solid", position: "top-right", isClosable: true,
            render: () => (
                 <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Conta Criada Com o Sucesso!
            </Box>)})
        })
        .catch((error) => {
            toast({title: "failed", variant: "solid", position: "top-left", isClosable: true,
            render: () => (
                 <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                   {error.response.data.message}
            </Box>)})
            console.log(error)
        })
    }

    return (
        <authContext.Provider value ={{DoLogin, DoRegister}}>
            {children}
        </authContext.Provider>
    )
}


export const useAuth = () => useContext(authContext)