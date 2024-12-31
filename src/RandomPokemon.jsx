import "./RandomPokemon.css"

export default function RandomPokemon() {

    const randNumber = Math.floor(Math.random()*151)+1;
    const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNumber}.png`
    return (
        <div className="RandomPokemon">
            <h1>Pokemon #{randNumber}</h1>
            <img src={pokemonImg} alt="" />
        </div>
    )
}