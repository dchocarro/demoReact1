import './App.css';
import Productos from './components/productos/Productos';

function App() {

  const productos = [
    {
      nombre: 'Ratón óptico 1',
      precio: 15.50,
      fecha: new Date(2022, 2, 2)
    },
    {
      nombre: 'Ratón óptico 2',
      precio: 25.50,
      fecha: new Date(2022, 2, 2)
    },
    {
      nombre: 'Ratón óptico 3',
      precio: 9.50,
      fecha: new Date(2022, 2, 2)
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <p>It's working</p>
      <Productos productos={productos} />
      
    </div>
  );
}

export default App;
