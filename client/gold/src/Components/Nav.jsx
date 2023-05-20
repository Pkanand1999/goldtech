import React from 'react'
import {
    HStack,
    Heading,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

 function Nav() {
    return (
            <HStack  display="flex" width="100%" justifyContent="center" color="black"  alignItem="center" bg="grey" positon="fixed">
                    <Heading display="flex" fontSize="40px" padding="0"><Link to="/"> Gold Tech</Link></Heading>
            </HStack>
    )
}

export default Nav