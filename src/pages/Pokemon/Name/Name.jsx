import PropTypes from 'prop-types';
import "./Name.scss";

export const PokemonName = ({ name }) => (
  <div className="pokemon-name">
    <p className="pokemon-name--title">Name</p>
    <h1 className="pokemon-name--text">{name}</h1>
  </div>
);

PokemonName.propTypes = {
  name: PropTypes.string.isRequired,
};