import axios from "axios";


export const weather_api = axios.create({
    baseURL:'http://dataservice.accuweather.com'
})