const name = "Sameer"
const age = 22;
const DOB = "06/06/2003"

output.innerHTML = `Hello ${name}   how old are you? ${age} <br> When were you born? ${DOB}`;

const animals = document.getElementById("button");
animals.addEventListener("click", aniData)

function aniData(){
    fetch("aniData.json")
    .then(function(response){
        return response.json()
    })
    .then(function(aniData){
        let para = document.createElement("retrieve")
        para.innerHTML = `
        ${aniData.name1} ${aniData.age1}<br>
        ${aniData.crazy} ${aniData.species} <br>
        ${aniData.foods[0]}`;
        document.body.append(para);

    })
    .catch(function(error){
       
        console.log`error ${error}`
    });
}