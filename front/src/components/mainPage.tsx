import { useClient } from "@/contexts/clientContext"
import { AddIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react"
import ListClientsContacts from "./listClientsContacts"
import ModalAddContacts from "./modalAddContact"




const MainPage = () => {
    const {client} = useClient()
    
    
    return (
        <Box bg={'#060075'} h={'1200px'} w={'100%'} >
            <Box display={'flex'} flexDirection={['column', 'row']} justifyContent={'space-around'} alignItems={'center'} w={'100%'} borderBottom={'4px'}>
            <Flex alignItems={'flex-start'} paddingTop={2}>
                <ModalAddContacts/>
            </Flex>
            <Flex padding={3} gap={2} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >
                <Text fontFamily={'body'} fontWeight={'bold'} color={'white.500'}>Nome Completo: {client?.fullName}</Text>
                <Text fontFamily={'body'} fontWeight={'bold'} color={'white.500'}>Email: {client?.email}</Text>
                <Text fontFamily={'body'} fontWeight={'bold'} color={'white.500'}>Telefone: {client?.telephone}</Text>
            </Flex>
            </Box>
            <Box bg={'#0900A4'} h={'80%'} display={'flex'} alignItems={'center'} justifyContent={'center' } flexDirection={'column'} p={5} w={'100%'}>
                <Text fontFamily={'body'} fontSize={20} fontWeight={'bold'} color={'white'}>Seus Contatos</Text>
                <Flex p={5} h={'100%'} width={'100%'} gap={10} flexDirection={['column', 'column', 'row']} alignItems={['center', 'center', 'normal']} justifyContent={'center'}>
                   <ListClientsContacts/>
                </Flex>
            </Box>
        </Box>
    )
}


export default MainPage