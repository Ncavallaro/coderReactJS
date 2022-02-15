import ItemCount from "./ItemCount";
import ItemList from './ItemList';


const ItemListContainer = (props) => {

  const onAdd = (cant) => {
    alert(cant)
  }

    return (
      <>
        <br />
        <h1>{props.titulo}</h1>
        
        <ItemList/>
        <ItemCount stock={5} initial={1} clicked={() => onAdd}/>
      </>
    );
}

export default ItemListContainer;