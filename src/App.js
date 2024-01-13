
import './App.css';
import logo from './img/logo.jpg';
import Tarea from './componentes/tarea';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img  src={logo} 
        className='logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender algo'/>
      </div>
    </div>
  );
}

export default App;
