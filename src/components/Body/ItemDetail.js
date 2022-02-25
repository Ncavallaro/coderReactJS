import '../../componentsCSS/Body/ItemDetail.css';
import ItemCount from "./ItemCount";
import Modal from "./Modal";
import { useEffect, useState } from 'react';
import Checkout from '../Header/Checkout';


const ItemDetail = (props) => {

    const [open, setOpen] = useState(false);
    const [cant, setCant] = useState();

    const onAdd = (cant) => {
        alert('¿ Estas seguro de agregar ' + cant + ' viajes ?')
        setCant(cant)
    }

    const handleClose = () => setOpen(false);

    useEffect(() => {
    },[cant])
    //TODO: Cambiar ese alert por una modal
    //TODO: Cuando le doy al boton ok de la modal, tengo que verificar si cant mas > 0 y ocultar el componenete y mostrar el componente Checkout
    //TODO: Min 01:10:00
    console.log(cant)

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

        {
            cant === undefined || 0 ?
            <ItemCount stock={5} initial={1} clicked={onAdd}/> : 
            <Checkout /> 
        }
       
       
        
        </>
    )
}

export default ItemDetail;


/**
 *  <Modal open={open} onClose={handleClose} />
 */