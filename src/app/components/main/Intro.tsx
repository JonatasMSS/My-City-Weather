import Image from "next/image";
import Drop from "@/assets/icons/drop.svg";

export function Intro() {
  return (
    <div className="relative  rounded-xl p-10 shadow-md  ">
      <h2 className="text-start text-3xl font-medium">
        Seja bem vindo ao{""}
        <br />
        <span className="font-bold text-cyan-500">My City Weather</span>
      </h2>
      <h2 className="my-3 font-semibold ">Comece pesquisando a sua cidade!</h2>

      {/* ICON */}
      <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center  rounded-full border-2  border-cyan-800 bg-cyan-500 text-center">
        <Image src={Drop} alt="Gota" />
      </div>
    </div>
  );
}
