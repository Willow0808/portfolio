import {Image} from "@chakra-ui/react"
import {Fade} from "react-reveal"

export const ProfileImage = (props) => {
    const {imagePath} = props
    return(
        <Fade duration={800} left>

            <Image boxSize="300px" marginLeft="100px"
            marginRight='100px'
            border="4px"
            borderColor="white"
            borderRadius="full"
            src= {imagePath}
            alt="プロフィール写真"
            shadow="md"
            m="auto"
            objectFit='cover'>
            </Image>

        </Fade>
    )
}