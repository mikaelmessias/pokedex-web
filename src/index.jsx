import { render } from 'react-dom';

import "./index.scss";
import { Router } from './router';

const PokedexApp = () => (
  <Router />
);

render(<PokedexApp />, document.getElementById('root'));