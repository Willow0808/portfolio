import { HeaderAndFooterLayout } from "../templates/HeaderAndFooterLayout"
import { Box, HStack } from "@chakra-ui/react"
import { ProjectCard } from "../organisms/project/ProjectCard"
import { ProjectCard2 } from "../organisms/project/ProjectCard2"
import { ProjectCard3 } from "../organisms/project/ProjectCard3"

export const Project = () => {
    return(
        <HeaderAndFooterLayout>
            <HStack paddingLeft="10%" paddingRight="10%" spacing="5%" paddingTop="5%">
                <ProjectCard></ProjectCard>
                <ProjectCard2></ProjectCard2>
                <ProjectCard3></ProjectCard3>
            </HStack>
        </HeaderAndFooterLayout>
    )
}