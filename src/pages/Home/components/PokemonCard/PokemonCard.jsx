import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import { setPokemon } from "~/store/ducks/pokemon";
import "./PokemonCard.scss";
import { background } from '~/utils/colors';

export const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    matches: isDesktop
  } = window.matchMedia("(min-width: 768px)");

  const handleCardClick = () => {
    dispatch(setPokemon(pokemon));
    history.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <li className="pokemon-card" style={{
      backgroundColor: background[pokemon.backgroundColor],
    }}>
      <button className="pokemon-button" onClick={handleCardClick}>
        <img
          className="pokemon-button__picture"
          src={pokemon.cardImage}
          alt={`${pokemon.name} image`}
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