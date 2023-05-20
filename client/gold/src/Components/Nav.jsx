import React from 'react'
import {
    Drawer,
    useDisclosure,
    Button,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
    IconButton,
    HStack,
    Heading,
    Text,
    DrawerFooter,
    Wrap,
    WrapItem,
    Avatar,
} from '@chakra-ui/react'

export default function Nav() {
  return (
    <>
     <HStack display="flex" width="100%" justifyContent="space-between" padding=".5%" align="center"  position="fixed" zIndex="100">
                <HStack paddingLeft="2%" display="flex">
                    <Heading display="flex" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' marginLeft="2%">Gold Tech</Heading>
                </HStack>
                <HStack display="flex" paddingRight="2%" >
                </HStack>
            </HStack>
           

  </>
  )
}
