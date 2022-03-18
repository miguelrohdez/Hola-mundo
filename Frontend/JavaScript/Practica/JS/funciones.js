var lang = 'es';

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
        console.log(data.types[0].type.name);
        let tipo = data.types[0].type.name;
        console.log(tipo);
        console.log(getNameTipo(tipo));
        
        const pokeDatos = {
            img: data.sprites.other['official-artwork'].front_default,
            tipo: getNameTipo(data.types[0].type.name),
            estadisticas: {
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                ataqueEspecial: data.stats[3].base_stat,
                defensaEspecial: data.stats[4].base_stat,
                velocidad: data.stats[5].base_stat
            },
        
        
        
        
        };
        
        console.log(pokeDatos);
        //const pokeMoves = data.moves.map(x => getNameMove(x.move.name));
        
        

    });

}



function getNameMove(name){
    let moves = [];
    fetch(`https://pokeapi.co/api/v2/move/${name}`)
    .then((res) => res.json())
    .then((dataMove) => moves.push(dataMove.names[5].name));
    console.log(moves);
}

function getNameTipo(tipo){
    let tipoNombre;
    fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
    .then((res) => res.json())
    .then((dataType) => tipoNombre = dataType.names[5].name)
    return tipoNombre;
}

buscarPokemon();
