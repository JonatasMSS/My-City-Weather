import Image from "next/image";
import Link from "next/link";
import Arrow_back from "@/assets/icons/arrow_back.svg";
import { ICityCurrentConditions } from "@/models/City.model";
import { ConvertEpochToDateTime } from "@/lib/utils/EpochToDateTime";
import { WeatherIconImage } from "@/models/WeatherIcon.model";

interface HeaderProps {
  cityName: string;
  state: string;
  dateTime?: EpochTimeStamp;
}

const Header = ({ cityName, state, dateTime = 0 }: HeaderProps) => {
  const time = ConvertEpochToDateTime(dateTime);

  return (
    <div className=" flex w-full items-center justify-between">
      <div className="flex gap-2 ">
        <Link
          href={"/search"}
          className=" rounded-full bg-zinc-300 p-1 transition-colors hover:bg-zinc-400"
        >
          <Image src={Arrow_back} alt="Voltar" />
        </Link>
        <h2 className="text-3xl font-bold text-zinc-600">
          {cityName}, {state}
        </h2>
      </div>
      {/* Hours */}
      <h2 className="text-2xl font-bold text-zinc-600">
        Ultimo registro: {time.format("HH:mm A")}
      </h2>
    </div>
  );
};

interface IInfoData extends ICityCurrentConditions {}

const InfoData = ({ WeatherIcon, Temperature, WeatherText }: IInfoData) => {
  const IconConditionWeather = new WeatherIconImage(WeatherIcon ?? 0);

  return (
    <div className="relative my-10 flex w-full flex-col items-center justify-center">
      {/* Circle */}
      <div className="flex flex-col items-center justify-center rounded-full bg-blue-300 p-14">
        <Image
          className="w-56 "
          src={IconConditionWeather.getIcon()}
          alt="Partial"
        />
      </div>

      {/* Info data */}

      <div className="absolute -bottom-[4rem] flex  w-1/2 flex-col items-center justify-center rounded-full bg-white py-2 shadow-md">
        <h2 className="text-8xl font-bold">{Temperature?.Metric.Value}°C</h2>
        <h2 className="text-zinc-600">{WeatherText}</h2>
      </div>
    </div>
  );
};

const sections = {
  Header,
  InfoData,
};

export default sections;
