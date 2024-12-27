import logo from './logo.svg';
import './App.css';
import Embed from './components/Embed.js';
import Link from './components/Link.js';

function App() {
  return (
    <div className="App">
      <span id="embedWrapper">
        <Embed class="embed" title="embed1" />
        {/* <Embed class="embed" title="embed2" />
        <Embed class="embed" title="embed3" /> */}
      </span>
    </div>
  );
}

export default App;
