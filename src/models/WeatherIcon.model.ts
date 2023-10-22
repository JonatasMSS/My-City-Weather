import Sunny from '@/assets/icons/weather/sunny.svg'
import CloudySun from "@/assets/icons/weather/cloud_sun.svg"
import Cloudy from "@/assets/icons/weather/cloudy.svg"
import Rain from "@/assets/icons/weather/cloudy_rain.svg"
export class WeatherIconImage{
    WeatherIndexIcon:number;

    constructor(WeatherIcon:number){
        this.WeatherIndexIcon = WeatherIcon
    }

    getIcon(){
        
        if(this.WeatherIndexIcon < 3 || (this.WeatherIndexIcon >= 33 && this.WeatherIndexIcon < 35)){
            return Sunny
        }
        else if((this.WeatherIndexIcon <= 6 && this.WeatherIndexIcon >= 3 ) || (this.WeatherIndexIcon >= 35  && this.WeatherIndexIcon <= 37)){
            return CloudySun
        }
        else if((this.WeatherIndexIcon >= 7 && this.WeatherIndexIcon <= 11) || this.WeatherIndexIcon ===38){
            return Cloudy
        }
        else {
            return Rain
        }



    }
}