import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a mi Primer PreEntrega N°1 de React"/>
  
    </div>
  );
}

export default App;
