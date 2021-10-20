import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';
function App() {
  return (
    <div className="App mt-5">
      <h1>Hola Mundo</h1>
      <p>----------------------------------------------------------</p>
      <Contador/>
      <p>----------------------------------------------------------</p>
      <Listado/>
      <p>----------------------------------------------------------</p>
      <Temperatura/>
      <p>----------------------------------------------------------</p>

    </div>

  );
}

export default App;
