import {Box,Text, Heading, VStack, StackDivider, color,Image} from "@chakra-ui/react"
import {Fade} from "react-reveal"
import styled from "styled-components"


export const ProjectCard = (props) => {
    const {path,duration,delay,href} = props
    return(
        <Fade duration={duration} right delay={delay}>
        <Box backgroundColor="rgba(179, 93, 93, 0.4)" 
        shadow="lg"
        padding="2px" borderRadius="5px"border="2px" _hover={{transitionDuration:"0.5s", cursor:"pointer",opacity:0.8,borderColor:"#B25D5D"}}
        borderColor="#FFFFFF" width="100%"  display="flex" alignItems="left" as="a" href={href} target="_blank"
        backgroundImage="https://www.figma.com/file/ghBdI6RiYekeX7KogXgBUt/flower-ec?node-id=105%3A306&t=LOS7ycxkqtl5lKmm-4">

            {/* <VStack divider={<StackDivider />} spacing='10px'>
            <Heading size='md'>Client Report</Heading>
            <div>
                <h3>Summary</h3>
                <p>View a summary of all your clients over the last month.</p>
            </div>
            
            </VStack> */}

            <Image src={path} width="300px" height='300px' borderRadius='3px'></Image>

        </Box>
        </Fade>
    )
}

