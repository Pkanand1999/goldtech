import React from 'react'
import {
    HStack,
    Heading,
} from '@chakra-ui/react'

 function Nav() {
    return (
            <HStack  display="flex" width="100%" justifyContent="center" color="black"  alignItem="center" bg="grey" positon="fixed">
                    <Heading display="flex" fontSize="40px" padding="0">Gold Tech</Heading>
            </HStack>
    )
}

export default Nav