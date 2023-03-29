import {ReactNode} from "react"
import { destroyCookie } from "nookies"
import { CloseIcon, HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, Text, useDisclosure, Link, SlideFade, Stack, Menu, MenuButton, Button, Avatar, MenuList, MenuItem } from "@chakra-ui/react"

import { Router, useRouter } from "next/router";
import ModalEditClient from "./modalEditClient";


const Links = ['Seus Contatos', 'Outros Contatos'];

interface IHeaderProps {
  name: string
  isLogged: boolean
}


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'blue.800',
      color: 'white',
    }}
    href={'#'}
    >
    {children}
  </Link>
);

const Header = ({name, isLogged = false}: IHeaderProps) => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  


    return (
        <>
            
            <Box bg={'#040053'} px={[2, 2, 10]} w='100%'>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'} gap={3} >
                <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                bg={'blue.50'}
                onClick={onToggle}/>
            <HStack  alignItems={'center'}  justifyContent="space-between" w={"100%"}>
            <Box>
                <Text fontWeight={'bold'} fontSize={[25, 25, 20]} color={'white'}> <SunIcon/> StarsSystem</Text>
            </Box>
            <HStack
              color={'white'}
              as={'nav'}
              spacing={0}
              fontSize={15}
              gap={10}
              display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Flex alignItems={'center'} gap={5}>
              {isLogged ?
              <>
              <Text display={["none", "flex"]} fontWeight={'bold'} fontSize={[0, 15, 15]} color={'white'}>
                {name}
                </Text>
                <ModalEditClient/>
              </> 
                : <></>}   
            </Flex>
          </HStack>           
                </Flex>
            {isOpen ? (
                <SlideFade in={isOpen} offsetY='-50px'>  
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={6} color={'white'} fontSize={18}>
                            {Links.map((link) => (
                              <>
                              <NavLink key={link}>{link}</NavLink>
                              </>
                            ))}
                        </Stack>
                    </Box>
            </SlideFade>
        ) : null}
            </Box>
        </>
    )
}

export default Header