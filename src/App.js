import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import InputCounter from './InputCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter />
        <HoverCounter />
        <InputCounter />
      </header>
    </div>
  );
}

export default App;
