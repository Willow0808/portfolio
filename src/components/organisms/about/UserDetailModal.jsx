import {Modal, ModalBody,ModalCloseButton,ModalOverlay,ModalContent,ModalHeader,Stack,FormControl,FormLabel,Input} from "@chakra-ui/react"
import { memo, useCallback } from "react"

export const UserDetailModal = props => {
    const {user,isOpen,onClose} = props
    return(
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={user.username}></Input>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={user.name}></Input>
                                <FormLabel>Mail</FormLabel>
                                <Input value={user.email}></Input>
                                <FormLabel>TEL</FormLabel>
                                <Input value={user.phone}></Input>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}