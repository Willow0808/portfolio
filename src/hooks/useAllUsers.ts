import axios from "axios"
import { useState } from "react"

export const useAllUsers = () => {
    const [users,setUsers] = useState([])
    const getUsers = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .catch(()=>{alert("取得に失敗しました。")})

    }
    return {getUsers, users}
}