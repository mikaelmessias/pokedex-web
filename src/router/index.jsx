import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from '~/pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};