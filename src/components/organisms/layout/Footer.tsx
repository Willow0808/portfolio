import { Box } from '@chakra-ui/react'
import styled from "styled-components"


export const Footer = () => {
    return(
        <>
        <FooterDiv>
                  
            <CustomeDiv>
                <Box>
                <Ssp>name: Yu Sohyun</Ssp>
                <Ssp>e-mail: eireneyou94@gmail.com</Ssp>
                <Ssp>phone: 08023041574</Ssp>
                </Box>
           
            </CustomeDiv>

        </FooterDiv>
        </>
    )
}

const CustomeDiv =styled.div`
    margin: 10px;
    margin-right: 30px;
    display: flex;
    text-align: left;
    float: right;
`
const FooterDiv = styled.div`
    height: 15vh;
    border-width: 0px;
    background-color: #FFFFFF;
    color: #000000;
    position: fixed;
    bottom: 0;
    width: 100%;
`

const Ssp =styled.p`
font-family: "Raleway";
font-size: 18px;
weight: 400;
`