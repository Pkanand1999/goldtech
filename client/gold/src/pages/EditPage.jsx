import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import { HStack,Button,Label,Card,CardBody,Image ,Stack,Heading,Text,Divider,
    CardFooter,ButtonGroup, Input,SimpleGrid, GridItem} from "@chakra-ui/react"



function EditPage(){
    const [data,setData]=useState({});
    const [name,setName]=useState({});
    const [email,setEmail]=useState({});
  let {id}=useParams();
  useEffect(()=>{
fetchx()
  },[])
  async function fetchx(){
    let res=await fetch(`http://localhost:3003/public/v2/users/${id}`)
    let json=await res.json()
    console.log(json)
    setData(json)
    setName(json.name)
    setEmail(json.email)
    return json
  }

  async function updateData(){
    let newUser={
        name:name,
        email:email
    }
    let res=fetch(`http://localhost:3003/public/v2/users/${id}`,{
        method: 'PATCH',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
    })
    alert("Data Updated")
  }


    return<>
    <SimpleGrid 
        templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}
        columnGap={15} rowGap={50} p="0px" 
        gap={2} w="100%" display="flex" m="auto" justifyContent="center" >
    <GridItem colSpan={1} mt={3} width="30%">
            <Card border="2px solid red" padding="40px" bg="lightPink">
        <CardBody>
          <Stack mt='6' spacing='3' >
            <span>Name</span> : <Input textAlign="center" value={name} onChange={(e)=>setName(e.target.value)} />
            <span>Email</span> : <Input textAlign="center" value={email} type="email" onChange={(e)=>setEmail(e.target.value)} />
            <Text textAlign="center">Status : {data.status}</Text>
            <Text textAlign="center">Gender : {data.gender}</Text>
          </Stack>
        </CardBody>
        <Divider />
          <Button border="none" bg="green" onClick={updateData}>Submit</Button>
      </Card>
      </GridItem>
      </SimpleGrid>
    </>
}
export default EditPage