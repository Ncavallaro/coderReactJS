import '../../componentsCSS/Body/Item.css';

const Item = (props) => {
    return(
        <article className='item'>
            <figure>
                <img src={props.img}/>
            </figure>
            <h3>{props.title}</h3>
            <h4>{"€ " + props.price}</h4>
            <button className='btnDetalle'>Detalle</button>
        </article>
    )
}

export default Item;
