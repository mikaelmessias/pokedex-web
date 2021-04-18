import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { fetchAbilities } from '~/store/ducks/abilities';
import './Abilities.scss';

export const PokemonAbilities = ({ names }) => {
  const dispatch = useDispatch();
  const { abilities } = useSelector((state) => state.abilities);

  useEffect(() => {
    dispatch(fetchAbilities(names));
  }, []);

  return (
    <div className="pokemon-abilities">
      <p className="pokemon-abilities--title">Abilities</p>

      <div className="pokemon-ability-items">
        {abilities.length && abilities.map((ability) => (
          <div key={ability.name}
            className={classNames(
              `pokemon-ability__${ability.name}`,
              'pokemon-ability'
            )}
          >
            <p className="pokemon-ability--title">
              {ability.name.replace('-', ' ')}
            </p>
            {ability.effectEntries.map(({ effect, shortEffect }) => (
              <>
                <p className="pokemon-ability--effect">
                  <strong>Effect</strong>
                  {effect}
                </p>
                <p className="pokemon-ability--shortEffect">
                  <strong>Short Effect</strong>
                  {shortEffect}
                </p>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

PokemonAbilities.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};