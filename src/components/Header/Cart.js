import { useContext } from "react";
import { CartContext } from "../Body/CartContext";
import img1 from '../../image/trips/1.png';
import img2 from '../../image/trips/2.png';
import img3 from '../../image/trips/3.png';
import img4 from '../../image/trips/4.png';
import img5 from '../../image/trips/5.png';
import img6 from '../../image/trips/6.png';
import img7 from '../../image/trips/7.png';
import img8 from '../../image/trips/8.png';
import img9 from '../../image/trips/9.png';
import img10 from '../../image/trips/10.png';
import img11 from '../../image/trips/11.png';
import img12 from '../../image/trips/12.png';
import img13 from '../../image/trips/13.png';
import '../../componentsCSS/Header/Cart.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartContext = useContext(CartContext);
    const costEnvio = 1;

    return(
        <div>
            <div className="tituloCenterCart">
                <h2>Carrito</h2>
            </div>
            <Link to='/'>
                <div className="btonGoBack">
                    <button>Volver a comprar</button>
                </div>
            </Link>
            {
                (cartContext.cartList.length > 0 )
                ? <div className="btonDeleteAll">
                        <button onClick={() => cartContext.clear()} >Vaciar carrito</button>
                  </div>
                : <div className="btonDeleteAll">
                        <h3 >El carrito esta vacio</h3>
                  </div>
            }
            {
                cartContext.cartList.map (item => 
                    <article className='itemDetailCart'>
                        <div className="imgDetailCart">
                            <div> 
                                <figure>
                                    <img src={item.img}/>
                                </figure>
                            </div>
                        </div>
                        <div className="gridCartProduc">
                            <h3>Producto: <p>{ item.name}</p></h3>
                            <h3>€ <p>{item.price }</p></h3>
                        </div>
                        <div className="gridCartCant">
                            <h3>Cantidad: <p>{item.cant}</p></h3>
                            <h3>Total: <p>{item.price * item.cant}</p></h3>
                            <Button className="btonDelete" variant="outlined"  startIcon={<DeleteIcon />} onClick={() => cartContext.removeItem(item.id)}>
                                Eliminar
                            </Button>
                        </div>
                    </article>            
            )
        }
        {
            cartContext.cartList.length > 0 &&
            <di className="cartTotal">
                <h3><b>Total de la compra</b></h3>
                <h3>Subtotal: <p>{" € " + cartContext.calculatePrice()} </p></h3>
                <h3>Envio: <p>{" € " + costEnvio} </p></h3>
                <h3>Total: <p>{" € " + cartContext.calculatePrice() + costEnvio} </p></h3>
                <button id="finalizar">Finalizar compra</button>
            </di>
        }
    </div>
    )
}

export default Cart;

/*
<button onClick={context.removeItem(item.id)}> eliminar</button>
*/