const buscarPokemon = () => {
    const pokeNameInput = document.getElementById("pokemon-findName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) =>{
        if (res.status != "200") {
            //pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data)
            
            const pokeDatos = {
                nombre: data.name, 
                img: data.sprites.other['official-artwork'].front_default,
                tipo: data.types[0].type.name,
                estadisticas: {
                    hp: data.stats[0].base_stat,
                    ataque: data.stats[1].base_stat,
                    defensa: data.stats[2].base_stat,
                    ataqueEspecial: data.stats[3].base_stat,
                    defensaEspecial: data.stats[4].base_stat,
                    velocidad: data.stats[5].base_stat
                },
                
            }
            let pokeImg = data.types[0].type.name
            console.log(pokeDatos)
            pokeNombre(pokeDatos.name)
            pokeImagen(pokeDatos.img)
            pokeTipo(pokeDatos)
        }
    })
}

/*
const pokeNombre = (u) => {
    const pokeName = document.getElementById("pokemon-name");
    pokeName.innerText = u;
    console.log(pokeName)
}

const pokeImagen = (url) => {
    const pokePhoto = document.getElementById("pokemon-img");
    pokePhoto.src = url;
}


const pokeTipo = (url) => {
    const pokeType = document.getElementById("pokemon-tipo");
    pokeType.src = url;
}


const pokeEstadisticas = (url) => {
    const pokeStats = document.getElementById("pokemon-stats");
    pokeStats.src = url;
}

const pokeMovimientos = (url) => {
    const pokeMoves = document.getElementById("pokemon-moves");
    pokeMoves.src = url;
}

function getNameTipo(tipo){
    fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
    .then((res) => res.json())
    .then(dataType =>{
        salida = dataType.names[5].name;
    }); 
        
}


function getNameMove(name){
    let moves = [];
    fetch(`https://pokeapi.co/api/v2/move/${name}`)
    .then((res) => res.json())
    .then(dataMove => moves.push(dataMove.names[5].name));
    console.log(moves);
}    
*/