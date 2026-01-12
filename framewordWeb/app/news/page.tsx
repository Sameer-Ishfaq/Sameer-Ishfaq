import newsData from "@/data/internal.json"
import AnimalCard from "@/components/animalCard";

/**using the AnimalCard function to pull data from internal.json*/

export default function News()
{   
    return(
            <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
        <main className="flex flex-col items-center w-full max-w-4xl gap-8 p-8 bg-yellow-50">
           <h1>News</h1>
           <p className="text-2xl">Press any animal to see their latest developments</p>
            {newsData.map((animal, index) =>(
                <AnimalCard key={index} animal={animal}
                />
            ))}

        </main>
        </div>
    )   

}
