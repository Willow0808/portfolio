import {Box, VStack, StackDivider} from "@chakra-ui/react"
import {Fade} from "react-reveal"


export const ProfileText = () => {
    return(
        <Fade duration={1000} right delay={500}>

            <Box backgroundColor="#895B5B" shadow="lg" padding="25px" borderRadius="20px"
            border="4px"borderColor="#FFFFFF" width="100%">

                <VStack display="flex" align="left" divider={<StackDivider />} spacing='10px'>
                <h2 style={{color:"white"}}>おはよう</h2>
                <div style={{color:"white"}}>
                    <h3>Summary</h3>
                    <p>おにいちゃん</p>
                </div>
                <div style={{color:"white"}}>
                    <h3>Summary</h3>
                    <p>View a summary of all your clients over the last month.</p>
                </div>
                <div style={{color:"white"}}>
                    <h3>Summary</h3>
                    <p>View a summary of all your clients over the last month.</p>
                </div>
                </VStack>
                
            </Box>

        </Fade>
    )
}