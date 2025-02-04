import logo from './logo.svg';
import './App.css';
import Embed from './components/Embed.js';
import { useState, useEffect} from 'react';
import SourceSelect from './components/SourceSelect.js';

let newEmbed3Style = { display: 'none' }
let newEmbed4Style = { display: 'none' }

function App() {
  const [sourceNum, setSourceNum] = useState(2)
  const [embed3Style, setEmbed3Style] = useState({ display: 'none' })
  const [embed4Style, setEmbed4Style] = useState({ display: 'none' })
  useEffect(() => {
    console.log(sourceNum)
    newEmbed3Style = { display: 'none' }
    newEmbed4Style = { display: 'none' }
    if (sourceNum === 2) {
      newEmbed3Style = { display: 'none' }
      newEmbed4Style = { display: 'none' }
    } else if (sourceNum === 3) {
      newEmbed3Style = { display: 'flex' }
      newEmbed4Style = { display: 'none' }
    } else {
      newEmbed3Style = { display: 'flex' }
      newEmbed4Style = { display: 'flex' }
    }
    console.log(newEmbed3Style)
    console.log(newEmbed4Style)
    setEmbed3Style(newEmbed3Style)
    setEmbed4Style(newEmbed4Style)
  }, [sourceNum])
  return (
    <div className="App">
      <span>
        <SourceSelect sourceNum={sourceNum} setSourceNum={setSourceNum} />
      </span>
      <span id="embedWrapperRow1">
        <Embed className="embed" title="embed1" />
        <Embed className="embed" title="embed2" />
      </span>
      <span id="embedWrapperRow2">
        <Embed className="embed" title="embed3" style={embed3Style} />
        <Embed className="embed" title="embed4" style={embed4Style} />
      </span>
    </div>
  );
}

export default App;
