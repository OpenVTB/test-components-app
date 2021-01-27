import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checkbox, Accordion } from '@openvtb/react-ui-kit';

const initialList = [
    {
        id: 0,
        title: 'Title name',
        content: 'Lorem ipsum dolor...',
        expanded: true
    },
    {
        id: 1,
        title: 'Title name',
        content: 'Lorem ipsum dolor...',
        expanded: false
    },
    {
        id: 2,
        title: 'Title name',
        content: 'Lorem ipsum dolor...',
        expanded: false
    },
]
function App() {
  const [checked, setCheked] = useState(false);
  const [list, setList] = useState(initialList)
  function handleAccordionChange(id: React.ReactText, expanded: boolean){
    console.log(`id: ${id}, expanded: ${expanded}`)

      const el = list.find(el => el.id === id);
        if (el) {
            el.expanded = expanded;
            setList([...list]);
        }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Checkbox onChange={() => setCheked(!checked)} checked={checked} />
        <Accordion
          list={list}
          onChange={handleAccordionChange}
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
