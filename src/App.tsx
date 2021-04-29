import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

export function blah(n: number) {
  return n * 2;
}

function App() {
  const [b] = useState(2);
  useEffect(() => {
    const a = b * blah(b);
    console.log(a);
  }, [b]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save 👩‍🔧 to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
