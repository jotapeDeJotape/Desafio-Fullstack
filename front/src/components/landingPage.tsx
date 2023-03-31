import { SunIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, ModalBody, SlideFade, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import Login from "./login";
import Register from "./register";



const LandingPage = ()  => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    const [loginOn, setLoginOn] = useState(true)


    return(
        <Box  bg={'#040053'} w={['470px', '100%']} minH={'1200px'} >
                <Flex onClick={onToggle} h={200}  paddingTop={10}  alignItems={'flex-start'} justifyContent={'center'}>
                <Box  w={'100%'} h={'50%'} alignItems={'center'} display={'flex'} flexDirection={'column'} gap={5}>
                    <Text fontFamily={'heading'}  fontWeight={'bold'} fontSize={'45px'} color={'white'}> <SunIcon/> Stars System</Text>
                    <Text fontFamily={'heading'}  fontWeight={'bold'} fontSize='md' color={'white'} textDecorationLine={'underline'} letterSpacing={2}>Estrelas se Conectam Por Aqui!</Text>
                    <Box gap={5} display={'flex'} flexDirection={'column'} alignItems={'center'} w={'100%'}>
                        {loginOn ? (
                            <>     
                            <SlideFade in={loginOn} offsetX={'-80px'}  >
                                <Login/>
                            </SlideFade>
                                <Button  size={'lg'} onClick={() => setLoginOn(!loginOn)} variant={'default'}>Ainda Sem Conta? Crie Aqui!</Button>
                            </>
                        ): (
                            <>
                            <SlideFade in={!loginOn} offsetX={'-100px'}>
                                <Register/>
                            </SlideFade>
                                <Button size={'lg'} onClick={() => setLoginOn(!loginOn)} variant={'default'}>Já Possui Conta? Entre Por Aqui!</Button>
                            </>
                        )}
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}


export default LandingPage