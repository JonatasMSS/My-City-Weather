"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader } from "../../components/main/Loader";

import { ColapsedBoxCities } from "../../components/search/ColapsedBoxCities";
import { CityLocationData } from "@/models/City.model";
import { GetCityKeyByName } from "@/controllers/CitySearch.controller";
import { GridAnim } from "@/app/components/search/anim/GridAnim";

export default function SearchCities() {
  const params = useSearchParams().get("city");
  const [isLoading, setLoadingState] = useState(false);
  const [cities, setCities] = useState<CityLocationData[]>([]);

  useEffect(() => {
    if (params) {
      setLoadingState(true);
      GetCityKeyByName(params).then((resp) => {
        setCities(resp);
        setLoadingState(false);
      });
    }
  }, [params]);

  if (isLoading) return <Loader />;

  return (
    <main className="flex w-full flex-col items-center   gap-10">
      {params && <h2 className="text-xl font-bold">Selecione sua cidade!</h2>}
      {params && (
        <h2 className="text-sm font-light text-red-400">
          Aviso! Alguns dados podem vir com uma certa imprecisão!
        </h2>
      )}

      <GridAnim>
        {cities.map((data, i) => (
          <ColapsedBoxCities
            AdministrativeArea={data.AdministrativeArea}
            Country={data.Country}
            Key={data.Key}
            key={data.Key}
            LocalizedName={data.LocalizedName}
          />
        ))}
      </GridAnim>
    </main>
  );
}
