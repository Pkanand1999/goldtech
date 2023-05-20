import React, { useEffect,useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function Dashboard() {
    const [data,setData]=useState([])
    const[page,setPage] = useState(1)

    useEffect(()=>{
        fetching(page);

    },[page])

async function fetching(page) {
  try{
    let res=await fetch(`http://localhost:3003/public/v2/users?page=${page}&limit=10`)
    let json=await res.json()
  }catch(e){
    console.log(e)
  }
}


  return ( <>
      <TableContainer width="ifr" display="flex" justifyContent="center" marginTop="10%">
  <Table variant='simple' width="95%" >
    <TableCaption>user credentials</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
</>
  )
}
