var lang = 'es';

const buscarPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/torchic";
    fetch(url).then((res) =>{
        return res.json();
    }).then((data) => {
        const movimi = 
        console.log(data)
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
        
        const pokeMoves = data.moves.map(x => getNameMove(x.move.name));
        
        console.log(pokeMoves);
        

    });

}

function getNameMove(name){
    fetch(`https://pokeapi.co/api/v2/move/${name}`)
    .then((res) => res.json())
    .then((data) => console.log(data.names[5].name))
}

function getNameTipo(tipo){
    fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
    .then((res) => res.json())
    .then((data) => console.log(data.names[5].name))
}

buscarPokemon();
