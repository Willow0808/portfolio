import {Box,Text, Heading, VStack, StackDivider} from "@chakra-ui/react"
import {Fade} from "react-reveal"


export const ProjectCard2 = () => {
    return(
        <Fade duration={1000} right delay={300}>
        <Box backgroundColor="rgba(179, 93, 93, 0.4)" shadow="lg" _hover={{transitionDuration:"0.5s", cursor:"pointer",opacity:0.8,borderColor:"#B25D5D"}}
        padding="20px" borderRadius="5px"border="2px"
        borderColor="#FFFFFF" width="100%" display="flex" alignItems="left">

            <VStack divider={<StackDivider />} spacing='10px'>
            <Heading size='md'>Client Report</Heading>
            <div>
                <h3>Summary</h3>
                <p>View a summary of all your clients over the last month.</p>
            </div>
            <div>
                <h3>Summary</h3>
                <p>View a summary of all your clients over the last month.</p>
            </div>
            <div>
                <h3>Summary</h3>
                <p>View a summary of all your clients over the last month.</p>
            </div>
            </VStack>
        </Box>
        </Fade>
    )
}