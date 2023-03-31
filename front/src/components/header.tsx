import {ReactNode} from "react"
import { destroyCookie } from "nookies"
import { CloseIcon, HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, Text, useDisclosure, Link, SlideFade, Stack, Menu, MenuButton, Button, Avatar, MenuList, MenuItem } from "@chakra-ui/react"

import { Router, useRouter } from "next/router";
import ModalEditClient from "./modalEditClient";




interface IHeaderProps {
  name: string
  isLogged: boolean
}




const Header = ({name, isLogged = false}: IHeaderProps) => {
  
    return (
        <>
            
            <Box bg={'#040053'} px={[2, 2, 10]} w='100%' boxShadow={'lg'}>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'} gap={3} >
            <HStack  alignItems={'center'}  justifyContent="space-between" w={"100%"}>
            <Box>
                <Text fontWeight={'bold'} fontSize={[25, 25, 20]} color={'white'}> <SunIcon/> StarsSystem</Text>
            </Box>
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
            </Box>
        </>
    )
}

export default Header