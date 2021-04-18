import classNames from 'classnames';
import PropTypes from 'prop-types';
import { statsbg } from '~/utils/colors';
import "./Stats.scss";

export const PokemonStats = ({ stats }) => (
  <div className="pokemon-stats">
    <p className="pokemon-stats--title">Stats</p>

    <div className="pokemon-stat-items">
      {stats.length && stats.map((stat) => (
        <div key={stat.name}
          className={classNames(
            `pokemon-stat__${stat.name}`,
            'pokemon-stat'
          )}
          style={{ color: statsbg[stat.name.replace('-', '')] }}
        >
          <p className="pokemon-stat--title">{stat.name}</p>
          <p className="pokemon-stat--text">{stat.base_stat}</p>
        </div>
      ))}
    </div>
  </div>
);

PokemonStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    base_stat: PropTypes.number,
  })).isRequired,
};
