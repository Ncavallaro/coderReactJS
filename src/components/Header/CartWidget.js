import '../../componentsCSS/Header/CartWidget.css';


const CartWidget = (props) =>{
    return (
        <a className="navbar-brand" href="#" id='logoCompras'>
            <img src={props.imagen} alt="" width="45" height="45" />
            <div id="carritoCant">{props.cant}</div>            
        </a>
    );
}

export default CartWidget;