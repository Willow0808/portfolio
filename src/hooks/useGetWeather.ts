import axios from "axios"
import { useState } from "react"


export const useGetWeather = () => {
    const [contemporaryWeather, setContempolaryWeather] = useState(null)
    const getWeather = () => {
        const apiKey="992aabeb635b9d8e9ee4f7df62a06e0c"
        const city="Tokyo"
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((res)=>{
            setContempolaryWeather(
                res.data.weather[0].main
                )
        }).catch(()=>{alert("failed to get weather")})
    }
    return{getWeather, contemporaryWeather}
}