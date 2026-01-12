//Get external json source details
function getName(label:string){
    return label.replace("Animal:", "");
}
function getDesc(desc:string){
    return desc.replace("description: ", "");
}
function getSpecies(species:String){
    return species.replace("species:", "")
}
function getDiet(diet:string){
    return diet.replace("diet:", "")
}
export async function getAnimals(){
    const res = await fetch(
        "https://raw.githubusercontent.com/Sameer-Ishfaq/Sameer-Ishfaq/refs/heads/main/animals.json",
        {
            headers:{
                "Cache-Control": "max-age-2592000"
            }
        }
    );
    if(!res.ok) throw new Error("Failed to fetch animals");
    const data = await res.json();
    return data.map((item: any)=> ({
        name: getName(item.animal),
        desc: getDesc(item.description),
        species: getSpecies(item.species),
        diet: getDiet(item.diet),
        image:item.image,
    }))
}