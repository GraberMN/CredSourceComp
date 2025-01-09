import logo from './logo.svg';
import './App.css';
import Embed from './components/Embed.js';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <span>
        <label>How many sources? (2-4) </label>
        <select>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button>Confirm</button>
      </span>
      <span id="embedWrapperRow1">
        <Embed class="embed" title="embed1" />
        <Embed class="embed" title="embed2" />
      </span>
      <span id="embedWrapperRow2">
        <Embed class="embed" title="embed3" />
        <Embed class="embed" title="embed4" />
      </span>
    </div>
  );
}

export default App;
