import { HeaderLayout } from "../templates/HeaderLayout"
import { HStack, StackDivider, VStack, Text, Box} from "@chakra-ui/react"
import { UserCard } from "../organisms/about/ProfileImage"
import styled from "styled-components"
import { ProfileText } from "../organisms/about/ProfileText"


export const About = () => {

    return(
        <HeaderLayout>
            <Sdiv>
            <Sp>about me!</Sp>
            
            <VStack padding={30}spacing={130} align="flex-start" divider={<StackDivider borderColor='#895B5B'/>}>
                <HStack spacing="100px" paddingLeft={30}>
                    <UserCard></UserCard>
                    <Ssp>
                    <ProfileText></ProfileText>
                    </Ssp>
                </HStack>
                <HStack spacing="100px" paddingLeft={30}>
                    <UserCard></UserCard>
                    <Ssp>
                    <ProfileText></ProfileText>
                    </Ssp>
                </HStack>
                <HStack spacing="100px" paddingLeft={30}>
                    <UserCard></UserCard>
                    <Ssp>
                    <ProfileText></ProfileText>
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