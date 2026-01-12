"use client"
import Image from "next/image";
import { useRef } from "react";

export type animalCardProps ={
    name:string;
    news:string;
    image:string;
};
interface Props{
    animal:animalCardProps;
}
export default function AnimalCard({animal}: Props){
    const dialogRef = useRef<HTMLDialogElement>(null);
    function openDialog(){
        dialogRef.current?.showModal()
    }
    function closeDialog(){
        dialogRef.current?.close()
    }
    return(
        <>
        <div className=" cursor-pointer flex items-center gap-4 p-4 rounded-xl w-full max-w-3xl mx-auto"
        onClick={openDialog}
        >
            <Image
            className="rounded-lg object-cover"
            src={animal.image}
            alt={animal.name}
            width={350}
            height={300}
            priority
            />
        <div>
        <h2 className="text-4xl font-bold">{animal.name}</h2>
        </div>
        </div>
        <dialog ref={dialogRef} className="rounded-xl p-6 shadow-xl">
            <h2 className="text-3 font-bold mb-4">{animal.name}</h2>
            <Image
            className="rounded-xl mb-4"
            src={animal.image}
            alt={animal.name}
            width={350}
            height={300}
            priority
            />
            <p className="text-gray-700 mb-4">{animal.news}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl"
            onClick={closeDialog}
            >
            Close
            </button>
        </dialog>
        </>
    );
}