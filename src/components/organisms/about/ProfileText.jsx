import {Box, VStack, StackDivider} from "@chakra-ui/react"
import {Fade} from "react-reveal"


export const ProfileText = (props) => {
    const{title1,content1,title2,content2,title3,content3} = props
    return(
        <Fade duration={1000} right delay={500}>

            <Box backgroundColor="#895B5B" shadow="lg" padding="25px" borderRadius="20px"
            border="4px"borderColor="#FFFFFF" width="500px">

                <VStack display="flex" align="left" divider={<StackDivider />} spacing='10px'>
                <h2 style={{color:"white"}}>おはよう</h2>
                <div style={{color:"white"}}>
                    <h3>{title1}</h3>
                    <p>{content1}</p>
                </div>
                <div style={{color:"white"}}>
                    <h3>{title2}</h3>
                    <p>{content2}</p>
                </div>
                <div style={{color:"white"}}>
                    <h3>{title3}</h3>
                    <p>{content3}</p>
                </div>
                </VStack>
                
            </Box>

        </Fade>
    )
}