import './App.css';
import Mensaje from './Mensaje';

const Descrripcion = () => {
  return <p>Esta es la pp del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando ' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De react' />
      <Descrripcion />
    </div>
  );
}

export default App;
