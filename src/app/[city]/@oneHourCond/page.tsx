import ColapsedWeatherBox from "@/app/components/city/oneHourCond/OneHourWeatherBox";
import {
  GetOneDayWeather,
  GetOneHourlyWeather,
} from "@/controllers/CitySearch.controller";

export default async function OneHourConditionPage({
  params,
  searchParams,
}: {
  params: { city: string };
  searchParams: any;
}) {
  const { state, q } = searchParams; // Onde o "q" é o ID da cidade

  const [OneHourlyWeather, OneDayWeather] = await Promise.all([
    GetOneHourlyWeather(q),
    GetOneDayWeather(q),
  ]);

  const {
    Temperature,
    RealFeelTemperature,
    UVIndexText,
    IconPhrase,
    WeatherIcon,
    Wind,
    RelativeHumidity,
  } = OneHourlyWeather![0];

  const [NextDayData, InfosNextday] = [
    OneDayWeather?.DailyForecasts[0],
    OneDayWeather?.Headline,
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5  bg-[#F4F4F4] p-5">
      <h2 className="border-b-2 border-black bg-transparent text-xl font-bold text-zinc-500">
        Previsão para 1 Hora
      </h2>
      <ColapsedWeatherBox.OneHour
        Temp={Temperature.Value}
        FeelTemp={RealFeelTemperature.Value}
        Humidity={RelativeHumidity}
        UVText={UVIndexText}
        WeatherIndex={WeatherIcon}
        WeatherText={IconPhrase}
        Wind={Wind.Speed.Value}
      />

      <h2 className="border-b-2 border-black bg-transparent text-xl font-bold text-zinc-500">
        Previsão para amanhã
      </h2>

      <ColapsedWeatherBox.OneDay
        Day={{ iconPhrase: NextDayData?.Day.IconPhrase }}
        Night={{ iconPhrase: NextDayData?.Night.IconPhrase }}
        Temperature={{
          min: NextDayData?.Temperature.Minimum.Value,
          max: NextDayData?.Temperature.Maximum.Value,
        }}
        WeatherText={InfosNextday?.Text}
        WeatherIndex={NextDayData?.Day.Icon}
      />
    </div>
  );
}
