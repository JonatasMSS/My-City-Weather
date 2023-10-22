import { WeatherIconImage } from "@/models/WeatherIcon.model";
import Image from "next/image";
import FeelTemp from "@/assets/icons/weather/feel_temp.svg";
import Umid from "@/assets/icons/weather/humidity.svg";
import UV from "@/assets/icons/weather/uv.svg";
import Wind from "@/assets/icons/weather/winds.svg";
import Night from "@/assets/icons/weather/night.svg";
import Sun from "@/assets/icons/weather/sunny.svg";
interface OneHourWeatherProps {
  WeatherIndex: number | undefined;
  WeatherText: string | undefined;
  FeelTemp: number | string | undefined;
  Temp: number | string | undefined;
  Humidity: number | string | undefined;
  UVText: number | string | undefined;
  Wind: number | string | undefined;
}
function OneHour(props: OneHourWeatherProps) {
  const WeatherImage = new WeatherIconImage(props.WeatherIndex ?? 0);

  const CircleIconWeather = () => {
    return (
      <section className="flex flex-col items-center justify-center rounded-full bg-blue-300 p-5 ">
        <Image src={WeatherImage.getIcon()} alt="Clima" className="w-20" />
      </section>
    );
  };

  const MiniAditionalWeatherData = ({
    image,
    data,
  }: {
    image: any;
    data: string | number;
  }) => {
    return (
      <section className="flex  items-center gap-2 ">
        <Image src={image} alt="Feel Temp" className="w-4" />
        <h2 className=" text-sm font-bold text-zinc-600">{data}</h2>
      </section>
    );
  };

  return (
    <div className="my-5 flex w-[55%] items-center  justify-between rounded-md border-2 border-zinc-200 p-5 shadow-md">
      <div className="flex items-center gap-5">
        <CircleIconWeather />
        <section>
          <h2 className="text-2xl font-bold text-zinc-800">{props.Temp} °C</h2>
          <h2 className="text-sm font-bold text-zinc-600">
            {props.WeatherText}
          </h2>
        </section>
      </div>

      <div className="grid grid-flow-row grid-cols-3 gap-4">
        {props.FeelTemp && (
          <MiniAditionalWeatherData
            image={FeelTemp}
            data={`${props.FeelTemp}°C`}
          />
        )}
        {props.Humidity && (
          <MiniAditionalWeatherData image={Umid} data={`${props.Humidity}%`} />
        )}
        {props.Wind && (
          <MiniAditionalWeatherData image={Wind} data={`${props.Wind} Km/h`} />
        )}
        {props.WeatherText && (
          <MiniAditionalWeatherData image={UV} data={`${props.UVText}`} />
        )}
      </div>
    </div>
  );
}

interface OneDayWeatherProps {
  WeatherIndex?: number;
  WeatherText?: string;
  Temperature?: {
    min?: number;
    max?: number;
  };
  Day?: {
    iconPhrase?: string;
  };
  Night?: {
    iconPhrase?: string;
  };
}

function OneDay(props: OneDayWeatherProps) {
  const WeatherImage = new WeatherIconImage(props.WeatherIndex ?? 0);

  const CircleIconWeather = () => {
    return (
      <section className="flex flex-col items-center justify-center rounded-full bg-blue-300 p-5 ">
        <Image src={WeatherImage.getIcon()} alt="Clima" className="w-28" />
      </section>
    );
  };

  return (
    <div className=" my-5 flex w-[55%] items-center justify-between rounded-md border-2 border-zinc-200 p-5 shadow-md">
      <div className="flex items-center gap-5">
        <CircleIconWeather />
        {/* Description */}
        <section className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-zinc-800">
            Min: {props.Temperature?.min} °C
          </h2>
          <h2 className="text-xl font-bold text-zinc-800">
            Max: {props.Temperature?.max} °C
          </h2>
          <h2 className="text-sm font-bold text-zinc-600">
            {props.WeatherText}
          </h2>
        </section>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-2">
        <section className="flex items-center gap-1">
          <Image src={Sun} alt="Sun" />
          <h2 className="text-sm font-light">{props.Day?.iconPhrase}</h2>
        </section>

        <section className="flex  items-center gap-1">
          <Image src={Night} alt="Sun" />
          <h2 className="text-sm font-light">{props.Night?.iconPhrase}</h2>
        </section>
      </div>
    </div>
  );
}

const ColapsedWeatherBox = {
  OneHour,
  OneDay,
};

export default ColapsedWeatherBox;
