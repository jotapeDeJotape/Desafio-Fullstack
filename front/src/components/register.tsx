import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useAuth } from "@/contexts/authContext"
import { useForm } from "react-hook-form"
import { IRegister } from "@/types"


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const formScheme = yup.object().shape({
        fullName: yup.string().required("Nome Completo é Obrigatório"),
        email: yup.string().email("Deve Ser Um Email Válido").required("Email Obrigatório"),
        password: yup.string().required("Senha Obrigatória"),
        telephone: yup.string().required("Telefone Obrigatório")
    })
    
    const {DoRegister} = useAuth()
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setPasswordEmail] = useState("")
    const [inputFullName, setFullName] = useState("")
    const [inputTelephone, setTelephone] = useState("")
    const emailError = inputEmail === ""
    const passwordError = inputPassword === ""
    const fullNameError = inputFullName === ""
    const telephoneError = inputTelephone === ""
    
    const {register,handleSubmit, formState: {errors}} = useForm<IRegister>({
        resolver: yupResolver(formScheme)
    })
    const onFormSubmit = (formData: IRegister) => {
        DoRegister(formData)
    }


    return (
        <Card  p={[1, 5, 8]} boxSize={[400, 400, 600]} h={[650, 700, 780]} bg={'gray.300'} borderRadius={'lg'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
        <CardHeader fontFamily={'monospace'} fontSize='30'>Crie Sua Conta</CardHeader>
        <CardBody boxSize={'100%'} gap={[2, 3, 5]} display='flex' flexDirection={'column'}>
        <FormControl isRequired isInvalid={fullNameError}>
            <FormLabel fontFamily={'monospace'} fontSize='25'>Nome Completo</FormLabel>
            <Input size={['md', 'lg']} required type="text" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} {...register('fullName')} onChange={(e) => setFullName(e.target.value)}  />
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
        <FormControl isRequired isInvalid={emailError}>
            <FormLabel fontFamily={'monospace'} fontSize='25'>E-mail</FormLabel>
            <Input size={['md', 'lg']} required type="email" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} {...register("email")} onChange={(e) => setInputEmail(e.target.value)} />
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
                <Input size={['md', 'lg']} required bg={'gray.300'} borderColor={"black"} focusBorderColor="blue.800" type={showPassword? "text":"password" } {...register("password")} onChange={(e) => setPasswordEmail(e.target.value)} />
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
            <Input size={['md', 'lg']} required type="text" bg={'gray.300'} focusBorderColor="blue.800" borderColor={"black"} {...register("telephone")} onChange={(e) => setTelephone(e.target.value)} />
            {!telephoneError ? (
                <FormHelperText>
                            Digite Seu Telefone
                </FormHelperText>
                ):
                <FormErrorMessage>
                    {errors.telephone?.message}
                </FormErrorMessage>
                    
                    }
        </FormControl>
        </CardBody>
        <CardFooter paddingBottom={20}>
        <Button  size="lg" variant="default" onClick={handleSubmit(onFormSubmit)}>
            Registrar
        </Button>
        </CardFooter>
    </Card> 
    )
}

export default Register