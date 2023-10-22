// Page Sections

import { URL } from "url";
import MiniData from "../components/city/MiniData";

import PageSections from "./_Sections/PageSections";
import { GetCurrentCondition } from "@/controllers/CitySearch.controller";
import { GridAnimScroll } from "./anim/GridAnimScroll";

export default async function CityConditionPage({
  params,
  searchParams,
}: {
  params: { city: string };
  searchParams: any;
}) {
  const cityName = decodeURI(params.city);
  const { state, q } = searchParams; // Onde o "q" é o ID da cidade

  try {
    const cityConditions = await GetCurrentCondition(q);

    return (
      <main className="flex min-h-screen w-full flex-col items-start justify-center gap-3 bg-[#F4F4F4] p-5">
        <PageSections.Header
          cityName={cityName}
          state={state}
          dateTime={cityConditions?.EpochTime}
        />
        {/* Weather Data and Temp */}
        <PageSections.InfoData
          WeatherIcon={cityConditions?.WeatherIcon}
          WeatherText={cityConditions?.WeatherText}
          Temperature={cityConditions?.Temperature}
        />

        {/* Aditionals data */}
        <div className="my-20 flex w-full flex-col items-center justify-center">
          <GridAnimScroll>
            <MiniData.Temp
              temperature={cityConditions?.ApparentTemperature?.Metric.Value}
            />
            <MiniData.Humidity
              relativeHumidity={cityConditions?.RelativeHumidity}
            />
            <MiniData.Wind
              velocity={cityConditions?.Wind?.Speed.Metric.Value}
            />
            <MiniData.UV UVText={cityConditions?.UVIndexText} />
            <MiniData.Pressure
              pressure={cityConditions?.Pressure?.Metric.Value}
            />
          </GridAnimScroll>
        </div>
      </main>
    );
  } catch (error: any) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Parece que ocorreu um erro</h2>
        <h2 className="font-bold text-red-500">{error.message}</h2>
      </div>
    );
  }
}
