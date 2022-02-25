import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Body/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import Cart from './components/Header/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
          path="/"
          element={
            <ItemListContainer/>
          }
        ></Route>
        <Route 
          path="/category/:idCategory"
          element={
            <ItemListContainer/>
          }
        ></Route>
        <Route 
          path="/item/:id"
          element={
            <ItemDetailContainer />
          }
        ></Route>
        <Route 
          path="/cart"
          element={
            <Cart />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;