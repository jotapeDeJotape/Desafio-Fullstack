import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Text, MenuItem, MenuList, Avatar, Menu, MenuButton, FormLabel, Input, FormControl, InputGroup, InputRightElement, FormHelperText, FormErrorMessage, ModalFooter,  } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { destroyCookie } from "nookies"
import { useState } from "react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { IPatch } from "@/types"
import { useClient } from "@/contexts/clientContext"
import ModalDeleteClient from "./modalDeleteClient"


const ModalEditClient = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {DoPatch} = useClient()
    const {isOpen, onOpen, onClose} = useDisclosure()
    const router = useRouter()

    const formScheme = yup.object().shape({
        fullName: yup.string().notRequired(),
        email: yup.string().email("Deve Ser Um Email Válido").notRequired(),
        password: yup.string().notRequired(),
        telephone: yup.string().notRequired()
    })
    
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setPasswordEmail] = useState("")
    const [inputFullName, setFullName] = useState("")
    const [inputTelephone, setTelephone] = useState("")
    const emailError = inputEmail === ""
    const passwordError = inputPassword === ""
    const fullNameError = inputFullName === ""
    const telephoneError = inputTelephone === ""
    
    const {register,handleSubmit, formState: {errors}} = useForm<IPatch>({
        resolver: yupResolver(formScheme)
    })

    const onFormSubmit = (formData: IPatch) => {
        
        DoPatch(formData)
        
    }
    
    const LogOut = () => {
        destroyCookie(null,'stars.user')
        destroyCookie(null,'stars.token')
        destroyCookie(null, 'stars.id')
        router.push('/')
      }

    return (
        <>
        <Menu>
            <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                    <Avatar>
                    </Avatar>
                  </MenuButton>
                  <MenuList bg={'#040053'} >
                    <MenuItem bg={'gray.200'} _hover={{bg:'#040053', color: "white"}} onClick={onOpen}>
                    <Text onClick={onOpen}>Editar Perfil</Text>
                        <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay/>
                                <ModalContent w={'90%'} h={'700px'}>
                            <ModalHeader>Editar Perfil</ModalHeader>
                            <ModalBody>
                                    <FormControl isRequired isInvalid={fullNameError} >
                                        <FormLabel fontFamily={'monospace'} fontSize='25'>Nome Completo</FormLabel>
                                        <Input placeholder="Alterar Nome" size={['md', 'lg']} required type="text" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} {...register('fullName')} onChange={(e) => setFullName(e.target.value)}  />
                                        {!fullNameError ? (
                                            <FormHelperText>
                                                        Digite Seu Nome Completo
                                            </FormHelperText>
                                            ):
                                            <FormErrorMessage>
                                                {errors.fullName?.message}
                                            </FormErrorMessage>
                                                
                                                }
                                </FormControl>
                                        
                                <FormControl isRequired isInvalid={emailError} >
                                    <FormLabel fontFamily={'monospace'} fontSize='25'>E-mail</FormLabel>
                                    <Input placeholder="Alterar Email"  size={['md', 'lg']} required type="email" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"}  {...register('email')} onChange={(e) => setInputEmail(e.target.value)}  />
                                    {!emailError ? (
                                        <FormHelperText>
                                                    Digite Seu e-email
                                        </FormHelperText>
                                        ):
                                        <FormErrorMessage>
                                            {errors.email?.message}
                                        </FormErrorMessage>
                                            
                                            }
                                </FormControl>
                                <FormControl isRequired isInvalid={passwordError}>
                                    <FormLabel fontFamily={'monospace'} fontSize='25'>Senha</FormLabel>
                                    <InputGroup>
                                        <Input placeholder="Alterar Senha" size={['md', 'lg']} required bg={'gray.300'} borderColor={"black"} focusBorderColor="blue.800" type={showPassword? "text":"password" } {...register("password")} onChange={(e) => setPasswordEmail(e.target.value)} />
                                        <InputRightElement paddingTop={2}>
                                        <Button size={['md', 'lg']} variant='ghost' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                                        </Button>
                                        </InputRightElement>
                                        </InputGroup>
                                        {!passwordError ? (
                                        <FormHelperText>
                                                    Digite Sua Senha
                                        </FormHelperText>
                                        ):
                                        <FormErrorMessage>
                                            {errors.password?.message}
                                        </FormErrorMessage>
                                            
                                            }   
                                        </FormControl>
                                        <FormControl isRequired isInvalid={telephoneError}>
                                        <FormLabel fontFamily={'monospace'} fontSize='25'>Telefone</FormLabel>
                                        <Input placeholder="Alterar Número" size={['md', 'lg']} required type="text" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} {...register('telephone')}  onChange={(e) => setTelephone(e.target.value)} />
                                        {!telephoneError ? (
                                                <FormHelperText>
                                                            Digite Seu Telefone
                                                </FormHelperText>
                                                ):
                                                <FormErrorMessage>
                                                    {errors.telephone?.message}
                                                </FormErrorMessage>}
                                    </FormControl>
                                    
                            </ModalBody>
                            <ModalFooter gap={3} justifyContent={'space-between'}>
                            <Button  size="lg" variant="default" onClick={handleSubmit(onFormSubmit)}>
                                            Atualizar
                                        </Button>
                                <Button size="lg" variant="default" onClick={onClose}>
                                    Fechar
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                        </Modal> 
                    </MenuItem>
                    <MenuItem bg={'gray.200'} _hover={{bg:'#040053', color: "white"}}>
                    <ModalDeleteClient/>
                    </MenuItem>
                    <MenuItem bg={'gray.200'} _hover={{bg:'#040053', color: "white"}} onClick={() => LogOut()}>
                      Sair
                    </MenuItem>
                  </MenuList>
                </Menu>
                
      
        </>
    )
}

export default ModalEditClient