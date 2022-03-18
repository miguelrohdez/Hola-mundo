const buscarPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/torchic";
    fetch(url).then((res) =>{
        if (res.status != "200") {
            //pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        
        const pokeDatos = {
            img: data.sprites.other['official-artwork'].front_default,
            tipo: data.types[0].type.name,
            estadisticas: {
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                ataqueEspecial: data.stats[3].base_stat,
                defensaEspecial: data.stats[4].base_stat,
                velocidad: data.stats[5].base_stat
            }
            
        };
        
        console.log(pokeDatos);
        
    });
    
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

