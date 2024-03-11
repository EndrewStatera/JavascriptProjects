const button = document.getElementById("fetch");


async function fetchStuff(){
    const pokemonName = document.getElementById("pokemonName");

    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`);
    if(!response.ok)
        throw new Error();

    let data = await response.json();
    let pokemonSprites = data.sprites.front_default;
    const img = document.getElementById("pokemonImage");
    img.src = pokemonSprites;
    img.style.display = "block";
    img.style.width = "330px";
    console.log(data);
    
    }catch(error){
        console.error(error);
    }
}

fetchStuff();