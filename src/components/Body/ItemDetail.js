import ItemCount from "./ItemCount";
import '../../componentsCSS/Body/ItemDetail.css';

const onAdd = (cant) => {
    alert(cant)
  }

const ItemDetail = (props) => {
    return(
        <>
            <article className='itemDetail'>
                <div className="tituloCenter">
                    <h3>{props.title}</h3>
                </div>
                <div className="imgDetail">
                    <div> 
                        <figure>
                            <img src={props.img}/>
                        </figure>
                    </div>
                    <div >
                        <hr/>
                            <p><b>Descripción: </b>{props.descrption}</p>
                        <hr/>
                            <p><b>Incluye: </b>{props.includ}</p>
                            <h4>{"€ " + props.price}</h4>
                        <hr/>
                        <div class="inputStock">
                            <input className="form-control" type="text" disabled value={"Stock " + props.stock + " unidades"} />
                        </div>
                    </div>
                </div>
        </article>

        <ItemCount stock={5} initial={1} clicked={onAdd}/>
        </>
    )
}

export default ItemDetail;
