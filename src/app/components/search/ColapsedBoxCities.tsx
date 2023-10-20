import { CityLocationData } from "@/models/City.model";
import Link from "next/link";

interface ColapsedBoxCities extends CityLocationData {}

export function ColapsedBoxCities({
  Country,
  AdministrativeArea,
  LocalizedName,
  Key,
}: ColapsedBoxCities) {
  return (
    <Link
      href={{
        pathname: `/${LocalizedName}`,
        query: { state: `${AdministrativeArea.LocalizedName}`, q: Key },
      }}
      className="flex min-w-[12rem] flex-col items-start gap-2 rounded-md border-2 border-zinc-200 px-5 py-2 shadow-md transition-all hover:scale-110 hover:cursor-pointer "
    >
      <div className="flex flex-col items-baseline gap-2">
        <h2 className="text-xl font-bold">{LocalizedName}</h2>
        <h2>
          {AdministrativeArea.LocalizedName}, {Country.ID}
        </h2>
      </div>
    </Link>
  );
}
