import PropTypes from 'prop-types';
import "./Measures.scss";

const decimeterToCentimeter = (value) => value * 10;
const hectogramToKilogram = (value) => value / 10;

export const PokemonMeasures = ({ weight, height }) => (
  <div className="pokemon-measures">
    <div className="pokemon-measures__height">
      <p className="pokemon-measures--title">Height</p>
      <p className="pokemon-measures--text">{decimeterToCentimeter(height)} cm</p>
    </div>
    <div className="pokemon-measures__weight">
      <p className="pokemon-measures--title">Weight</p>
      <p className="pokemon-measures--text">{hectogramToKilogram(weight)} kg</p>
    </div>
  </div>
);

PokemonMeasures.propTypes = {
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};