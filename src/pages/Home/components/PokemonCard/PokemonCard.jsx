import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setPokemon } from "~/store/ducks/pokemon";
import "./PokemonCard.scss";
import { background } from './utils';

export const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const {
    matches: isDesktop
  } = window.matchMedia("(min-width: 768px)");

  const handleCardClick = () => {
    dispatch(setPokemon(pokemon));
  };

  return (
    <li className="pokemon-card" style={{
      backgroundColor: background[pokemon.backgroundColor],
    }}>
      <button className="pokemon-button" onClick={handleCardClick}>
        <img
          className="pokemon-button__picture"
          src={pokemon.cardImage}
          alt={`Imagem do pokemon ${pokemon.name}`}
          title={pokemon.name}
        />

        <span className="pokemon-button__name" style={{
          backgroundColor: isDesktop && background[pokemon.backgroundColor],
        }}>
          {pokemon.name}
        </span>
      </button>
    </li>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    backgroundColor: PropTypes.string,
    cardImage: PropTypes.string,
    backImage: PropTypes.string,
    frontImage: PropTypes.string,
    weight: PropTypes.number,
    height: PropTypes.number,
    type: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};