import { useContext } from "react";
import { CartContext } from "../Body/CartContext";
import '../../componentsCSS/Header/Cart.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { collection, serverTimestamp , doc , setDoc, updateDoc, increment } from 'firebase/firestore'
import db from '../firebaseConfig'

const Cart = () => {
    const cartContext = useContext(CartContext);
    const costEnvio = 1;

    const createOrder = () => {
        let order = {
            buyer: {
                email: 'nico@gmail.com',
                name: 'Nicolas Cavallaro',
                phone: '1122334455'
            },
            items: cartContext.cartList.map((it) => {
                return { id:it.id, price:it.price, title: it.name, cant: it.cant};
            }),
            date: serverTimestamp(),
            total: cartContext.calculatePrice()
        }
        console.log(order)

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
        .then((result) => {
            alert('El codigo identificador de tu compra es: ' + result.id);
            //Descuento la cantidad del stock
            cartContext.cartList.map(async (item) => {
              const itemRef = doc(db, "dataTrips", item.id);
              await updateDoc(itemRef,{
                  stock: increment(-item.cant)
              })
            })
            //Limpio el carrito 
            cartContext.clear(); 
        })
        .catch(error => console.log(error));        
    }

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
                <button id="finalizar" onClick={createOrder}>Finalizar compra</button>
            </di>
        }
    </div>
    )
}

export default Cart;