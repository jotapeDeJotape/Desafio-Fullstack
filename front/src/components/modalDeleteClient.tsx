import { useClient } from "@/contexts/clientContext"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { destroyCookie } from "nookies"




const ModalDeleteClient = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {DoDelete} = useClient()
    const router = useRouter()

    const DeleteCount = () => {
        destroyCookie(null,'stars.user')
        destroyCookie(null,'stars.token')
        destroyCookie(null, 'stars.id')
        DoDelete()
        router.push('/')
    }

    return (
            <>
                <Text onClick={onOpen}>Deletar Conta</Text>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Tem Certeza que quer deletar sua conta?</ModalHeader>
                        <ModalFooter justifyContent={'space-around'} >
                            <Button size="lg" color={'red.600'} onClick={() => DeleteCount()}>Sim</Button>
                            <Button onClick={onClose} size="lg" color={'green.600'}>Não</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        
    )
}

export default ModalDeleteClient