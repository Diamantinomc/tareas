
import './App.css';
import logo from './img/logo.jpg';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img  src={logo}
        alt='logo' 
        className='logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
