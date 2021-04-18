import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from '~/pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};