import { render } from 'react-dom';

import "./index.scss";

export function App() {
  return (
    <h1>Hello World</h1>
  );
} 

render(<App />, document.getElementById('root'));