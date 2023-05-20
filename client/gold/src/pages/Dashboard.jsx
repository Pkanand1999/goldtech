import React, { useEffect,useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
    Modal,
  } from '@chakra-ui/react'
  import {Link} from 'react-router-dom'

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
    setData([...json])
  }catch(e){
    console.log(e)
  }
}


  return ( <>
      <TableContainer width="ifr" display="flex" justifyContent="center" marginTop="4%">
  <Table variant='simple' width="95%" >
    <TableCaption bg="teal"  alignItem="center" justifyContent="center" flexDirection="column">user credentials</TableCaption>
    <Thead bg="blue" padding="2%">
      <Tr textAlign="center" padding="2%">
        <Th padding="1% 1%">S.no</Th>
        <Th>Name</Th>
        <Th >Email</Th>
        <Th >Updata</Th>
        <Th >View</Th>
      </Tr>
    </Thead>
    <Tbody >
        {data.map((data,ind)=>{
            return <Tr textAlign="center" border="4px solid green" bg="pink" Key={ind}>
            <Td padding="2% 1%">{(ind+1)+(10*page-1)-10+1}</Td>
            <Td>{data.name}</Td>
            <Td >{data.email}</Td>
            <Td bg="grey" ><Link to={`/editdetails/${data.id}`}>Edit</Link></Td>
            <Td bg="lightGreen"><Link to={`/userdetails/${data.id}`}>view</Link></Td>
          </Tr>
        })}
      
    </Tbody>
  </Table>
</TableContainer>

<Box display="flex"  margin="5% 50%" justifyContent="center" alignItem="center">
    <Button marginRight="20px" borderRadius="5px" padding="10px" border="none" isDisabled={page===1? true:false} onClick={()=>setPage(page-1)}>←Pre</Button> {page} 
    <Button borderRadius="10px" padding="10px"  marginLeft="20px" border="none" isDisabled={page===10? true:false} onClick={()=>setPage(page+1)}>Next→</Button>
</Box>
</>
  )
}

