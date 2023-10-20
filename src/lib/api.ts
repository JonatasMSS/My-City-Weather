import axios from "axios";


export const weather_api = axios.create({
    baseURL:'https://dataservice.accuweather.com'
})