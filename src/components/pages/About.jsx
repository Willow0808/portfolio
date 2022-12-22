import { HeaderLayout } from "../templates/HeaderLayout"
import { HStack, StackDivider, VStack, Text, Box} from "@chakra-ui/react"
import { ProfileImage } from "../organisms/about/ProfileImage"
import styled from "styled-components"
import { ProfileText } from "../organisms/about/ProfileText"
import imagePath1 from '../organisms/about/img/sohyun1.jpg'
import imagePath2 from '../organisms/about/img/flowerme.jpg'
import imagePath3 from '../organisms/about/img/computer.jpg'


export const About = () => {

    return(
        <HeaderLayout>
            <Sdiv>
            <Sp>About Sohyun</Sp>
            
            <VStack padding={30}spacing={50} align="flex-start">
                <HStack spacing="100px" margin='auto'>
                    <ProfileImage imagePath={imagePath1}></ProfileImage>
                    <Ssp>
                    <ProfileText title1='good morning' content1='timotimo'
                    title2='good afternoon' content2='onechan'
                    title3='good night' content3='papa'
                    ></ProfileText>
                    </Ssp>
                </HStack>
                </VStack>
            
            
                <Sp>About Project</Sp>

                <VStack padding={30}spacing={50} align="flex-start">
                    <HStack spacing="100px" margin='auto'>
                        <ProfileImage imagePath={imagePath2}></ProfileImage>
                        <Ssp>
                        <ProfileText title1='good morning' content1='oniichan'
                        title2='good afternoon' content2='onechan'
                        title3='good night' content3='papa'
                        ></ProfileText>
                        </Ssp>
                    </HStack>
                    </VStack>
                    
                    <Sp>About Project</Sp>
                <VStack padding={30}spacing={50} align="flex-start">
                <HStack spacing="100px" margin='auto'>
                    <ProfileImage imagePath={imagePath3}></ProfileImage>
                    <Ssp>
                    <ProfileText title1='good morning' content1='oniichan'
                    title2='good afternoon' content2='onechan'
                    title3='good night' content3='papa'
                    ></ProfileText>
                    </Ssp>
            </HStack>
            </VStack>
            
            </Sdiv>

            
            <Sdiv>
            <CustomeDiv>
                <Box>
                <Ssp>name: Yu Sohyun</Ssp>
                <Ssp>e-mail: eireneyou94@gmail.com</Ssp>
                <Ssp>phone: 08023041574</Ssp>
                </Box>
           
            </CustomeDiv>
            
            </Sdiv>

            

        </HeaderLayout>
    )
}

const Sdiv = styled.div`
    background-color: #F9DADA;
    width:full;
    padding-bottom:100px;

`
const Sp =styled.p`
padding-left: 40px;
padding-top: 30px;
font-family: "Raleway";
font-size: 30px;
`

const CustomeDiv =styled.div`
    padding-bottom: 10px;
    margin-right: 30px;
    display: flex;
    text-align: left;
    float: right;
`
const Ssp =styled.p`
    font-family: "Raleway";
    font-size: 18px;
    weight: 400;
`
