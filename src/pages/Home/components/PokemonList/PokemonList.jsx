import { useSelector } from "react-redux";
import { PokemonCard } from '../PokemonCard/PokemonCard';
import "./PokemonList.scss";

export const PokemonList = () => {
  const { pokemons } = useSelector((state) => state.pokemon);

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
};