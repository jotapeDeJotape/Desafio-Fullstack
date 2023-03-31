import { useList } from "@/contexts/lists.Context"
import { Button, Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react"
import ModalDeleteContact from "./modalDeleteContact"
import ModalEditContact from "./modalEditContact"



const ListClientsContacts = () => {
    const {clientsContacts} = useList()

   

    return (
        <>
            {clientsContacts.map((contact, index) => {
                return (
                <Card key={index} bg={'gray.200'} boxSize={[300]} w={[300]} border='4px' borderColor={'blue.400'} borderRadius={'3xl'} _hover={{cursor: 'pointer', bg:'gray.300'}}>
                    <CardHeader borderBottom={'4px'} justifyContent={'center'} display={'flex'} alignItems={'center'} >
                        <Text fontFamily={'body'} fontWeight={'bold'} color={'black.500'}>Nome: {contact.fullName}</Text>
                    </CardHeader>
                    <CardBody borderBottom={'4px'} gap={10} display={'flex'} flexDirection={'column'}>
                        <Text fontFamily={'body'} fontWeight={'bold'} color={'black.500'}>Email: {contact.email}</Text>
                        <Text fontFamily={'body'} fontWeight={'bold'} color={'black.500'}>Telefone: {contact.telephone}</Text>
                    </CardBody>
                    <CardFooter display={'flex'} justifyContent={'space-around'}  >
                        <ModalEditContact contactID={contact.id}/>
                        <ModalDeleteContact contactID={contact.id}/>
                    </CardFooter>
                </Card>
                )
            })}
        </>
        
    )
}


export default ListClientsContacts