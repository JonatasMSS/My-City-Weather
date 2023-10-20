export interface CityLocationData {
    Key: string;
    Type?: string;
    LocalizedName: string;
    Country: {
        ID: string;
        LocalizedName: string;
    };
    AdministrativeArea: {
        ID: string;
        LocalizedName: string;
    };
}


// TODO: CORRIGIR O FELL TEMP
export interface ICityCurrentConditions {
    EpochTime?: EpochTimeStamp;
    WeatherText?: string;
    WeatherIcon?: number;
    Temperature?: {
        Metric: {
            Value: number;
        }
    };
    ApparentTemperature?: {
        Metric: {
            Value: number;
        }
    };
    RelativeHumidity?: number;
    Wind?: {
        Speed: {
            Metric: {
                Value: number;
            }
        }
    };
    UVIndex?: number;
    UVIndexText?: string;
    Pressure?: {
        Metric: {
            Value: number;
        }
    };
}
