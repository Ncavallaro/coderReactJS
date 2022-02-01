import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo="Bienvenidos a Tienda de emprendedores"/>
    </>
  );
}

export default App;
