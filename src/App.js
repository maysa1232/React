import logo from './logo.svg';
import './App.css';
import PersonCard from './components/com1.jsx';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age= {45} Hair= "Black"/>
      <PersonCard firstName="Roonie" lastName="Mclil" age= {22} Hair= "Black"/>
      <PersonCard firstName="Lana" lastName="Dory" age= {32} Hair= "Black"/>
      <PersonCard firstName="Jenny" lastName="Von" age= {55} Hair= "Black"/>
    </div>
  );
}

export default App;
