const pokemonContainer = document.querySelector('#container')
const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

async function paintPokemon(name, image){
    pokemonContainer.innerHTML = `<p>${name}</p>
                                  <img src = "${image}"></img>`
}

async function randomPokemon(){
    try {
        const getPokemonList = await axios.get(pokemonUrl)
        const randomId = Math.floor(Math.random() * getPokemonList.data.count)
        const getPokemon = await axios.get(pokemonUrl+ randomId + '/')
        const pokemonName = getPokemon.data.forms[0].name
        const pokemonImage = getPokemon.data.sprites.front_default
        await paintPokemon(pokemonName, pokemonImage)
    } catch (error) {
        randomPokemon()
    }

}

randomPokemon()

