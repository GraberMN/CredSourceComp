import logo from './logo.svg';
import './App.css';
import Embed from './components/Embed.js';
import { useState, useEffect } from 'react';
import SourceSelect from './components/SourceSelect.js';

function App() {
  const [sourceNum, setSourceNum] = useState(2)
  const [newSourceNum, setNewSourceNum] = useState(false)
  useEffect(() => {
    console.log(sourceNum)
  }, [newSourceNum])
  return (
    <div className="App">
      <span>
        <SourceSelect sourceNum={sourceNum} setSourceNum={setSourceNum} newSourceNum={newSourceNum} setNewSourceNum={setNewSourceNum} />
      </span>
      <span id="embedWrapperRow1">
        <Embed className="embed" title="embed1" />
        <Embed className="embed" title="embed2" />
      </span>
      <span id="embedWrapperRow2">
        <Embed className="embed" title="embed3" />
        <Embed className="embed" title="embed4" />
      </span>
    </div>
  );
}

export default App;
