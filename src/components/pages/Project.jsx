import { HeaderAndFooterLayout } from "../templates/HeaderAndFooterLayout"
import { Box, HStack } from "@chakra-ui/react"
import { ProjectCard } from "../organisms/project/ProjectCard"
import coverImgPath1 from "../organisms/project/img/coverimg.png"
import coverImgPath2 from "../organisms/home/img/some.png"
import coverImgPath3 from "../organisms/project/img/cominsoon.jpeg"



export const Project = () => {
    return(
        <HeaderAndFooterLayout>
            <HStack paddingLeft="10%" paddingRight="10%" spacing="5%" paddingTop="5%">
                <ProjectCard path={coverImgPath1} duration={1000} delay={300} href="https://willow0808.github.io/flower_web/html/index.html">Ecsite</ProjectCard>
                <ProjectCard path={coverImgPath2} duration={1000} delay={600}></ProjectCard>
                <ProjectCard path={coverImgPath3} duration={1000} delay={900}></ProjectCard>
                
            </HStack>
        </HeaderAndFooterLayout>
    )
}