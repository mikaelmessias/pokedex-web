import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoadingOverlay } from '@Components/LoadingOverlay/LoadingOverlay';
import { Pagination } from '@Components/Pagination/Pagination';
import { PokemonList } from './components/PokemonList/PokemonList';
import PokeDexLogo from '@Assets/images/logo.png';

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