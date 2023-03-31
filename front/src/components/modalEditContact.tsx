import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { IContactPatch } from "@/types"
import { useContact } from "@/contexts/contactContext"


interface IModalContactPatch {
    contactID: string
}



const ModalEditContact = ({contactID} :IModalContactPatch) => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const {DoEditContact} = useContact()

    const formScheme = yup.object().shape({
        fullName: yup.string().notRequired(),
        email: yup.string().email("Deve Ser Um Email Válido").notRequired(),
        telephone: yup.string().notRequired(),
    })
    
    const [inputEmail, setInputEmail] = useState("")
    const [inputFullName, setFullName] = useState("")
    const [inputTelephone, setTelephone] = useState("")
    const emailError = inputEmail === ""
    const fullNameError = inputFullName === ""
    const telephoneError = inputTelephone === ""
    
    const {register,handleSubmit, formState: {errors}} = useForm<IContactPatch>({
        resolver: yupResolver(formScheme)
    })

    const onFormSubmit = (formData: IContactPatch) => {
        console.log(contactID)
        DoEditContact(contactID, formData)
        
    }



    return (
        <>
            <Button  size="md" variant="default" onClick={onOpen}>
                 Editar
            </Button>
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
                                            Atualizar
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


export default ModalEditContact