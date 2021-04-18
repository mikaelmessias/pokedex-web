import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchPokemon } from '~/store/ducks/pokemon';
import { background } from '~/utils/colors';
import { iconTypes } from '~/utils/iconTypes';
import { Header } from '~/components/Header/Header';
import { LoadingOverlay } from '~/components/LoadingOverlay/LoadingOverlay';
import { Slider } from '~/components/Slider';
import "./styles.scss";
import { PokemonAbilities } from './Abilities/Abilities';
import { PokemonMeasures } from './Measures/Measures';
import { PokemonName } from './Name/Name';
import { PokemonStats } from './Stats/Stats';
import { PokemonType } from './Type/Type';

export const PokemonPage = () => {
  const query = useParams();
  const dispatch = useDispatch();
  const { pokemon, isLoading: pokemonLoading } = useSelector((state) => state.pokemon);
  const { isLoading: abilitiesLoading } = useSelector((state) => state.abilities);

  const history = useHistory();

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(pokemonLoading || abilitiesLoading);
  }, [pokemonLoading, abilitiesLoading]);

  useEffect(() => {
    if (!pokemon) {
      dispatch(fetchPokemon(query.pokemonId));
    }
  }, [query]);

  useEffect(() => {
    if (pokemon) {
      setItems([
        { url: pokemon.cardImage, name: 'Arte oficial' },
        { url: pokemon.frontImage, name: 'Imagem padrão - frente' },
        { url: pokemon.backImage, name: 'Imagem padrão - costas' }
      ]);
    }
  }, [pokemon]);
  
  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <Header className="pokemon-header">
        <button onClick={() => history.goBack()}>
          &#8592; Back
        </button>
      </Header>

      {pokemon && (
        <section className="pokemon-section">
          <main className="pokemon-main">
            <Slider items={items} color={background[pokemon.backgroundColor]} />

            <section className="pokemon-main__right">
              <div className="pokemon-name-measures">
                <PokemonName name={pokemon.name} />
                <PokemonMeasures height={pokemon.height} weight={pokemon.weight} />
              </div>
              <div className="pokemon-type-stats">
                <PokemonType types={pokemon.type} />
                <PokemonStats stats={pokemon.stats} />
              </div>
            </section>
          </main>

          <PokemonAbilities names={pokemon.abilities} />
        </section>
      )}
    </>
  );
};