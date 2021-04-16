import { useDispatch, useSelector } from "react-redux";
import { fetchOnePokemon } from "@Store/ducks/pokemon";
import "./PokemonList.scss";

export const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemon);

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li className="pokemon-list__item" key={pokemon.name}>
          <button
            onClick={() => dispatch(fetchOnePokemon(pokemon.url))}
          >
            {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
};