import Image from "next/image";
import Link from "next/link";
import { getAnimals } from "@/lib/animals";
import InfoCard, { animalDetails } from "@/components/animalDetails";

export default async function Details(){
    const details = await getAnimals();
    return(
        <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
        <main className= "flex min-h-screen w-full max-w-4xl flex-col   px-16 bg-yellow-50  dark:bg-black sm:items-start">
            <h1 className="p-4 m-4 border border-solid rounded-xl border-zinc-800 bg-green-200 ">The Golden Gang</h1>
            <p className="p-4">Look no further than this page to see all the animals we keep at our zoo. Let's see how many you can spot around our center</p>
            <div className="flex flex-col">
                {details.map((details: animalDetails, index: number) =>(
                  <InfoCard key={index} details={details} />
                ))}   
                 </div>
        </main>
        </div>
    )
}