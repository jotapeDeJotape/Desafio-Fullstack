import { useContact } from "@/contexts/contactContext";
import { Button, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";


interface IContactModalDelete {
    contactID: string
}

const ModalDeleteContact = ({contactID}: IContactModalDelete) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {DoDeleteContact} = useContact()  
    
    return (
        <>
             <Button size="md" variant="default" onClick={onOpen}>
                    Deletar
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Tem Certeza que quer deletar este contato?</ModalHeader>
                        <ModalFooter justifyContent={'space-around'} >
                            <Button size="lg" color={'red.600'} onClick={() => DoDeleteContact(contactID)}>Sim</Button>
                            <Button onClick={onClose} size="lg" color={'green.600'}>Não</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
        </>
    )
}


export default ModalDeleteContact