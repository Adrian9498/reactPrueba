import './App.css';
import Contador from './components/Contador';
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';
import Formulario from './components/Formulario';
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
      <Formulario/>
      <p>----------------------------------------------------------</p>
    </div>

  );
}

export default App;
