import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Body/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
          path="/"
          element={
            <ItemListContainer titulo="Cava Viajes "/>
          }
        ></Route>
        <Route 
          path="/category/:idCategory"
          element={
            <ItemListContainer titulo="Cava Viajes"/>
          }
        ></Route>
        <Route 
          path="/item/:id"
          element={
            <ItemDetailContainer />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*
<ItemListContainer titulo="Bienvenidos a Viajes cava"/>
<ItemDetailContainer/>
*/ 