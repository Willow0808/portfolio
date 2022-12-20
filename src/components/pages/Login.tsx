import {Box, Button, Divider, Flex, Heading, Input, Stack} from "@chakra-ui/react"
import { useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useAuth } from "../../hooks/useAuth"

export const Login = () => {
    const [userId, setUserId] = useState("")
    const onChangeUserId = (e) => {
        setUserId(e.target.value)
    }
    const {login} = useAuth()
    const loginFunction = () => {
        login(userId)
    }
    return(
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" textAlign="center">ログイン</Heading>
                <Divider my={4}></Divider>
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーID" onChange={onChangeUserId}></Input>
                    <PrimaryButton onClick={loginFunction}>ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
}