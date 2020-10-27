import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checkbox, Accordion } from '@openvtb/react-ui-kit';

function App() {
  const [checked, setCheked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Checkbox onChange={() => setCheked(!checked)} checked={checked} />
        <Accordion
          list={[
            {
              id: 0,
              title: 'Title name',
              content: 'Lorem ipsum dolor...',
            },
            {
              id: 1,
              title: 'Title name',
              content: 'Lorem ipsum dolor...',
            },
            {
              id: 2,
              title: 'Title name',
              content: 'Lorem ipsum dolor...',
            },
          ]}
          width={600}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
