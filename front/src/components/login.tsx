import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <Card  p={[2, 5, 8]} boxSize={[300, 400, 450]} h={400} bg={'gray.300'} borderRadius={'lg'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
        <CardHeader fontSize='2xl'>Entre Na Sua Conta</CardHeader>
        <CardBody boxSize={'100%'} gap={[1, 3, 5]} display='flex' flexDirection={'column'}>
        <FormControl>
            <FormLabel fontSize='20px'>E-mail</FormLabel>
            <Input size={['md', 'lg']} required type="email" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} />
        </FormControl>
        <FormControl>
            <FormLabel fontSize='20px'>Senha</FormLabel>
            <InputGroup>
                <Input size={['md', 'lg']} required bg={'gray.300'} borderColor={"black"} focusBorderColor="blue.800" type={showPassword? "text":"password" } />
                <InputRightElement paddingTop={[0, 2]}>
                <Button size={['md', 'lg']} variant='ghost' onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                </Button>
                </InputRightElement>
                </InputGroup>
        </FormControl>
        </CardBody>
        <CardFooter >
        <Button size="lg" variant="default">
            Entrar
        </Button>
        </CardFooter>
    </Card>
    )
}

export default Login