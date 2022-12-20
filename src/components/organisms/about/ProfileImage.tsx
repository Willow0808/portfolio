import {Image} from "@chakra-ui/react"
import {Fade} from "react-reveal"
import image1 from "./IMG_1406.jpg"

export const UserCard = () => {
    return(
        <Fade duration={1000} left>

            <Image boxSize="70%" marginLeft="10%"
            marginTop="10px"
            border="4px"
            borderColor="white"
            borderRadius="full"
            src= {image1}
            alt="プロフィール写真"
            shadow="md"
            m="auto">
            </Image>

        </Fade>
    )
}