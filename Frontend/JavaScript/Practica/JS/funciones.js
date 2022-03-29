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
            console.log(data);
            
            const pokeDatos = {
                nombre: data.name, 
                img: data.sprites.other['official-artwork'].front_default,
                tipo: data.types[0].type.name,
                tipo_url:data.types[0].type.url,
                estadisticas: {
                    hp: data.stats[0].base_stat,
                    ataque: data.stats[1].base_stat,
                    defensa: data.stats[2].base_stat,
                    ataqueEspecial: data.stats[3].base_stat,
                    defensaEspecial: data.stats[4].base_stat,
                    velocidad: data.stats[5].base_stat
                },
                movimientos: data.moves.map(x => x.move.name),
                movimientos_url: data.moves.map(x => x.move.url)
            }
            ponerDatos(pokeDatos);
                        
        }
    });
}

const ponerDatos = (pokeDatos) => {
    console.log(pokeDatos);
    const pokePhoto = document.getElementById("pokemon-img");
    const pokeName = document.getElementById("pokemon-name");
    const pokeType = document.getElementById("pokemon-type");
    const pokeStatHP = document.getElementById("stat-hp");
    const pokeStatAT = document.getElementById("stat-at");
    const pokeStatDF = document.getElementById("stat-df");
    const pokeStatSP = document.getElementById("stat-sp");
    const pokeStatATSP = document.getElementById("stat-atsp");
    const pokeStatDFSP = document.getElementById("stat-defsp");
    
    pokeName.innerText = pokeDatos.nombre;
    pokePhoto.src = pokeDatos.img;
    pokeType.innerText = pokeDatos.tipo;
    pokeStatHP.innerText = pokeDatos.estadisticas.hp;
    pokeStatAT.innerText = pokeDatos.estadisticas.ataque;
    pokeStatDF.innerText = pokeDatos.estadisticas.defensa;
    pokeStatSP.innerText = pokeDatos.estadisticas.velocidad;
    pokeStatATSP.innerText = pokeDatos.estadisticas.ataqueEspecial;
    pokeStatDFSP.innerText = pokeDatos.estadisticas.defensaEspecial;
    ponerMovimientos(pokeDatos.movimientos);

   // console.log(await getNameTipo(pokeDatos.tipo_url));
    
}

function ponerMovimientos(array){
    document.getElementById("pokemon-moves").innerHTML="";
    array.forEach(movimiento => {
        var elemento = document.createElement("p");
        var contenido = document.createTextNode(movimiento);
        elemento.appendChild(contenido);
        document.getElementById("pokemon-moves").appendChild(elemento);
    });
}

const getNameTipo = async (url) => {
    const respuesta = await fetch (url);
    const json = await respuesta.json();
    return json.names[5].name;
    /*
    fetch(url)
    .then(res => {
        return res.json();
    }).then( (dataType) =>{
        return dataType.names[5].name;
    }); */
}

function getNameMove(name){
    let moves = [];
    fetch(`https://pokeapi.co/api/v2/move/${name}`)
    .then((res) => res.json())
    .then(dataMove => moves.push(dataMove.names[5].name));
    console.log(moves);
}