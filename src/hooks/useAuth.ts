import axios from "axios"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigation = useNavigate()
    const login = (id) => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            if(res.data){
                navigation("/home")
            }else{
                alert("ユーザーが見つかりません。")
            }
        }).catch(()=>{alert("ログインできません。")})
    }
    return{login}
}