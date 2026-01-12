"use client"
import Image from "next/image";
import { useRef } from "react";

export type animalDetails ={
name:string
species:string;
desc:string;
diet:string;
image:string
}

interface Props{
    details:animalDetails;
}
export default function InfoCard({details}: Props){
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
            src={details.image}
            alt={details.name}
            width={350}
            height={300}
            />
        <div>
        <h2 className="text-4xl font-bold">{details.name}</h2>
        </div>
        </div>
        <dialog ref={dialogRef} className="rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">{details.name}</h2>
            <Image
            className="rounded-xl mb-4"
            src={details.image}
            alt={details.name}
            width={350}
            height={300}
            />
            <p className="text-gray-700 mb-4">{details.species}<br /> {details.diet} <br />{details.desc}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl"
            onClick={closeDialog}
            >
            Close
            </button>
        </dialog>
        </>
    );
}