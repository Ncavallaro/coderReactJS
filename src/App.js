import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';
//import ItemListContainer from './components/Body/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer';




function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer/>
    </>
  );
}

export default App;


/*
<ItemListContainer titulo="Bienvenidos a Viajes cava"/>
*/ 