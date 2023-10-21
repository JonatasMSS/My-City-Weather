import { OneHourWeatherBox } from "@/app/components/city/oneHourCond/OneHourWeatherBox";
import { GetOneHourlyWeather } from "@/controllers/CitySearch.controller";

export default async function OneHourConditionPage({
  params,
  searchParams,
}: {
  params: { city: string };
  searchParams: any;
}) {
  const { state, q } = searchParams; // Onde o "q" é o ID da cidade

  const {
    Temperature,
    RealFeelTemperature,
    UVIndexText,
    IconPhrase,
    WeatherIcon,
    Wind,
    RelativeHumidity,
  } = (await GetOneHourlyWeather(q))![0];

  return (
    <div className="flex w-full flex-col items-center justify-center p-3">
      <OneHourWeatherBox
        Temp={Temperature.Value}
        FeelTemp={RealFeelTemperature.Value}
        Humidity={RelativeHumidity}
        UVText={UVIndexText}
        WeatherIndex={WeatherIcon}
        WeatherText={IconPhrase}
        Wind={Wind.Speed.Value}
      />
    </div>
  );
}
