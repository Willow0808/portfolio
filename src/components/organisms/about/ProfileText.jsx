import {Box, VStack, StackDivider} from "@chakra-ui/react"
import {Fade} from "react-reveal"


export const ProfileText = (props) => {
    const{content1,content2,content3} = props
    return(
        <Fade duration={1000} right delay={500}>

            <Box backgroundColor="#895B5B" shadow="lg" padding="50px" borderRadius="20px"
             width="500px"border="2px">

                <VStack display="flex" align="left" divider={<StackDivider/>} spacing='10px'>
                
                <div style={{color:"white"}}>
                    <p>{content1}</p>
                </div>
                <div style={{color:"white"}}>
                    <p>{content2}</p>
                </div>
                <div style={{color:"white"}}>
                    <p>{content3}</p>
                </div>
                </VStack>
                
                
            </Box>

        </Fade>
    )
}