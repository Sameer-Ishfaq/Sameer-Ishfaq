import AnimalCard from "@/components/animalCard";
import { getAnimals } from "@/lib/animals";
import { animalCardProps } from "@/components/animalCard";
import Link from "next/link";


export default function Kids() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col   px-16 bg-yellow-50  dark:bg-black sm:items-start">
      <h1 className = "py-5 px-4 m-4 border border-solid border-green-600 rounded-xl bg-green-200">Kids Zone</h1>
     <p className="py-4">
      Welcome, young adventurer! At Jacob Wildlife Center, every path leads to a new discovery. Peek into the forest to spot sneaky foxes, listen for hooting owls, and meet animals who have amazing superpowers. Get ready to explore, learn, and have fun as you discover the wild world around you.
     </p>
     <Link href = "/animals">
    <h2 className=" m-4 border border-solid rounded-xl bg-green-200 text-2xl p-3 font-bold ">Animal Locker</h2>
    </Link>
    <p>Look no further than this page to see all the animals that we keep at our zoo</p>
<div className="flex flex-col">
 
     </div>
      </main>
    </div>
  );
}
