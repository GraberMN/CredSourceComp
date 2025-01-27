import logo from './logo.svg';
import './App.css';
import Embed from './components/Embed.js';
import { useState, useEffect, useReducer } from 'react';
import SourceSelect from './components/SourceSelect.js';

const initialState = { embed3Display: 'none', embed4Display: 'none' }
const reducer = (state, action) => {
  switch (action) {
    case '2':
      return initialState
    case '3':
      return { embed3Display: 'flex', embed4Display: 'none' }
    case '4':
      return { embed3Display: 'flex', embed4Display: 'flex' }
    default:
      return state
  }
}

function App() {
  const [sourceNum, setSourceNum] = useState(2)
  const [newSourceNum, setNewSourceNum] = useState(2)
  const [displayEmbed, dispatch] = useReducer(reducer, initialState)
  const [embed3Style, setEmbed3Style] = useState({ display: 'none' })
  const [embed4Style, setEmbed4Style] = useState({ display: 'none' })
  useEffect(() => {
    let newEmbed3Style
    let newEmbed4Style
    if (newSourceNum === 2) {
      newEmbed3Style = { display: 'none' }
      newEmbed4Style = { display: 'none' }
    } else if (newSourceNum === 3) {
      newEmbed3Style = { display: 'flex' }
      newEmbed4Style = { display: 'none' }
    } else {
      newEmbed3Style = { display: 'flex' }
      newEmbed4Style = { display: 'flex' }
    }
    setEmbed3Style(newEmbed3Style)
    setEmbed4Style(newEmbed4Style)
    console.log(embed3Style)
    console.log(embed4Style)
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
        <Embed className="embed" title="embed3" style={embed3Style} />
        <Embed className="embed" title="embed4" style={embed4Style} />
      </span>
    </div>
  );
}

export default App;
