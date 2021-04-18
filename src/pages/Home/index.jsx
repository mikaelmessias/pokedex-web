import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '~/components/Header/Header';
import { LoadingOverlay } from '~/components/LoadingOverlay/LoadingOverlay';
import { Pagination } from '~/components/Pagination/Pagination';
import { PokemonList } from './components/PokemonList/PokemonList';

import './styles.scss';

export const HomePage = () => {
  const { count, isLoading } = useSelector((state) => state.pokemon);
  const [customLimit, setCustomLimit] = useState(12);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <Header className="home__header" />

      <section className="home">
        <main className="home__content">
          <PokemonList />

          <Pagination
            total={count}
            limit={customLimit}
          />
        </main>
      </section>
    </>
  );
};