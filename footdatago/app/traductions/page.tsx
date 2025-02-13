"use client";

import { useState } from "react";
import { LangueSelect } from "../../components/SelectLangue";
import { useTraductions } from "./(hooks)/HookTraduction";

export default function Home() {
  const [langue, setLangue] = useState("fr");
  const { data: texts, isLoading } = useTraductions(langue);

  if (isLoading) return <div>Chargement</div>;

  return (
    <div className="p-4">
      <div className="mb-4">
        <LangueSelect value={langue} onValueChange={setLangue} />
      </div>

      <div className="flex  justify-center item-center ">
        <div className="flex flex-col items-center">

        
        <h1 className=" font-bold text-5xl">{texts?.title}</h1>
        <h2 className=" my-2 text-green-500 text-2xl">{texts?.welcome}</h2>
        <p>{texts?.description}</p>
        </div>
      
      </div>
    </div>
  );
}
