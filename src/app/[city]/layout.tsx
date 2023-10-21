import { ReactNode } from "react";

export default function CityConditionLayout(props: {
  children: ReactNode;
  oneHourCond: ReactNode;
}) {
  return (
    <>
      {props.children}{" "}
      <div className="flex w-full flex-col items-center  bg-[#F4F4F4] p-5">
        <h2 className="border-b-2 border-black bg-transparent text-xl font-bold text-zinc-500">
          Previsão para 1 Hora
        </h2>

        {props.oneHourCond}
      </div>
    </>
  );
}
