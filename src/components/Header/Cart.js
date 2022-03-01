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

const Cart = () => {

    const cartContext = useContext(CartContext);
    const context = useContext(CartContext)

    console.log(cartContext.cartList)
    return(
        <div>
            <div className="tituloCenterCart">
                <h2>Carrito</h2>
            </div>
            <div className="btonDeleteAll">
                <button onClick={() => context.clear()} >Vaciar carrito</button>
            </div>
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
                            <Button className="btonDelete" variant="outlined"  startIcon={<DeleteIcon />} onClick={() => context.removeItem(item.id)}>
                                Eliminar
                            </Button>
                        </div>
                    </article>            
            )
        }
    </div>
    )
}

export default Cart;

/*
<button onClick={context.removeItem(item.id)}> eliminar</button>
*/