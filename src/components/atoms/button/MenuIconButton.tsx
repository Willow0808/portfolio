import { IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

export const MenuIconButton = (props) => {
    const { onOpen } =props
    return(
        <IconButton 
            icon={<HamburgerIcon></HamburgerIcon>} 
            aria-label='メニューボタン'
            size="sm" 
            variant="unstyled" 
            display={{ base: "block", md:"none"}} 
            onClick={onOpen}>
        </IconButton>
    )
}