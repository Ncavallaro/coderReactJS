import { Link } from 'react-router-dom';
import '../../componentsCSS/Body/Item.css';

const Item = (props) => {
    return(
        <article className='item'>
            <figure>
                <img src={props.img}/>
            </figure>
            <h3>{props.title}</h3>
            <h4>{"€ " + props.price}</h4>
            <Link to={'/item/' + props.id}>
                <button className='btnDetalle'>Detalle</button>
            </Link>
        </article>
    )
}

export default Item;
