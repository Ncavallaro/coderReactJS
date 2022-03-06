import '../../componentsCSS/Body/ItemDetail.css';
import ItemCount from "./ItemCount";
import { useContext, useEffect, useState } from 'react';
import Checkout from '../Header/Checkout';
import { CartContext } from './CartContext';


const ItemDetail = (props) => {

    const [cant, setCant] = useState();
    const context = useContext(CartContext)

    const onAdd = (cant) => {
        alert('¿ Estas seguro de agregar ' + cant + ' viajes')
        setCant(cant)
        context.addToCart(props, cant)
    }

    useEffect(() => {
    },[cant])

    return(
        <>
            <article className='itemDetail'>
                <div className="tituloCenter">
                    <h3>{props.name}</h3>
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
        {
            cant === undefined || 0 ?
            <ItemCount stock={props.stock} initial={1} clicked={onAdd}/> : 
            <Checkout /> 
        }    
        </>
    )
}

export default ItemDetail;