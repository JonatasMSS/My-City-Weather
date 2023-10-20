import { weather_api } from "@/lib/api";
import { CityLocationData, ICityCurrentConditions } from "@/models/City.model";



export async function GetCityKeyByName(city:string) {
    
    
    const city_data:CityLocationData[] = (await weather_api.get(`/locations/v1/cities/autocomplete?apikey=${process.env.NEXT_PUBLIC_API_WEATHER_KEY}&q=${city}&language=pt-br`)).data

    return city_data

}

export async function GetCurrentCondition(CityKey:string | number) {
   try {
    const [current_conditions]:ICityCurrentConditions[] = (await weather_api.get(`/currentconditions/v1/${CityKey}?apikey=${process.env.NEXT_PUBLIC_API_WEATHER_KEY}&language=pt-br&details=true`)).data
    return current_conditions
   } catch (error:any) {
     if(error.response.status === 503) {
        console.error(error.response)
        throw new LimitOfAccess('O acesso a API foi restringido')
     }
    
   }
}