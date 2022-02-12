import ItemCount from "./ItemCount";
//import ItemList from './ItemList';
//import { useState } from 'react';

const ItemListContainer = (props) => {

  //const [count , setCount ] = useState("");
  //const onAdd = (count) => setCount(count);
  const onAdd = (cant) => {
    console.log("Hola" + cant)
}
  //<ItemCount initial={1} stock={5} onclick={onAdd()} val={count} />

    return (
      <>
        <br />
        <h1>{props.titulo}</h1>

        <ItemCount stock={5} initial={1} clicked={() => onAdd()}/>
      </>
    );
  }

export default ItemListContainer;