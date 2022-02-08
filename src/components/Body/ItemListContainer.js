import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
      <>
        <br />
        <h1>{props.titulo}</h1>

        <ItemCount/>
      </>
    );
  }

export default ItemListContainer;