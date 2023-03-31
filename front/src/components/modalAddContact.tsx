import { AddIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalOverlay, FormControl, ModalContent, ModalBody, ModalFooter, ModalHeader, FormLabel,FormErrorMessage,FormHelperText, Input, InputGroup, InputRightElement, useDisclosure } from "@chakra-ui/react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { IContactRegister, IRegister } from "@/types"
import { useForm } from "react-hook-form"
import { useContact } from "@/contexts/contactContext"


const ModalAddContacts = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {DoCreateContact} = useContact()
    

    const formScheme = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email("Deve Ser Um Email Válido").required(),
        telephone: yup.string().required(),
    })
    
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setPasswordEmail] = useState("")
    const [inputFullName, setFullName] = useState("")
    const [inputTelephone, setTelephone] = useState("")
    const emailError = inputEmail === ""
    const fullNameError = inputFullName === ""
    const telephoneError = inputTelephone === ""
    
    const {register,handleSubmit, formState: {errors}} = useForm<IContactRegister>({
        resolver: yupResolver(formScheme)
    })

    const onFormSubmit = (formData: IContactRegister) => {
        
        DoCreateContact(formData)
        
    }


    




    return (
        <>
        <Button variant={'default'} gap={2} size={['sm', 'md']}  fontFamily={'body'} fontWeight={'bold'} color={'#161175'} onClick={onOpen}> <AddIcon/>  Adicionar Contatos</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay/>
                                <ModalContent w={'80%'} h={'600px'}>
                            <ModalHeader>Adicionar Contato</ModalHeader>
                            <ModalBody>
                                    <FormControl isRequired isInvalid={fullNameError} >
                                        <FormLabel fontFamily={'monospace'} fontSize='25'>Nome Completo</FormLabel>
                                        <Input placeholder="Nome" size={['md', 'lg']} required type="text" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} {...register('fullName')} onChange={(e) => setFullName(e.target.value)}  />
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
                                        <FormControl isRequired isInvalid={telephoneError}>
                                        <FormLabel fontFamily={'monospace'} fontSize='25'>Telefone</FormLabel>
                                        <Input placeholder="Ex: 21979020128" size={['md', 'lg']} required type="text" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} {...register('telephone')}  onChange={(e) => setTelephone(e.target.value)} />
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
                            <ModalFooter justifyContent={'space-between'}>
                            <Button  size="lg" variant="default" onClick={handleSubmit(onFormSubmit)}>
                                            Adicionar
                                        </Button>
                                <Button size="lg" variant="default" onClick={onClose}>
                                    Fechar
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                        </Modal> 
        </>
    )
}


export default ModalAddContacts