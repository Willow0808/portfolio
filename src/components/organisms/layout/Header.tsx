import { Flex, Heading, Box, Button, useDisclosure, VStack } from '@chakra-ui/react'
import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'
import { useNavigate } from 'react-router-dom'
import { useGetWeather } from '../../../hooks/useGetWeather'
import { useMemo } from 'react'
import {WiDaySunny, WiRain, WiCloud, WiSnow} from "weather-icons-react"
import styled from "styled-components"


export const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {getWeather,contemporaryWeather} = useGetWeather()
    useMemo(()=>getWeather(),[])

    console.log(contemporaryWeather)
    let clear=false, clouds=false, rain=false, snow=false
    if(contemporaryWeather=="Clear"){
        clear=true
    }
    if(contemporaryWeather=="Rain"){
        rain=true
    }
    if(contemporaryWeather=="Clouds"){
        clouds=true
    }
    if(contemporaryWeather=="Snow"){
        snow=true
    }
    const navigation = useNavigate()

    const onClickHome = () => {
        navigation("/home")
    }
    const onClickAbout = () => {
        navigation("/about")
    }
    const onClickProject = () => {
        navigation("/project")
    }

    return(
        <>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
        <HeaderDiv>
            <Flex marginTop={5} marginLeft={10} as="a" _hover={{cursor:"pointer"}} onClick={onClickHome}>
                <Heading fontSize={{ base: "md", md: "5xl"}}>
                    <Sp>portfolio</Sp>
                </Heading>
            </Flex>
            
            
            <CustomeDiv>
                <VStack spacing="5vh" align="flex-end">
                <Flex>
                    <Box>
                        Tokyo, {contemporaryWeather}
                    </Box>
                    
                    <Box>
                        {clear && <WiDaySunny size={30} color='#000000'/>}
                        {rain && <WiRain size={30} color='#000000'/>}
                        {clouds && <WiCloud size={30} color='#000000'/>}
                        {snow && <WiSnow size={30} color='#000000'/>}
                    </Box>
                </Flex>
                <Flex>
                    <Button _hover={{opacity:0.3}} pr={4} backgroundColor="#563F3F" border="1px" borderColor="#471C1C" margin="10px" onClick={onClickHome} color="#FFFFFF" shadow="md">
                        <Ssp>home</Ssp>
                    </Button>
                    <Button _hover={{opacity:0.3}} pr={4} backgroundColor="#563F3F" border="1px" borderColor="#471C1C" margin="10px" onClick={onClickAbout} color="#FFFFFF" shadow="md">
                        <Ssp>about</Ssp>
                    </Button>
                    <Button _hover={{opacity:0.3}} pr={4} backgroundColor="#563F3F" border="1px" borderColor="#471C1C" margin="10px" onClick={onClickProject} color="#FFFFFF" shadow="md">
                        <Ssp>project</Ssp>
                    </Button>
                </Flex>
                </VStack>
                
            </CustomeDiv>
            
            
            <MenuIconButton onOpen={onOpen}></MenuIconButton>
        </HeaderDiv>
        <MenuDrawer 
        onClose={onClose} 
        isOpen={isOpen} 
        home={onClickHome} 
        users={onClickAbout} 
        setting={onClickProject}></MenuDrawer>
        </>
    )
}

const CustomeDiv =styled.div`
    display: flex;
    margin-top: 1vh;
    margin-right: 2%;
`
const HeaderDiv = styled.div`
    background-color: #FFFFFF;
    color: #000000;
    display: flex;
    border-width: 0px;
    justify-content: space-between;
    width: 100%;
    height: 20vh;
`
const Sp =styled.p`
font-family: "Raleway";
font-size: 50px;
`
const Ssp =styled.p`
font-family: "Raleway";
font-size: 18px;
weight: 400;
`