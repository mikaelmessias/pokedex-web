import { useState } from 'react';
import { useSelector } from 'react-redux';
import PokeDexLogo from '~/assets/images/logo.png';
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

      <section className="home">

        <header className="home__header">
          <img src={PokeDexLogo} alt="PokeDex!" title="Logo da aplicação" />
        </header>

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