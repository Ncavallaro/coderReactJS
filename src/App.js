import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Body/ItemListContainer';




function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo="Bienvenidos a Tienda de emprendedores"/>
    </>
  );
}

export default App;
