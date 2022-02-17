import ItemList from './ItemList';


const ItemListContainer = (props) => {

  
    return (
      <>
        <br />
        <h1>{props.titulo}</h1>
        
        <ItemList/>
      </>
    );
}

export default ItemListContainer;