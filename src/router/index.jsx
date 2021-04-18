import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from '~/pages/Home';
import { PokemonPage } from '~/pages/Pokemon';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pokemon/:pokemonId">
          <PokemonPage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};