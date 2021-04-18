import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchPokemon } from '~/store/ducks/pokemon';
import { background } from '~/utils/colors';
import { Header } from '~/components/Header/Header';
import { LoadingOverlay } from '~/components/LoadingOverlay/LoadingOverlay';
import { Slider } from '~/components/Slider';
import "./styles.scss";

export const PokemonPage = () => {
  const query = useParams();
  const dispatch = useDispatch();
  const { pokemon, isLoading } = useSelector((state) => state.pokemon);
  const history = useHistory();

  const [items, setItems] = useState([]);
  

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
          &#8592; Voltar
        </button>
      </Header>

      {pokemon && (
        <section className="pokemon-section">
          <aside className="pokemon-aside">
            <Slider items={items} color={background[pokemon.backgroundColor]} />
          </aside>

          <main className="pokemon__main"></main>
        </section>
      )}
    </>
  );
};