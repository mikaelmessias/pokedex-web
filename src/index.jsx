import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from './router';

import "./sass/_global.scss";
import "./sass/_typography.scss";

const PokedexApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

render(<PokedexApp />, document.getElementById('root'));