import Image from "next/image";
import FeelTemp from "@/assets/icons/weather/feel_temp.svg";
import humidity from "@/assets/icons/weather/humidity.svg";
import winds from "@/assets/icons/weather/winds.svg";
import uv from "@/assets/icons/weather/uv.svg";
import pressure_icon from "@/assets/icons/weather/pressure.svg";

interface TempProp {
  temperature: string | number | undefined;
}

const Temp = ({ temperature }: TempProp) => {
  return (
    <div className="flex min-h-[8rem] max-w-[9rem] flex-col items-center gap-1 rounded-md  border-2 border-zinc-100 bg-white p-2 shadow-md">
      <Image className="w-7" src={FeelTemp} alt="Sensação térmica" />
      <h2 className="font-bold text-zinc-500">{temperature}°C</h2>
      <h2 className="text-center font-bold text-zinc-400">Sensação térmica</h2>
    </div>
  );
};

interface HumidityProps {
  relativeHumidity: number | string | undefined;
}
const Humidity = ({ relativeHumidity }: HumidityProps) => {
  return (
    <div className="flex min-h-[10rem] max-w-[9rem] flex-col items-center justify-center gap-1 rounded-md  border-2 border-zinc-100 bg-white p-2 shadow-md">
      <Image className="w-12" src={humidity} alt="Umidade" />
      <h2 className="font-bold text-zinc-500">{relativeHumidity}%</h2>
      <h2 className="text-center font-bold text-zinc-400">Umidade</h2>
    </div>
  );
};

interface Windprops {
  velocity: number | string | undefined;
}
const Wind = ({ velocity }: Windprops) => {
  return (
    <div className="flex min-h-[10rem] max-w-[9rem] flex-col items-center justify-center gap-1 rounded-md  border-2 border-zinc-100 bg-white p-2 shadow-md">
      <Image className="w-12" src={winds} alt="Ventos" />
      <h2 className="font-bold text-zinc-500">{velocity} km/h</h2>
      <h2 className="text-center font-bold text-zinc-400">Ventos</h2>
    </div>
  );
};

interface UVProps {
  UVText: string | undefined;
}
const UV = ({ UVText }: UVProps) => {
  return (
    <div className="flex min-h-[10rem] max-w-[9rem] flex-col items-center justify-center gap-1 rounded-md  border-2 border-zinc-100 bg-white p-2 shadow-md">
      <Image className="w-12" src={uv} alt="UV" />
      <h2 className="font-bold text-zinc-500">{UVText}</h2>
      <h2 className="text-center font-bold text-zinc-400">Raios UVs</h2>
    </div>
  );
};

interface PressureProps {
  pressure: number | string | undefined;
}

const Pressure = ({ pressure }: PressureProps) => {
  return (
    <div className="flex min-h-[10rem] max-w-[9rem] flex-col items-center justify-center gap-1 rounded-md  border-2 border-zinc-100 bg-white p-2 shadow-md">
      <Image className="w-12" src={pressure_icon} alt="Ventos" />
      <h2 className="font-bold text-zinc-500">{pressure} mBar</h2>
      <h2 className="text-center font-bold text-zinc-400">Pressão</h2>
    </div>
  );
};

const MiniData = {
  Temp,
  Humidity,
  Wind,
  UV,
  Pressure,
};

export default MiniData;
