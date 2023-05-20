import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import { HStack,Button,Label,Card,CardBody,Image ,Stack,Heading,Text,Divider,
    CardFooter,ButtonGroup, Container,SimpleGrid, GridItem} from "@chakra-ui/react"
function ViewDetail(){
    const [data,setData]=useState({});
  let {id}=useParams();
  useEffect(()=>{
fetchx()
  },[])
  async function fetchx(){
    let res=await fetch(`http://localhost:3003/public/v2/users/${id}`)
    let json=await res.json()
    console.log(json)
    setData(json)
    return json
  }
    return<>
    <SimpleGrid 
        templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}
        columnGap={15} rowGap={50} p="0px" 
        gap={2} w="100%" display="flex" m="auto" justifyContent="center" >
    <GridItem colSpan={1} mt={3}>
            <Card border="2px solid red" padding="40px" bg="lightPink">
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading textAlign="center">Name : {data.name}</Heading>
            <Text textAlign="center">
              Email : {data.email}
            </Text>
            <Text textAlign="center">
              Gender : {data.gender}
            </Text>
            <Text textAlign="center">
              Status : {data.status}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      </GridItem>
      </SimpleGrid>
    </>
}
export default ViewDetail