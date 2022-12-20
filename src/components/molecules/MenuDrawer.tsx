import {Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button} from "@chakra-ui/react"

export const MenuDrawer = (props) => {
    const{ onClose, isOpen, home, users, setting } = props
    return(
        <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button onClick={home} w="100%">TOP</Button>
                        <Button onClick={users} w="100%">ユーザー一覧</Button>
                        <Button onClick={setting} w="100%">設定</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}