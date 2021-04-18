import PropTypes from 'prop-types';
import { background } from '~/utils/colors';
import { iconTypes } from '~/utils/iconTypes';
import "./Type.scss";

export const PokemonType = ({ types }) => (
  <div className="pokemon-type">
    <p className="pokemon-type--title">Types</p>
    <div className="pokemon-type__items">
      {types.map((type) => (
        <div key={type} className="pokemon-type__item" style={{
          backgroundColor: background[type]
        }}>
          {iconTypes[type]}
          {type}
        </div>
      ))}
    </div>
  </div>
);

PokemonType.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};