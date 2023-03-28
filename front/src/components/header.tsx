import {ReactNode} from "react"
import { CloseIcon, HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, Text, useDisclosure, Link, SlideFade, Stack } from "@chakra-ui/react"
import {Inter,Roboto} from "next/font/google"


const Links = ['Contacts'];

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })


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

const Header = () => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

    return (
        <>
            
            <Box bg={'#040053'} px={8}>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                bg={'blue.50'}
                onClick={onToggle}/>
            <HStack spacing={8} alignItems={'center'} gap={50}>
            <Box>
                <Text fontWeight={'bold'} fontSize={24} color={'white'}> <SunIcon/> StarsSystem</Text>
            </Box>
            <HStack
              color={'white'}
              as={'nav'}
              spacing={4}
              fontSize={22}
              gap={10}
              display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>   
          </HStack>           
                </Flex>
            {isOpen ? (
                <SlideFade in={isOpen} offsetY='-50px'>  
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={6} color={'white'} fontSize={18}>
                            {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
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