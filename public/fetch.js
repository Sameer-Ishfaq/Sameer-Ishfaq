//targets save btn
document.querySelectorAll(".animalBtn").forEach(btn =>{ //loop thorugh each button. Code  less messy
    btn.addEventListener("click", go) //when button clicked, execute "go"
})
//targets infomation btn
document.querySelectorAll(".infoButton").forEach(btn =>{
    btn.addEventListener("click", fetchInfo)
})

function fetchInfo(event){
    fetch("https://tester06062003.web.app/animals.json")
        .then(function(response){
            return response.json()
        })
        .then(function(animals){
         if(event.target === badgerBtn){
                const box = document.getElementById("badgerTxt")
                box.innerHTML = `
                <p>${animals[0].animal}</p>
                <p>${animals[0].species}</p>
                <p>${animals[0].description}</p>
                <p>${animals[0].diet}</p>`
                return;
            }
            if(event.target === beaverBtn){
                const box = document.getElementById("beaverTxt")
                box.innerHTML = `
                <p>${animals[1].animal}</p>
                <p>${animals[1].species}</p>
                <p>${animals[1].description}</p>
                <p>${animals[1].diet}</p>`
                return;
            }
            if(event.target === deerBtn){
                const box = document.getElementById("deerTxt")
                box.innerHTML = `
                <p>${animals[2].animal}</p>
                <p>${animals[2].species}</p>
                <p>${animals[2].description}</p>
                <p>${animals[2].diet}</p>`
                return;
            }
            if(event.target === hedgehogBtn){
                const box = document.getElementById("hedgehogTxt")
                box.innerHTML = `
                <p>${animals[3].animal}</p>
                <p>${animals[3].species}</p>
                <p>${animals[3].description}</p>
                <p>${animals[3].diet}</p>`
                return;
            }
            if(event.target === foxBtn){
                const box = document.getElementById("foxTxt")
                box.innerHTML = `
                <p>${animals[4].animal}</p>
                <p>${animals[4].species}</p>
                <p>${animals[4].description}</p>
                <p>${animals[4].diet}</p>`
                return;
            }
            if(event.target === moleBtn){
                const box = document.getElementById("moleTxt")
                box.innerHTML = `
                <p>${animals[5].animal}</p>
                <p>${animals[5].species}</p>
                <p>${animals[5].description}</p>
                <p>${animals[5].diet}</p>`
                return;
            }
            if(event.target === newtBtn){
                const box = document.getElementById("newtTxt")
                box.innerHTML = `
                <p>${animals[6].animal}</p>
                <p>${animals[6].species}</p>
                <p>${animals[6].description}</p>
                <p>${animals[6].diet}</p>`
                return;
            }
            if(event.target === owlBtn){
                const box = document.getElementById("owlTxt")
                box.innerHTML = `
                <p>${animals[7].animal}</p>
                <p>${animals[7].species}</p>
                <p>${animals[7].description}</p>
                <p>${animals[7].diet}</p>`
                return;
            }
            if(event.target === weaselBtn){
                const box = document.getElementById("weaselTxt")
                box.innerHTML = `
                <p>${animals[8].animal}</p>
                <p>${animals[8].species}</p>
                <p>${animals[8].description}</p>
                <p>${animals[8].diet}</p>`
                return;
            }
        })
        
    
}
function go(event){
    fetch("https://tester06062003.web.app/animals.json")
        .then(function(response){
            return response.json()
        })
        .then(function(animals){
            
            if (event.target === button1){
                const box = document.getElementById("animal1")
                const saved = localStorage.getItem("selectedAnimalA")
                if(saved){
                    console.log("Removed:", saved);
                    localStorage.removeItem("selectedAnimalA")
                    box.innerHTML = `<p>Removed ${animals[0].animal}</p>`
                    button1.innerHTML = `Save Me`
                    return;

                };
              
                localStorage.setItem("selectedAnimalA", JSON.stringify(animals[0]));
                console.log(`Saved: ${localStorage.getItem("selectedAnimalA")}`)
                button1.innerHTML = `Unsave Me`;

                box.innerHTML =`
                <p>${animals[0].animal} saved.</p>`;
             
            
            }
            if (event.target === button2){
                const box = document.getElementById("animal2")
                const saved = localStorage.getItem("selectedAnimalB")
                if(saved){
                    localStorage.removeItem("selectedAnimalB")
                    box.innerHTML = `<p>Removed ${animals[1].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[1].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalB", JSON.stringify(animals[1]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalB")}`)

                box.innerHTML =`
                <p>${animals[1].animal} saved.</p>`;
            }
            if (event.target === button3){
                const box = document.getElementById("animal3")
                const saved = localStorage.getItem("selectedAnimalC")
                if(saved){
                    localStorage.removeItem("selectedAnimalC")
                    box.innerHTML = `<p>Removed ${animals[2].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[2].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalC", JSON.stringify(animals[2]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalC")}`)

                box.innerHTML =`
                <p>${animals[2].animal} saved.</p>`;
            }
            if (event.target === button4){
                const box = document.getElementById("animal4")
                const saved = localStorage.getItem("selectedAnimalD")
                if(saved){
                    localStorage.removeItem("selectedAnimalD")
                    box.innerHTML = `<p>Removed ${animals[3].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[3].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalD", JSON.stringify(animals[3]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalD")}`)

                box.innerHTML =`
                <p>${animals[3].animal} saved.</p>`;
            }
            if (event.target === button5){
                const box = document.getElementById("animal5")
                const saved = localStorage.getItem("selectedAnimalE")
                if(saved){
                    localStorage.removeItem("selectedAnimalE")
                    box.innerHTML = `<p>Removed ${animals[4].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[4].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalD", JSON.stringify(animals[4]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalD")}`)

                box.innerHTML =`
                <p>${animals[4].animal} saved.</p>`;
            }
            if (event.target === button6){
                const box = document.getElementById("animal6")
                const saved = localStorage.getItem("selectedAnimalE")
                if(saved){
                    localStorage.removeItem("selectedAnimalE")
                    box.innerHTML = `<p>Removed ${animals[5].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[5].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalE", JSON.stringify(animals[5]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalE")}`)

                box.innerHTML =`
                <p>${animals[5].animal} saved.</p>`;
            }
            if (event.target === button7){
                const box = document.getElementById("animal7")
                const saved = localStorage.getItem("selectedAnimalF")
                if(saved){
                    localStorage.removeItem("selectedAnimalF")
                    box.innerHTML = `<p>Removed ${animals[6].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[6].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalF", JSON.stringify(animals[6]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalF")}`)

                box.innerHTML =`
                <p>${animals[6].animal} saved.</p>`;
            }
            if (event.target === button8){
                const box = document.getElementById("animal8")
                const saved = localStorage.getItem("selectedAnimalG")
                if(saved){
                    localStorage.removeItem("selectedAnimalG")
                    box.innerHTML = `<p>Removed ${animals[7].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[7].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalG", JSON.stringify(animals[7]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalG")}`)

                box.innerHTML =`
                <p>${animals[7].animal} saved.</p>`;
                
            };
            if (event.target === button9){
                const box = document.getElementById("animal9")
                const saved = localStorage.getItem("selectedAnimalH")
                if(saved){
                    localStorage.removeItem("selectedAnimalH")
                    box.innerHTML = `<p>Removed ${animals[8].animal}</p>`
                    button1.innerHTML = `Save Me`
                    console.log(`Removed: ${animals[8].animal}`)
                    return;

                };
              
                localStorage.setItem("selectedAnimalH", JSON.stringify(animals[8]));
                 console.log(`Saved: ${localStorage.getItem("selectedAnimalH")}`)

                box.innerHTML =`
                <p>${animals[8].animal} saved.</p>`;
            }
        
        })
        
        .catch(function(error){
            console.log(`error: ${error}`);
        })

}
  
