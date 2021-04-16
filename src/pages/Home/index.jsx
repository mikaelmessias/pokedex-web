import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNextPage,
  fetchPokemonList,
  fetchPrevPage,
} from '@Store/ducks/pokemon/actions';
import { LoadingOverlay } from '@Components/LoadingOverlay/LoadingOverlay';
import { PokemonList } from './components/PokemonList/PokemonList';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { count, previous, next, isLoading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />

      <div>
        <h1>Hello, World</h1>
        
        <PokemonList />
      
        Pages: {Math.round(parseFloat(count / 20))}

        <button
          type="button"
          onClick={() => dispatch(fetchPrevPage())}
          disabled={!previous || isLoading}
        >
            Anterior
        </button>
        <button
          type="button"
          onClick={() => dispatch(fetchNextPage())}
          disabled={!next || isLoading}
        >
          Próxima
        </button>
      </div>
    </>
  );
};