import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNextPage,
  fetchPokemonList,
  fetchPrevPage,
} from '@Store/ducks/pokemon/actions';
import { LoadingOverlay } from '@Components/LoadingOverlay/LoadingOverlay';
import { Pagination } from '@Components/Pagination/Pagination';
import { PokemonList } from './components/PokemonList/PokemonList';

import PokeDexLogo from '@Assets/images/logo.png';

import './styles.scss';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { count, isLoading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  const onPrevButtonClick = () => {
    dispatch(fetchPrevPage());
  };

  const onNextButtonClick = () => {
    dispatch(fetchNextPage());
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />

      <section className="home">

        <header className="home__header">
          <img src={PokeDexLogo} alt="PokeDex!" title="Logo da aplicação" />
        </header>

        <main className="home__content">
          <PokemonList />

          <Pagination
            total={count}
            onPrev={onPrevButtonClick}
            onNext={onNextButtonClick}
          />
        </main>
      </section>
    </>
  );
};