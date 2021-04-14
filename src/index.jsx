import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import "./index.scss";
import { Router } from './router';

const PokedexApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

render(<PokedexApp />, document.getElementById('root'));