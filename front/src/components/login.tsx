import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useAuth } from "@/contexts/authContext"
import { useForm } from "react-hook-form"
import { ILogin } from "@/types"

const Login = () => {
    
    const formScheme = yup.object().shape({
        email: yup.string().email("Deve Ser Um Email Válido").required("Email Obrigatório"),
        password: yup.string().required("Senha Obrigatória")
    })
    
    const {DoLogin} = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setPasswordEmail] = useState("")
    const emailError = inputEmail === ""
    const passwordError = inputPassword === ""
    
    const {register,handleSubmit, formState: {errors}} = useForm<ILogin>({
        resolver: yupResolver(formScheme)
    })
    const onFormSubmit = (formData: ILogin) => {
        DoLogin(formData)
    }

    return (
        <Card  p={[2, 5, 8]} boxSize={[300, 400, 450]} h={[450, 500, 500]} bg={'gray.300'} borderRadius={'lg'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
        <CardHeader fontSize='2xl'>Entre Na Sua Conta</CardHeader>
        <CardBody boxSize={'100%'} gap={[1, 3, 5]} display='flex' flexDirection={'column'}>
        <FormControl isRequired isInvalid={emailError}>
            <FormLabel fontSize='20px'>E-mail</FormLabel>
            <Input size={['md', 'lg']} required type="email" bg={'gray.200'} focusBorderColor="blue.800" borderColor={"black"} {...register("email")} onChange={(e) => setInputEmail(e.target.value)} />
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
            <FormLabel fontSize='20px'>Senha</FormLabel>
            <InputGroup>
                <Input size={['md', 'lg']} required bg={'gray.200'} borderColor={"black"} focusBorderColor="blue.800" type={showPassword? "text":"password" } {...register("password")} onChange={(e) => setPasswordEmail(e.target.value)} />
                <InputRightElement paddingTop={[0, 2]}>
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
        </CardBody>
        <CardFooter >
        <Button size="lg" variant="default" onClick={handleSubmit(onFormSubmit)}>
            Entrar
        </Button>
        </CardFooter>
    </Card>
    )
}

export default Login