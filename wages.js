const output = document.getElementById("output"); 
output.innerText = "Hello World";
const name = "Russell"; 
const rate_of_pay = 12.21; 
const hours_worked = 40;
const take_home_pay = rate_of_pay * hours_worked;
output.innerText = `Take home pay: £${take_home_pay.toFixed(2)}`

const myPet = document.getElementById("myPet"); //variable called myPet calls an id in html called myPet.
myPet.addEventListener("click", pet) //when user clicks, pet cunction is called

function pet(){ //function
    fetch("myPet.json")
    .then(function(response){ //pulls our json file and makes it readable
        return response.json() 
    })
    .then(function(myPet){ //promise
        let para = document.createElement("output"); //created an element called output
        para.innerHTML = ` 
        ${myPet.name} (${myPet.age})<br>
        ${myPet.allowedOutdoors} 
        ${myPet.favouriteSpots.livingRoom} ${myPet.favouriteSpots.kitchen} ${myPet.favouriteSpots.bedroom} ${myPet.favouriteSpots.garden}
        ${myPet.favouriteFoods [2]}`; //json file name + objects
        document.body.append(para); //paragraph is created and shown upon click of button
        
    })
     .catch(function(error){

        console.log(`error: ${error}`) //displays error code.
     });

   
}

