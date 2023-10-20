"use client";

import Image from "next/image";
import Lens from "@/assets/icons/Lens.svg";
import { FormEvent, useState } from "react";
import { Loader } from "./Loader";
import { useRouter } from "next/navigation";
import { Variants, motion } from "framer-motion";

export function SearchBar() {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`?city=${city}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[80%] justify-between rounded-full bg-zinc-300 px-2 py-1"
    >
      <input
        type="text"
        name="search"
        id="search"
        onChange={(value) => setCity(value.target.value)}
        className="w-full border-transparent bg-transparent font-light outline-none"
      />

      <button
        type="submit"
        className="rounded-full transition-all hover:scale-125  "
      >
        <Image src={Lens} className="w-5" alt="Lentes" color="blue" />
      </button>
    </form>
  );
}
